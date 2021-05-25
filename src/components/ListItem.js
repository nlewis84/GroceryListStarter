import React from "react";
import {
    View,
    Animated,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Platform,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

const LeftActions = (progress, dragX) => {
    const scale = dragX.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1],
        extrapolate: "clamp",
    });

    return (
        <View style={styles.leftAction}>
            <Animated.Text
                style={[styles.actionText, { transform: [{ scale }] }]}
            >
                Add to Cart
            </Animated.Text>
        </View>
    );
};

const RightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
        inputRange: [-100, 0],
        outputRange: [1, 0],
        extrapolate: "clamp",
    });

    return (
        <View style={styles.rightAction}>
            <Animated.Text
                style={[styles.actionText, { transform: [{ scale }] }]}
            >
                Delete
            </Animated.Text>
        </View>
    );
};

export const SectionHeader = ({ title }) => (
    <View style={[styles.container, styles.sectionContainer]}>
        <Text style={styles.sectionText}>{title}</Text>
    </View>
);

const ListItem = ({
    name,
    onFavoritePress,
    isFavorite,
    onAddedSwipe,
    onDeleteSwipe,
    onRowPress,
}) => {
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
        <TouchableOpacity onPress={onRowPress}>
            <Swipeable
                onSwipeableLeftOpen={onAddedSwipe}
                onSwipeableRightOpen={onDeleteSwipe}
                renderLeftActions={onAddedSwipe && LeftActions}
                renderRightActions={onDeleteSwipe && RightActions}
            >
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
            </Swipeable>
        </TouchableOpacity>
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
    leftAction: {
        flex: 1,
        backgroundColor: "#388e3c",
        justifyContent: "center",
    },
    rightAction: {
        flex: 1,
        backgroundColor: "#dd2c00",
        alignItems: "flex-end",
        justifyContent: "center",
    },
    actionText: {
        color: "#fff",
        fontWeight: "600",
        padding: 20,
    },
    sectionText: {
        fontWeight: "600",
    },
    sectionContainer: {
        backgroundColor: "#d3d3d3",
        paddingVertical: 10,
    },
});

export const Separator = () => <View style={styles.separator} />;
