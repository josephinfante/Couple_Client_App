import { StyleSheet, Text, View } from "react-native";
import ButtonApp from "../components/button";
import InputApp from "../components/input";

export default function Register() {
    return(
        <View style={styles.container}>
            <Text style={styles.logoText}>Couple app</Text>
            <View style={styles.cardContainer}>
                <View>
                    <Text style={styles.welcomeTitle}>Registrate</Text>
                </View>
                <View>
                    <InputApp placeholder='Nombre'/>
                    <InputApp placeholder='Apellido'/>
                    <InputApp placeholder='Correo electrónico'/>
                    <InputApp placeholder='Contraseña'/>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttons}>
                        <ButtonApp title='Registrarse' />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    logoText : {
        fontSize: 50,
        fontWeight: '800',
        color: '#F97068',
        marginBottom: -10,
        zIndex: 2
    },
    cardContainer : {
        width: '100%',
        minHeight: 370,
        backgroundColor: 'black',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingTop: 20,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 20
    },
    welcomeTitle : {
        color: 'white',
        fontSize: 30,
        marginBottom: 20,
        marginTop: 30
    },
    welcomeSubtitle : {
        color: 'white',
    },
    buttonContainer : {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30,
        marginTop: 30
    },
    buttons : {
        alignItems: 'center'
    }
});