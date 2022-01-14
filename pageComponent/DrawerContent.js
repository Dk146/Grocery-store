import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
    useTheme,
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';


export function DrawerContent(props) {

    const paperTheme = useTheme();

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="calendar-month"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Đặt dịch vụ"
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="package"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Quản lí đơn hàng"
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="point-of-sale"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Mã khuyến mãi"
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="bank-transfer"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Khám phá cùng Mr Thợ"
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="bookmark-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Cẩm nang"
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon1
                                    name="notifications"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Thông báo"
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <DrawerItem
                            label="Giới thiệu Mr.Thợ"
                        />
                        <DrawerItem label="Hướng dẫn sử dụng"/>
                        <DrawerItem label="Điều khoản và thoả thuận"/>
                        <DrawerItem label="Câu hỏi thường gặp"/>
                        <DrawerItem  label="Hotline: 19001853"/>
                        <DrawerItem label="Kết nối với Mr.Thợ"/>
                        <Image source={require('../image/fb.png')} style={{ marginLeft: 20 }} />

                    </Drawer.Section>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="logout"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Đăng xuất"
                        onPress={() => props.navigation.replace('SignIn')}
                    />
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    drawerSection: {
        marginTop: 15,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});