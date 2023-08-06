import   React from "react";
import { Text, TouchableOpacity } from "react-native";
import { DayProp } from "../interfaces/DayProp";
import { styles } from "../index.styles";

const UnselectedDay = (props: DayProp) => {
    return (
        <TouchableOpacity
            style={[styles.alignItemCenter, styles.unSelectedCard]}
            onPress={props.onPress}
        >
            <Text style={styles.unSelectedDay}>{props?.dayName}</Text>
            <Text style={styles.unselectedDate}>{props?.day}</Text>
        </TouchableOpacity>
    );
};


export default UnselectedDay