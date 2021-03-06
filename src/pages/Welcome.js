import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

export default function Welcome({navigation}) {

    function goToMemberSign(){
  navigation.navigate('MemberSignScreen');
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Fitness Salonu</Text>
            <Button onPress={goToMemberSign} text="Üye Kaydı Oluştur" />
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