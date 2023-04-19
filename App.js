import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import DataRepository from "./repository/repository";
import {useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {MyStack} from "./presentation/navigation/navigation_stack";

export default function App() {
    const [cocktail, setCocktail] = useState(undefined);
    const dataRepository = new DataRepository();
    const getRandom = async () => {
        try {
            const res = await dataRepository.getRandomCocktail();
            console.log(res);
            setCocktail(res);
        } catch (e) {
        }
    }

    return (

            <MyStack/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

