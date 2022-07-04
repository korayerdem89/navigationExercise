import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

export default function MemberSign({navigation}) {
    function handleGoBack() {
        navigation.goBack();
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Member Sign</Text>
            <Button onPress={handleGoBack} text="Geri Dön" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        margin: 10
    }

})