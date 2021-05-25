import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Platform,
} from "react-native";

const ListItem = ({ name, onFavoritePress, isFavorite }) => {
    let starIcon;
    // let starIcon = Platform.select({
    //     ios: require("../assets/icons/ios-star-outline.png"),
    //     android: require("../assets/icons/md-star-outline.png"),
    // });

    if (isFavorite) {
        if (Platform.OS === "ios") {
            starIcon = require("../assets/icons/ios-star.png");
        } else {
            starIcon = require("../assets/icons/md-star.png");
        }
    } else {
        if (Platform.OS === "ios") {
            starIcon = require("../assets/icons/ios-star-outline.png");
        } else {
            starIcon = require("../assets/icons/md-star-outline.png");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
            {onFavoritePress && (
                <TouchableOpacity onPress={onFavoritePress}>
                    <Image
                        source={starIcon}
                        style={styles.icon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            )}
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

        // ...Platform.select({
        //     ios: {
        //         tintColor: "blue",
        //     },
        //     android: {
        //         tintColor: "red",
        //     },
        // }),
    },
    separator: {
        felx: 1,
        height: 1,
        backgroundColor: "rgba(0,0,0,0.2)",
    },
});

export const Separator = () => <View style={styles.separator} />;
