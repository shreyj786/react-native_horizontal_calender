// Native Packages
import React from 'react';
import {FlatList, View} from 'react-native';
import moment from 'moment';
// Interfaces
import {DateProp} from './interfaces/DateProp';
import SelectedDay from './component/SelectedDay';
import WeekEndDay from './component/WeekEndDay';
import UnselectedDay from './component/UnselectedDay';
import {DateFormats} from './utils/DateFormat';
import { HorizontalCalenderProp } from './interfaces/CalenderProp';
// Utils
let daysDifference = 0;

const HorizontalCalender = ({
  onPressed,
  userSelectedDate,
  startingDate,
  numberOfDays,
  populateDatesOnLastDateSelect = true,
  horizontal = true
}: HorizontalCalenderProp) => {
  const [selectedDate, selectedSelectedDate] = React.useState(userSelectedDate);
  const [dates, setDates] = React.useState<(Date[])>(
    []
  );
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const flatListRef = React.useRef<FlatList>(null);
  React.useEffect(() => {
    daysDifference =
      moment(selectedDate.toISOString()).diff(new Date(), 'days') + numberOfDays; // Adding 10 so that we can load next 10 days as well
    generateHorizontalCalendarDates(daysDifference);
  }, []);
  React.useEffect(() => {
    if (dates.length > 0) {
      setTimeout(() => {
        flatListRef?.current?.scrollToIndex({
          animated: true,
          index: selectedIndex,
          viewOffset: 20,
        });
      }, 100);
    }
  }, [ selectedIndex, selectedDate]);
  // differnece between current and selected date from previous props
  const dateSubtractDays = (date: Date, days: number):Date => {
    return moment(date).add(days, 'days').toDate();
  };
  // returns selected date
  const isSameDay = (date1: Date, date2: Date, index: number) => {
    const isSameDaySelected =
      moment(date1).format(DateFormats.doMMMYYYY) ===
      moment(date2).format(DateFormats.doMMMYYYY);
    if (isSameDaySelected) setSelectedIndex(index);
    return isSameDaySelected;
  };
  // generates horizontal dates
  const generateHorizontalCalendarDates = (days: number) => {
    const today = startingDate;
    let result: Date[] = [];

    for (let i = 0; i < days; i++) {
      result[i] = dateSubtractDays(today, i);
    }
    setDates(result);
  };
  
  const onPress = (item: Date) => {
    selectedSelectedDate(item); 
    onPressed(item)
  };
 
  const renderItem = ({item, index}: DateProp) => {
    const day = moment(item).format(DateFormats.DD);
    const dayName = moment(item).format(DateFormats.DDD);
    const key = moment(item).unix();
    const isSelected = isSameDay(new Date(selectedDate), item, index);

    if (isSelected) {
      return (
        <SelectedDay
          day={day}
          dayName={dayName}
          key={key}
          onPress={() => {
            onPress(item)

          }
          }  
        />
      );
    } else {
      if (dayName == 'Sun' || dayName == 'Sat') {
        return (
          <WeekEndDay
            day={day}
            dayName={dayName}
            key={key}
            onPress={() => {
              onPress(item)
            }
            }  
          />
        );
      } else {
        return (
          <UnselectedDay
            day={day}
            dayName={dayName}
            key={key}
            onPress={() => {
              onPress(item)
            }
            }  
          />
        );
      }
    }
  };
  const scrollToIndexFailed = () => {
    setTimeout(() => {
      flatListRef?.current?.scrollToIndex({
        animated: true,
        index: selectedIndex,
        viewOffset: 20,
      });
    }, 100);
  };
  const onEndReached = () => {
    daysDifference = numberOfDays + daysDifference;
    console.log('daysDifference', daysDifference);
    generateHorizontalCalendarDates(daysDifference);
  };

  return (
    <FlatList
      ref={flatListRef}
      data={dates}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal={horizontal}
      showsHorizontalScrollIndicator={false}
      initialNumToRender={365}
      maxToRenderPerBatch={365}
      onEndReached={() => {
        populateDatesOnLastDateSelect ? onEndReached() : null;
      }}
      removeClippedSubviews
      onEndReachedThreshold={0.5}
      scrollEventThrottle={16}
      onScrollToIndexFailed={scrollToIndexFailed}
    />
  );
};

export default HorizontalCalender;
