import { StyleSheet, Text, View } from "react-native";
import ButtonApp from "../components/button";

export default function InitialScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.logoText}>Couple app</Text>
            <View style={styles.cardContainer}>
                <View>
                    <Text style={styles.welcomeTitle}>Bienvenid@</Text>
                    <Text style={styles.welcomeSubtitle}>
                        crea coupones,retos, entre otras cosas, y pasa un momento agradable en pareja.
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttons}>
                        <ButtonApp title="Iniciar sesión" to="Login"/>
                        <ButtonApp title="Registrarse" to="Register"/>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
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
        minHeight: 300,
        backgroundColor: 'black',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingTop: 20,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 20,
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
    },
    buttons : {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});