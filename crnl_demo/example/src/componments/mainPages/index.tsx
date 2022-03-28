import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import messages from '../api/messages'
import userStatus from '../api/userStatus'

const MainPage = () => {
    // const [userId, setUserId] = useState<String>("");
    // const [content, setContentValue] = useState<String>("");
    // const [isChatType, setIsChatType] = useState(false);

    const handleUserIDChange = (e: String) => {
        console.log('用户id>>>',e);
    }

    const handleContentChange = (e:String) => {
        console.log('消息内容>>>', e);
    }

    const selectType = (index:Number,vlaue:String) => {
        console.log('类型>>>', index, vlaue);
    };

    return (
        <View>
            <View>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="请输入接收方ID"
                    autoCapitalize="none"
                    onChangeText={handleUserIDChange}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="请输入内容"
                    autoCapitalize="none"
                    onChangeText={handleContentChange}
                />
               
                <View style={styles.typeStyle}>
                    <Text>Chat类型：</Text>
                    <ModalDropdown 
                    options={['单聊', '群聊', '聊天室']} 
                    defaultValue = '单聊'
                    style={{marginTop:10,}}
                    onSelect={selectType}/>
                </View>
            </View>
            <Button
                title="SendTextMsg"
                color="#841584"
                onPress={() => messages.sendTextMsg()}
            />
            <Button
                title="SendImgMsg"
                color="#841584"
                onPress={() => messages.sendImgMsg()}
            />
            <Button
                title="SendFileMsg"
                color="#841584"
                onPress={() => messages.sendFileMsg()}
            />
            <Button
                title="Logout"
                color="#841584"
                onPress={() => userStatus.logoutIM()}
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
    },
    typeStyle: {
        display: 'flex',
        marginBottom:10
    }
});

export default MainPage;