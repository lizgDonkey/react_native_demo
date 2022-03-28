
// init Listen
import WebIM from './WebIM'
const initEventHandler = () => {
    WebIM.conn.addEventHandler('STATUS', {
        onConnected: () => {
            console.log('login success');
        },
        onDisconnected: () => {
        }
    })
    WebIM.conn.addEventHandler('MESSAGE', {
        onTextMessage: (message: any) => {
        },
        onLocationMessage: (message: any) => {
        },
        onRecallMessage: (message: any) => {
        },
        //收到好友请求
        onContactInvited: (message: any) => {
        },
        //对方同意好友请求
        onContactAgreed: (message: any) => {
        },
        //对方拒绝好友请求
        onContactRefuse: (message: any) => {
        }
    })
}

export default initEventHandler;