import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import {StatusBar} from "expo-status-bar";
import {useState} from "react";
import DataRepository from "../../repository/repository";
import RandomCocktailScreen from "./RandomCocktailScreen";

const HomeScreen = ({navigation}) => {

    const [page, setPage] = useState('default');

    let mainPage;

    switch (page) {
        case 'random':
            mainPage = <RandomCocktailScreen/>;
            break;
        case 'categories':
            mainPage = <Text>Categories screen</Text>;
            break;
        default:
            mainPage = <Text>Wrong page</Text>;
            break;
    }


    return (
        <View style={styles.container}>
            <View style={styles.main_container}>
                {mainPage}
            </View>
            <View style={styles.bottom_menu}>
                <TouchableOpacity
                    style={[styles.menu_item,
                        {
                            // backgroundColor: 'blue'
                        }
                    ]}
                    onPress={() => {
                        console.log('Random')
                        setPage('random');
                    }
                    }>
                    <Text>Random</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.menu_item,
                        {
                            //  backgroundColor: 'orange'
                        }
                    ]}
                    onPress={() => {
                        console.log('Categories');
                        setPage('categories');
                    }
                    }>
                    <Text>Categories</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.menu_item,
                        {
                            //  backgroundColor: 'red'
                        }
                    ]}
                    onPress={() => {
                        console.log('Profile');
                        navigation.navigate('Profile', {name: 'Jane'})
                    }
                    }>
                    <Text>Profile</Text>
                </TouchableOpacity>
            </View>
            {/*<Text>Welcome</Text>*/}
            {/*<Button title={'Get random'} onPress={getRandom}/>*/}
            {/*<Button*/}
            {/*    title="Go to Jane's profile"*/}
            {/*    onPress={() =>*/}
            {/*        }/>*/}
            {/*<Text>{cocktail ? JSON.stringify(cocktail.obj) : 'No data'}</Text>*/}
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
    },
    main_container: {
        flex: 9,
        backgroundColor: 'green',
        alignItems: "center",
        justifyContent: 'center'
    },
    bottom_menu: {
        flex: 1,
        backgroundColor: 'grey',
        flexDirection: 'row'
    },
    menu_item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }

});

export default HomeScreen;