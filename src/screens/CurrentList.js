import React from "react";
import { View, Text, SafeAreaView, ScrollView, FlatList } from "react-native";
import nachos from "../data/nachos";
import ListItem, { Separator } from "../components/ListItem";
import AddItem from "../components/AddItem";

export default () => {
    return (
        <SafeAreaView>
            <AddItem />
            <FlatList
                data={nachos}
                renderItem={({ item, index }) => (
                    <ListItem
                        name={item.name}
                        onFavoritePress={() => alert("todo: handle favorite!")}
                        isFavorite={index < 2}
                    />
                )}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <Separator />}
            />
        </SafeAreaView>
    );
};
