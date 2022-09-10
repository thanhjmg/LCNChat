import { View, Text, SafeAreaView, Platform, StatusBar, ScrollView, Image, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import HeaderTinNhan from '../../components/HeaderTinNhan';
import ItemTinNhan from '../../components/ItemTinNhan';
import FooterTinNhan from '../../components/FooterTinNhan';
import { useNavigation } from '@react-navigation/native';

export default function ChiTietTinNhan() {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View className="">
                <HeaderTinNhan
                    onPressChiTiet={() => {
                        navigation.goBack();
                    }}
                    onPressCallVideo={() => {
                        navigation.navigate('VideoCall');
                    }}
                />
                <ScrollView className="overflow-y-auto h-[640px]">
                    <View className="h-32 w-full bg-white items-center p-2">
                        <Image
                            style={{ width: 80, height: 80, resizeMode: 'contain' }}
                            className="rounded-full"
                            source={{
                                uri: 'https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg',
                            }}
                        ></Image>
                        <View className="flex flex-row mt-2 items-center pt-2">
                            <Text className="font-semibold ">Bạn đã kết nối với</Text>
                            <Text className="text-lcn-blue-5 font-semibold ml-1">Nguyễn Văn A</Text>
                        </View>
                    </View>
                    <View className="bg-white w-full ">
                        <ItemTinNhan from>xin chào</ItemTinNhan>
                        <ItemTinNhan>ai đó</ItemTinNhan>
                        <ItemTinNhan from>
                            ydhhdh dhhhh đhhdhdhdh đhdhdhhdh dhdhdhdhhdh dhdhdhdhhdh đjđ dhdhdhdh hdhdhdhd hdhđhhd
                            hdhđhhd hdhđhhd fjfffhhf hffhhffh fhfhfhh hfhfjgjghgh hfhf
                        </ItemTinNhan>
                        <ItemTinNhan>bye</ItemTinNhan>
                        <ItemTinNhan from>
                            ydhhdh dhhhh đhhdhdhdh đhdhdhhdh dhdhdhdhhdh dhdhdhdhhdh đjđ dhdhdhdh hdhdhdhd hdhđhhd
                            hdhđhhd hdhđhhd fjfffhhf hffhhffh fhfhfhh hfhfjgjghgh hfhf
                        </ItemTinNhan>
                        <ItemTinNhan from>
                            ydhhdh dhhhh đhhdhdhdh đhdhdhhdh dhdhdhdhhdh dhdhdhdhhdh đjđ dhdhdhdh hdhdhdhd hdhđhhd
                            hdhđhhd hdhđhhd fjfffhhf hffhhffh fhfhfhh hfhfjgjghgh hfhf
                        </ItemTinNhan>
                        <ItemTinNhan from>
                            ydhhdh dhhhh đhhdhdhdh đhdhdhhdh dhdhdhdhhdh dhdhdhdhhdh đjđ dhdhdhdh hdhdhdhd hdhđhhd
                            hdhđhhd hdhđhhd fjfffhhf hffhhffh fhfhfhh hfhfjgjghgh hfhf
                        </ItemTinNhan>
                        <ItemTinNhan>xin chào</ItemTinNhan>
                    </View>
                </ScrollView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'android' ? 'padding' : ''}
                    keyboardVerticalOffset={500} //this value is depends upon your view/component height
                >
                    <View className="w-full">
                        <FooterTinNhan />
                    </View>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    );
}
