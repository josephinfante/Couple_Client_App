import { View, Button, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function ButtonApp( props: any ) {
    const navigation:any = useNavigation();

    const onPress = () => {
        props.to ? navigation.navigate(props.to) : ''
    }

    return (
        <View style={styles.buttonContainer}>
            <Button title={props.title} onPress={() => onPress()} color='black' />
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer : {
        backgroundColor : '#DDD92A',
        minWidth: 150,
        maxWidth: 150,
        borderRadius: 50,
        height: 50,
    }
})