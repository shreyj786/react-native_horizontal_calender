import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { DayProp } from "../interfaces/DayProp";
import { styles } from "../index.styles";

const WeekEndDay = (props: DayProp) => {
    return (
        <TouchableOpacity
            style={[styles.alignItemCenter, styles.unSelectedCard]}
            onPress={props.onPress}
        >
            <Text style={styles.weekEndDay}>{props?.dayName}</Text>
            <Text style={styles.weekEndDate}>{props?.day}</Text>
        </TouchableOpacity>
    );
};

export default WeekEndDay