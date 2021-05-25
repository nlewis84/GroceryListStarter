import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ListItem = ({ name }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
            <Image
                source={require("../assets/icons/ios-star-outline.png")}
                style={styles.icon}
                resizeMode="contain"
            />
        </View>
    );
};

export default ListItem;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: "row",
        backgroundColor: "#fff",
        justifyContent: "space-between",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        color: "#696969",
    },
    icon: {
        height: 30,
        width: 30,
        tintColor: "#69696969",
    },
    separator: {
        felx: 1,
        height: 1,
        backgroundColor: "rgba(0,0,0,0.2)",
    },
});

export const Separator = () => <View style={styles.separator} />;
