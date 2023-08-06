import { Text, TouchableOpacity } from "react-native";
import { DayProp } from "../interfaces/DayProp";
import { styles } from "../Calender.styles";
import React from "react";

const SelectedDay = (props: DayProp) => {
    return (
        <TouchableOpacity
            style={[styles.alignItemCenter, styles.card]}
            onPress={props.onPress}
        >
            <Text style={styles.selectedDay}>{props?.dayName}</Text>
            <Text style={styles.selectedDate}>{props?.day}</Text>
        </TouchableOpacity>
    );
};


export default SelectedDay