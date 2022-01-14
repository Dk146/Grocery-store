import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Button } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';

function ResetPassword({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../image/logo.png')} style={{ marginBottom: 40 }} />
            <Text style={{ color: '#fff' }}>Quên Mật Khẩu</Text>
            <TextInput
                style={styles.input}
                placeholder="Địa chỉ email/Số điện thoại"
                secureTextEntry={true}
                placeholderTextColor='#fff'
            ></TextInput>

            <TouchableOpacity
                style={styles.loginScreenButton}
                // onPress={() => navigation.navigate("Home")}
                underlayColor='#fff'>
                <Text style={styles.loginText}>LẤY LẠI MÂT KHẨU</Text>
            </TouchableOpacity>

            <View style={{ margin: 20 }}>
                <Text style={{ color: "#fff" }}>Vui lòng nhập địa chỉ email hoặc số điện thoại để lấy lại mật khẩu</Text>
            </View>


            <View style={styles.lineStyle} />

            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: "#fff" }}>Bạn chưa có tài khoản?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text style={{color:'#f0971a'}}> Đăng ký</Text>
                </TouchableOpacity>
                <Text style={{ color: "#fff" }}> ngay</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <Icon name="google-plus" color="#fff" size={50} style={{ margin: 20 }} />
                <Icon name="facebook" color="#fff" size={50} style={{ margin: 20 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        flex: 1,
        backgroundColor: '#1c489e',
        alignItems: 'center',
    },
    input: {
        width: "90%",
        padding: 10,
        marginVertical: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
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
    },
    lineStyle: {
        width: 300,
        borderWidth: 0.4,
        borderColor: '#fff',
        marginTop: 150,
        marginBottom: 20,
    },
});


export default ResetPassword
