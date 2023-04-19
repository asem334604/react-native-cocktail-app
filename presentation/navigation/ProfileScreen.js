import {View, Text} from 'react-native';

const ProfileScreen = ({route}) => {
    return (
        <View>
           <Text>Profile Screen</Text>
            <Text>This is {route.params.name}'s profile</Text>
        </View>
    );
};

export default ProfileScreen;