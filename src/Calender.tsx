// Native Packages
import * as React from 'react';
import { FlatList } from 'react-native';
import * as moment from 'moment';
// Interfaces
import { HorizontalCalenderProp } from './interfaces/CalenderProp';
import { DateProp } from './interfaces/DateProp';
import SelectedDay from './component/SelectedDay';
import WeekEndDay from './component/WeekEndDay';
import UnselectedDay from './component/UnselectedDay';
// Utils
import { DateFormats } from './utils/DateFormat';

let currentNumberOfDays = 15;
let daysDifference = 0;

const CustomHorizontalCalender = (props: HorizontalCalenderProp) => {
    const [selectedDate, selectedSelectedDate] =React. useState(props.selectedDate);
    const [dates, setDates] = React.useState<(moment.Moment | moment.Moment[])[]>([]);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const flatListRef = React.useRef<FlatList>(null);
    // Key extractor used for
    const keyExtractor = (item: any) => item?.toString();
    React.  useEffect(() => {
        daysDifference = moment(selectedDate).diff(new Date(), 'days') + currentNumberOfDays; // Adding 10 so that we can load next 10 days as well
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
    }, [dates, selectedIndex, selectedDate]);
    React. useEffect(() => {
        selectedSelectedDate(props.selectedDate);
    }, [props.selectedDate]);
    // differnece between current and selected date from previous props
    const dateSubtractDays = (date: Date, days: number) => {
        return moment(date).add(days, 'days');
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
        const today = new Date(props.startingDate);
        let result:  moment.Moment[] = [];

        for (let i = 0; i < days; i++) {
            result[i] = dateSubtractDays(today, i);
        }
        const newDates = [...result];
        setDates(newDates);
    };
    const onDatePress = (date: any) => {
        selectedSelectedDate(date);
    };
    const renderItem = ({ item, index }: DateProp) => {
        const day = moment(item).format(DateFormats.DD);
        const dayName = moment(item).format(DateFormats.DDD);
        const key = moment(item).unix();
        const isSelected = isSameDay(new Date(selectedDate), item, index);
        const onPress = () => {
           props.onPressed();
            onDatePress(item);
        };

        if (isSelected) {
            return <SelectedDay day={day} dayName={dayName} key={key} onPress={onPress} />;
        } else {
            if (dayName == 'Sun' || dayName == 'Sat') {
                return <WeekEndDay day={day} dayName={dayName} key={key} onPress={onPress} />;
            } else {
                return <UnselectedDay day={day} dayName={dayName} key={key} onPress={onPress} />;
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
    return (
        <FlatList
            ref={flatListRef}
            data={dates}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={365}
            maxToRenderPerBatch={365}
            removeClippedSubviews
            onEndReachedThreshold={0.5}
            scrollEventThrottle={16}
            onScrollToIndexFailed={scrollToIndexFailed}
        />
    );
};

// export default memo(CustomHorizontalCalender);
export default CustomHorizontalCalender;



