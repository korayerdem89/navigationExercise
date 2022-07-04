import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Button from '../components/Button';

export default function Welcome() {
    return (
        <SafeAreaView>
            <Text>Welcome</Text>
            <Button text="Üye Kaydı Oluştur" />
        </SafeAreaView>

    )
}