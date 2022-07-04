import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Alert } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input/Input';


export default function MemberSign({ navigation }) {
    const [userName, setUserName] = useState('');
    const [userSurName, setUserSurName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userMail, setUserMail] = useState('');
    const [userHomeTown, setUserHomeTown] = useState('');

    function handleGoBack() {
        navigation.goBack();
    }

    function handleSubmit() {
        if (!userName ||
            !userSurName ||
            !userAge ||
            !userMail ||
            !userHomeTown) {
            Alert.alert('Uyarı!', 'Bilgileri Giriniz!')
        }
      else {
        const user = {
            userName,
            userSurName,
            userAge,
            userMail,
            userHomeTown
        };
        navigation.navigate('MemberResultScreen', {user});
    }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Member Sign</Text>
            <Input placeholder="Üye Adınızı Giriniz..." label={"Üye Adı"} onChangeText={setUserName} />
            <Input placeholder="Üye Soyadınızı Giriniz..." label={"Üye Soyadı"} onChangeText={setUserSurName} />
            <Input placeholder="Üye Yaşınızı Giriniz..." label={"Üye Yaşı"} onChangeText={setUserAge} />
            <Input placeholder="Üye Eposta Adresinizi Giriniz..." label={"Üye E-Posta"} onChangeText={setUserMail} />
            <Input placeholder="Üye Memleketini Giriniz..." label={"Üye Memleketi"} onChangeText={setUserHomeTown} />
            <Button onPress={handleSubmit} text="Kaydı Tamamla" />
            <Button onPress={handleGoBack} text="Geri Dön" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        margin: 10
    }

})