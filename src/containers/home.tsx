import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation:any = useNavigation();
    
    return (
        <View>
            <Text>Navigation working</Text>
            <Button title='Go to login' onPress={() => navigation.navigate('InitialScreen')} />
        </View>
    );
};

const styles = StyleSheet.create({

});