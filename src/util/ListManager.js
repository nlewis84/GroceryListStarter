import { useState, useEffect } from "react";
import uuid from "uuid/v4";
import AsyncStorage from "@react-native-async-storage/async-storage";

const updateStoredCurrentList = (list) => {
    AsyncStorage.setItem("@@GroceryList/currentList", JSON.stringify(list));
};

const updateStoredCurrentCart = (list) => {
    AsyncStorage.setItem("@@GroceryList/currentCart", JSON.stringify(list));
};

export const useCurrentList = () => {
    const [list, setList] = useState([]);
    const [cart, setCart] = useState([]);

    const [loading, setLoading] = useState(true);

    const addItem = (text) => {
        const newList = [{ id: uuid(), name: text }, ...list];
        setList(newList);
        updateStoredCurrentList(newList);
    };

    const removeItem = (id) => {
        const newList = list.filter((item) => item.id !== id);
        setList(newList);
        updateStoredCurrentList(newList);
    };

    const addToCart = (item) => {
        removeItem(item.id);
        const newCart = [item, ...cart];
        setCart(newCart);
        updateStoredCurrentCart(newCart);
    };

    useEffect(() => {
        Promise.all([
            AsyncStorage.getItem("@@GroceryList/currentList"),
            AsyncStorage.getItem("@@GroceryList/currentCart"),
        ])
            .then(([list, cartItems]) => [
                JSON.parse(list),
                JSON.parse(cartItems),
            ])
            .then(([list, cartItems]) => {
                if (list) {
                    setList(list);
                }

                if (cartItems) {
                    setCart(cartItems);
                }
                setLoading(false);
            });
    }, []);

    return {
        list,
        loading,
        addItem,
        removeItem,
        cart,
        addToCart,
    };
};
