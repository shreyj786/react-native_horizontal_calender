export interface HorizontalCalenderProp {
    onPressed: () => void;
    userSelectedDate: string;
     startingDate: string;
     numberOfDays: number; 
     populateDatesOnLastDateSelect: boolean, 
     horizontal?: boolean
}
