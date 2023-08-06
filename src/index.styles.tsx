import { StyleSheet } from 'react-native';
import { Color } from './utils/Color';

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
        color: Color.black100,
        fontWeight: '600',
    },
    unSelectedDay: {
        fontSize: 12,
        color: Color.black50,
        fontWeight: '500',
        lineHeight: 20,
    },
    // Weekend
    weekEndDate: {
        fontSize: 16,
        color: Color.iconBlue,
        fontWeight: '600',
    },
    weekEndDay: {
        fontSize: 12,
        color: Color.iconBlue,
        fontWeight: '500',
        lineHeight: 20,
    },
    // Selected
    card: {
        backgroundColor: Color.iconBlue,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
    },
    selectedDate: {
        fontSize: 16,
        color: Color.white,
        fontWeight: '600',
    },
    selectedDay: {
        fontSize: 12,
        color: Color.white,
        fontWeight: '500',
        lineHeight: 20,
    },
    alignItemCenter: {
        alignItems: 'center',
    },
});
