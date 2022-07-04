import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';



export default function MemberResult({ route }) {
 const {user} = route.params;
    return (
        <SafeAreaView style={styles.container}>
       <Text>Üye Adı:{user.userName}</Text>
       <Text>Üye Soyadı:{user.userSurName}</Text>
       <Text>Üye Yaşı:{user.userAge}</Text>
       <Text>Üye E-Posta:{user.userMail}</Text>
       <Text>Üye Memleketi:{user.userHomeTown}</Text>
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