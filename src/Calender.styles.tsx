import { StyleSheet } from 'react-native';
import { Color } from './utils/color';

export const styles = StyleSheet.create({
    unSelectedCard: {
        backgroundColor: 'transparent',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
    },

    // Unselected
    unselectedDate: {
        fontSize: 16,
        color: Color.blackColor.black100,
        fontWeight: '600',
    },
    unSelectedDay: {
        fontSize: 12,
        color: Color.blackColor.black50,
        fontWeight: '500',
        lineHeight: 20,
    },

    // Weekend
    weekEndDate: {
        fontSize: 16,
        color: Color.blueColor.iconBlue,
        fontWeight: '600',
    },

    weekEndDay: {
        fontSize: 12,
        color: Color.blueColor.iconBlue,
        fontWeight: '500',
        lineHeight: 20,
    },

    // Selected
    card: {
        backgroundColor: Color.blueColor.iconBlue,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
    },
    selectedDate: {
        fontSize: 16,
        color: Color.whiteColor.white,
        fontWeight: '600',
    },

    selectedDay: {
        fontSize: 12,
        color: Color.whiteColor.white,
        fontWeight: '500',
        lineHeight: 20,
    },
    alignItemCenter: {
        alignItems: 'center',
    },
});
