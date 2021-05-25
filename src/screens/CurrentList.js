import React, { useState } from "react";
import { SafeAreaView, FlatList, KeyboardAvoidingView } from "react-native";
import nachos from "../data/nachos";
import ListItem, { Separator } from "../components/ListItem";
import AddItem from "../components/AddItem";
import uuid from "uuid/v4";

export default () => {
    const [list, setList] = useState(nachos);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <FlatList
                    data={list}
                    renderItem={({ item, index }) => (
                        <ListItem
                            name={item.name}
                            onFavoritePress={() =>
                                alert("todo: handle favorite!")
                            }
                            isFavorite={index < 2}
                            onAddedSwipe={() => alert("todo: on added swipe")}
                            onDeleteSwipe={() => alert("todo: on delete swipe")}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <Separator />}
                    ListHeaderComponent={() => (
                        <AddItem
                            onSubmitEditing={({ nativeEvent: { text } }) => {
                                setList([{ id: uuid(), name: text }, ...list]);
                            }}
                        />
                    )}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
