export interface HorizontalCalenderProp {
    onPressed: () => void;
    selectedDate: string;
    // Date from where calender should start rendering
    startingDate: string;
    isSRPFirstPage: boolean;
}
