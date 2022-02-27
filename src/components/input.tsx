import { StyleSheet, TextInput, View } from "react-native";

export default function InputApp(props: any) {
    return (
        <View>
            <TextInput style={styles.input} placeholder={props.placeholder} />
        </View>
    );
};

const styles = StyleSheet.create({
    input : {
        width: '100%',
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        paddingLeft: 20,
        color: 'black',
        marginTop: 10,
        marginBottom: 10
    }
});