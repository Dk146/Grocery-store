import { Text, View, TextInput, StyleSheet, Button, TouchableOpacity, Image } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
//  import Icon2 from 'react-native-vector-icons/FontAwesome5Pro'

function SignIn({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
            <Image source={require('../image/logo.png')} style={{marginBottom:40}}/>
            <View style={styles.row}>
                <Icon1 name="user" color="#777777" size={20} />
                <TextInput
                    style={styles.input1}
                    placeholder="Số điện thoại"
                    secureTextEntry={true}
                    placeholderTextColor='#fff'
                ></TextInput>
            </View>
            <View style={styles.row}>
                <Icon1 name="lock" color="#777777" size={20} />
                <TextInput
                    style={styles.input1}
                    placeholder="Mật khẩu"
                    secureTextEntry={true}
                    placeholderTextColor='#fff'
                ></TextInput>
            </View>
            <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={() => navigation.navigate("Root")}
                underlayColor='#fff'>
                <Text style={styles.loginText}>Đăng nhập</Text>
            </TouchableOpacity>
            <Button
                style={styles.loginScreenButton}
                title="Quên mật khẩu"
                backgroundColor='#fff'
                color="#fff"
                onPress={() => navigation.navigate("ResetPassword")}
            ></Button>
            <View style = {styles.lineStyle} />

            <Text style={{ color: "#fff" }}>Hoặc đăng nhập bằng</Text>

            <View style={{flexDirection: 'row'}}>
                <Icon name="fingerprint" color="#fff" size={50} style={{margin:20}}/>
                <Icon name="google-plus" color="#fff" size={50} style={{margin:20}}/>
                <Icon name="facebook" color="#fff" size={50} style={{margin:20}}/>
            </View>
            </View>
            <View style={{ flexDirection: 'row' , marginBottom:50}}>
                <Text style={{ color: "#fff" }}>Bạn chưa có tài khoản?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text style={{color:'#f0971a'}}> Đăng ký</Text>
                </TouchableOpacity>
                <Text style={{ color: "#fff" }}> ngay</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column",
        paddingTop: 40,
        backgroundColor: '#1c489e',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    input: {
        width: "90%",
        padding: 15,
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },
    input1: {
        width: "80%",
        marginLeft: 20,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },
    loginScreenButton: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        marginBottom: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#f0971a',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        width: 300,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    loginText: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    lineStyle:{
        width:300,
        borderWidth: 0.4,
        borderColor:'#fff',
        margin:10,
   },
});

export default SignIn
