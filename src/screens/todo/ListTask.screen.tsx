import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState, useRef } from "react";
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from "react-native";
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import Modal from 'react-native-modal';
import ImagePicker, {
    launchCamera,
    launchImageLibrary
} from 'react-native-image-picker';


import { AllStackParams } from '../../navigation/Stack.Navigator';
import { DataTaskGroupDefault } from '../Home';
import { BagIcon, CloseIcon } from '../../assets/icon/Icon';

const dayOfWeek = {
    0: 'Chủ nhật',
    1: 'Thứ hai',
    2: 'Thứ ba',
    3: 'Thứ tư',
    4: 'Thứ năm',
    5: 'Thứ sáu',
    6: 'Thứ bảy',
}

const { width } = Dimensions.get('screen');

const ListTask: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<AllStackParams>>();
    const [daysOfWeek, setDaysOfWeek] = useState<any[]>([]);
    const [dateChoose, setDateChoose] = useState<string>('');
    let dataSourceCords: any[] = [];
    const ref = useRef(null);
    let refTemp = useRef(null);
    let i: any = null;

    useEffect(() => {
        const date = new Date();
        let dissectionDate = date.getDay();
        let getDate = date.getDate();
        if (dissectionDate === 0) {
            getDate -= 1;
        }
        let getMonth = date.getMonth();
        let getYear = date.getFullYear();

        let datesResult = dates(new Date(getYear, getMonth, getDate));

        // datesResult.forEach((item) => {
        //     if (new Date(`${item}`).getDate() === new Date().getDate()) {
        //         item.isChecked = true;
        //     }
        // })

        setDateChoose(String(new Date()));
        setDaysOfWeek(datesResult);
    }, []);

    const dates = (current: Date) => {
        let week = new Array();
        // Starting Monday not Sunday
        current.setDate((current.getDate() - current.getDay() + 1));
        for (let i = 0; i < 7; i++) {
            week.push(
                new Date(current)
            );
            current.setDate(current.getDate() + 1);
        }
        return week;
    }

    const scrollToItemByIndex = (date: string, index: number) => {
        try {
            if (ref.current) {
                ref.current.scrollTo({ x: dataSourceCords[index] - (width / 2) + 45, y: 0, animated: true });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleChooseDate = (date: string, index: number) => {
        setDateChoose(date);
    }
    console.log(refTemp.current?.index, 'refTemp.current.index');

    return (
        <SafeAreaView
            style={styles.container}
        >
            <View
                style={{
                    flex: 1,
                }}
            >
                <View
                    style={styles.header}
                >
                    <TouchableOpacity
                        style={{
                            padding: 6,
                        }}

                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <IconIonicons name={'arrow-back-outline'} size={26} color={'#000'} />
                    </TouchableOpacity>
                    <Text
                        style={styles.txtHeader}
                    >Danh sách công việc</Text>
                    <View />
                </View>

                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <View style={styles.content}>
                        <ScrollView
                            ref={ref}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingHorizontal: 6,
                            }}
                        >
                            {
                                daysOfWeek.map((item, index) => {
                                    const isEqualDate = false; //new Date(`${item}`).getDate() === new Date(dateChoose).getDate();
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            onLayout={(event) => {
                                                const layout = event.nativeEvent.layout;
                                                dataSourceCords[index] = layout.x;
                                            }}
                                            style={{
                                                width: 80,
                                                height: 100,
                                                padding: 8,
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                backgroundColor: isEqualDate ? '#8043CC' : '#fff',
                                                borderRadius: 16,
                                                marginHorizontal: 12,
                                            }}

                                            onPress={() => scrollToItemByIndex(item, index)}
                                        >
                                            <View>
                                                <Text
                                                    style={{
                                                        fontSize: 14,
                                                        fontWeight: '400',
                                                        color: isEqualDate ? '#fff' : '#000',
                                                    }}
                                                >Tháng {new Date(`${item}`).getMonth() + 1}</Text>
                                            </View>

                                            <View>
                                                <Text
                                                    style={{
                                                        fontSize: 24,
                                                        fontWeight: '500',
                                                        color: isEqualDate ? '#fff' : '#000',
                                                    }}
                                                >{new Date(`${item}`).getDate()}</Text>
                                            </View>

                                            <View>
                                                <Text
                                                    style={{
                                                        fontSize: 14,
                                                        fontWeight: '400',
                                                        color: isEqualDate ? '#fff' : '#000',
                                                    }}
                                                >{dayOfWeek[new Date(`${item}`).getDay()]}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 16,
        paddingHorizontal: 8,
        paddingBottom: 16,
    },

    txtHeader: {
        fontSize: 22,
        fontWeight: '500',
        color: '#000'
    },

    content: {
        flex: 1,
        paddingHorizontal: 4,
        paddingTop: 4,
    },
})

export default ListTask;