import { Text, View, StyleSheet, TextInput, Button, StatusBar, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import React from 'react';
import { useState, useRef } from 'react';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const data = [
    {
        id: 1,
        name: 'React JS',
        url: require('../image/vs1.png'),
    },
    {
        id: 2,
        name: 'JavaScript',
        url: require('../image/vs2.png'),
    },
    {
        id: 3,
        name: 'Node JS',
        url: require('../image/vs3.png'),
    },
];

const renderItem = ({ item }) => {
    return (
        <View
            style={{
                borderWidth: 1,
                padding: 0,
                borderRadius: 10,
                margin:0,
                alignItems: 'center',
                backgroundColor: 'white',
            }}>
            <Image source={item.url} style={{ width: 250, height:150,resizeMode:'contain' }} />
            
        </View>
    );
};

function Home({ navigation }) {

    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);


    return (
        <ScrollView>
        <View style={styles.container}>


            <View style={{ marginVertical: 0 , height: 230}}>
                <Carousel
                    ref={isCarousel}
                    data={data}
                    renderItem={renderItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    onSnapToItem={index => setIndex(index)}
                />
                <Pagination
                    dotsLength={data.length}
                    activeDotIndex={index}
                    carouselRef={isCarousel}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 8,
                        backgroundColor: '#F4BB41',
                    }}
                    tappableDots={true}
                    inactiveDotStyle={{
                        backgroundColor: 'black',
                        // Define styles for inactive dots here
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </View>


            {/* <ScrollView horizontal={true}>
                <Image source={require('../image/vs1.png')} style={{ marginHorizontal: 20 }} />
                <Image source={require('../image/vs2.png')} style={{ marginHorizontal: 20 }} />
                <Image source={require('../image/vs3.png')} style={{ marginHorizontal: 20 }} />
            </ScrollView> */}

            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <TouchableOpacity style={styles.rowButton1}>
                    <Text style={styles.loginText1}>Gọi thợ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rowButton2}>
                    <Text style={styles.loginText2}>Đặt vật tư</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rowButton2}>
                    <Text style={styles.loginText2}>Thuê thiết bị</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../image/dien.png')} style={{ marginHorizontal: 10 }} />
                    <Text>Điện</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../image/nuoc.png')} style={{ marginHorizontal: 10 }} />
                    <Text>Nước</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../image/dien_lanh.png')} style={{ marginHorizontal: 10 }} />
                    <Text>Điện Lạnh</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../image/xay_dung.png')} style={{ marginHorizontal: 10 }} />
                    <Text>Xây Dựng</Text>
                </View>
            </View>

            <View style={styles.lineStyle} />

            <View style={{ width: '90%' }}>
                <Text >Khám phá cùng Mr Thợ.</Text>
                <Image source={require('../image/vs1.png')} style={{ width: '100%', resizeMode: 'cover', marginTop: 10, marginBottom: 20 }} />
                <View >
                    <Text >Tổng vệ sinh khử khuẩn chỉ 529k</Text>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...</Text>
                </View>
            </View>
            <View style={{ width: '90%' }}>
                <Image source={require('../image/vs2.png')} style={{ width: '100%', resizeMode: 'cover' }} />
                <View >
                    <Text >Tổng vệ sinh khử khuẩn chỉ 529k</Text>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...</Text>
                </View>
            </View>

            <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={() => navigation.toggleDrawer()}
                underlayColor='#fff'>
                <Text style={styles.loginText1}>Xem thêm</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        alignItems: 'center',
        width: '100%',
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
        width: "60%",
    },
    rowButton1: {
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#f0971a',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        width: "25%",
    },
    rowButton2: {
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        width: "25%",
    },
    loginText1: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    loginText2: {
        color: '#000',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    lineStyle: {
        width: 400,
        borderWidth: 0.4,
        borderColor: '#000',
        marginTop: 15,
        marginBottom: 20,
    },
});

export default Home
