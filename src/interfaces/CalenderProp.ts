type onPressType = (date: Date) => void;

export interface HorizontalCalenderProp {
    onPressed: onPressType, 
    userSelectedDate: Date;
     startingDate: Date;
     numberOfDays: number; 
     populateDatesOnLastDateSelect: boolean, 
     horizontal?: boolean
  }
  