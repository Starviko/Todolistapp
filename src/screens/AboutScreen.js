import MainLayout from '../layouts/MainLayout';
import { View, Text,Button } from 'react-native';
import React from 'react';

export default function AboutScreen({ navigation }) {

    const appName = 'ToDo List App';
    const authorName = 'Viko';
    const currentDate = new Date().toLocaleDateString();
    return (
        <MainLayout>    
            <View>  
                <Text>App Name: {appName}</Text>
                <Text>Author Name: {authorName}</Text>
                <Text>Current Date: {currentDate}</Text>
                <Button
                    title="Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </MainLayout>
        )
}