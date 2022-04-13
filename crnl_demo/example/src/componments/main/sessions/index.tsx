import React, { useEffect } from 'react';
import { View, Text } from 'react-native';



const SessionTab = () => {

    useEffect(() => {
        return uninstall;
    }, []);

    const uninstall = () => {
        console.log('我被卸载啦');
    };
    
    return <View>
        <Text>
            This is SessionTab.
        </Text>
    </View>
}

export default SessionTab;