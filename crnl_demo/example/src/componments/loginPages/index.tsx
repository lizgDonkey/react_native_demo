import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import userStatus from '../api/userStatus'
const LoginPage = () => {
    // const [username, setUsername] = useState<string>("")
    // const [password, setPassword] = useState<string>("")


    const handleNameChange = (e: String) => {
        console.log('登陆ID>>>',e);
        
        // setUsername(e);
    }

    const handlePasswordChange = (e: String) => {
        console.log('登陆密码>>>',e);
        
        // setPassword(e);
    }

    const onLogin = () => {
        userStatus.loginIM();
    }

    return (
        <View>
            <TextInput
                style={styles.inputStyle}
                placeholder="请输入用户名"
                autoCapitalize="none"
                onChangeText={handleNameChange}
            />
            <TextInput
                style={styles.inputStyle}
                placeholder="请输入密码"
                autoCapitalize="none"
                onChangeText={handlePasswordChange}
            />
            <Button
                title="Login"
                color="#841584"
                onPress={() => onLogin()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 60,
        height: 60,
        marginVertical: 20,
    },
    inputStyle: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,

    }
});

export default LoginPage;