import { StyleSheet, Text, View } from "react-native"

export function Home()  {
    return (
        <View style={styles.container}>
            <Text>HOME</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    }
})