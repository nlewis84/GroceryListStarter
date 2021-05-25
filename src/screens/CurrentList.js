import React from "react";
import { View, Text, SafeAreaView, ScrollView, FlatList } from "react-native";
import nachos from "../data/nachos";
import ListItem, { Separator } from "../components/ListItem";

export default () => {
    return (
        <SafeAreaView>
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

    // return (
    //     <SafeAreaView>
    //         <ScrollView>
    //             {nachos.map((item, index) => (
    //                 <React.Fragment>
    //                     <Separator />
    //                     <ListItem
    //                         key={item.id}
    //                         name={item.name}
    //                         onFavoritePress={() =>
    //                             alert("todo: handle favorite!")
    //                         }
    //                         isFavorite={index < 2}
    //                     />
    //                 </React.Fragment>
    //             ))}
    //         </ScrollView>
    //     </SafeAreaView>
    // );
};
