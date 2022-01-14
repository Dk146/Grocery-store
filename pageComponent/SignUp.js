import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Button } from "react-native"


function SignUp({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.container}>

                <Image source={require('../image/logo.png')} style={{ marginBottom: 40 }} />
                <Text style={{ color: '#fff' }}>ĐĂNG KÝ TÀI KHOẢN</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Họ và tên"
                    secureTextEntry={true}
                    placeholderTextColor='#fff'
                ></TextInput>
                <TextInput
                    style={styles.input}
                    placeholder="Điện thoại"
                    secureTextEntry={true}
                    placeholderTextColor='#fff'
                ></TextInput>
                <TextInput
                    style={styles.input}
                    placeholder="Địa chỉ email"
                    secureTextEntry={true}
                    placeholderTextColor='#fff'
                ></TextInput>
                <TextInput
                    style={styles.input}
                    placeholder="Mật khẩu"
                    secureTextEntry={true}
                    placeholderTextColor='#fff'
                ></TextInput>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập lại mật khẩu"
                    secureTextEntry={true}
                    placeholderTextColor='#fff'
                    underlineColorAndroid='#fff'
                ></TextInput>
                <View style={{ margin: 20 }}>
                    <Text style={{ color: "#fff" }}>Khi bạn đăng ký tài khoản, bạn đã đồng ý với các điều khoản sử dụng & chính sách dịch vụ của Mr.Thợ.</Text>
                </View>
                <TouchableOpacity
                    style={styles.loginScreenButton}
                    // onPress={() => navigation.navigate("Home")}
                    underlayColor='#fff'>
                    <Text style={styles.loginText}>Đăng kí tài khoản</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row' , marginBottom:50}}>
                <Text style={{ color: "#fff" }}>Bạn đã có tài khoản?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                    <Text style={{ color: '#f0971a' }}> Đăng nhập</Text>
                </TouchableOpacity>
                <Text style={{ color: "#fff" }}> ngay</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        paddingTop: 40,
        backgroundColor: '#1c489e',
        alignItems: 'center',
        width: '100%'
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
    textPolicy: {
        padding: 10,
        margin: 10,
        color: "#aaa"
    },
    loginScreenButton: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#f0971a',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        width: "90%",
    },
    loginText: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    }
});

export default SignUp
