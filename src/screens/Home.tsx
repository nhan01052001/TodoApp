import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';

import { BagIcon, PersonalIcon } from "../assets/icon/Icon";
import TaskProgerssing from "./taskProgerssing/TaskProgressing.component";
import GroupTask from "./taskProgerssing/GroupTask.component";
import { AllStackParams } from '../navigation/Stack.Navigator';

const { width } = Dimensions.get('screen')

export const DataTaskProgressing = [
    {
        id: '663fa97a14392c1dc30b8375',
        name: 'Công việc văn phòng',
        nameTask: 'Làm task dự án',
        backgroundColor: '#e7f3ff',
        icon: <BagIcon color="#f478b8" size={18} />,
        backgroundColorIcon: '#ffe4f3',
        colorProgress: '#007AFF',
    },
    {
        id: '663fa97a14392c1dc30b8376',
        name: 'Công việc cá nhân',
        nameTask: 'Nấu ăn',
        backgroundColor: '#ffe8e1',
        icon: <PersonalIcon color="#9260f4" size={18} />,
        backgroundColorIcon: '#ede4ff',
        colorProgress: '#fe7d54',
    },
    {
        id: '663fa97a14392c1dc30b8377',
        name: 'Học tập hằng ngày',
        nameTask: 'Học tiếng anh',
        backgroundColor: '#ffe4f3',
        icon: <IconEntypo name={'open-book'} size={18} color={'#ff9241'} />,
        backgroundColorIcon: '#fce3d2',
        colorProgress: '#f478b8',
    },
    {
        id: '663fa97a14392c1dc30b8378',
        name: 'Thể dục hằng ngày',
        nameTask: 'Chạy bộ',
        backgroundColor: '#8cef8a',
        icon: <IconMaterialIcons name={'emoji-people'} size={18} color={'#007AFF'} />,
        backgroundColorIcon: '#e7f3ff',
        colorProgress: '#237021',
    },
    {
        id: '663fa97a14392c1dc30b8379',
        name: 'Công việc khác',
        nameTask: 'Giặt đồ',
        backgroundColor: '#f2f58f',
        icon: <IconAntDesign name={'like1'} size={18} color={'#237021'} />,
        backgroundColorIcon: '#8cef8a',
        colorProgress: '#b4ba00',
    }
];

export const DataTaskGroupDefault = [
    {
        id: '663faaa114392c1dc30b837a',
        name: 'Công việc văn phòng',
        icon: <BagIcon color="#f478b8" size={18} />,
        backgroundColorIcon: '#ffe4f3',
    },
    {
        id: '663faaa114392c1dc30b837b',
        name: 'Công việc cá nhân',
        icon: <PersonalIcon color="#9260f4" size={18} />,
        backgroundColorIcon: '#ede4ff',
    },
    {
        id: '663faaa114392c1dc30b837c',
        name: 'Học tập hằng ngày',
        icon: <IconEntypo name={'open-book'} size={18} color={'#ff9241'} />,
        backgroundColorIcon: '#fce3d2',
    },
    {
        id: '663faaa114392c1dc30b837d',
        name: 'Thể dục hằng ngày',
        icon: <IconMaterialIcons name={'emoji-people'} size={18} color={'#007AFF'} />,
        backgroundColorIcon: '#e7f3ff',
    },
    {
        id: '663faaa114392c1dc30b837e',
        name: 'Công việc khác',
        icon: <IconAntDesign name={'like1'} size={18} color={'#237021'} />,
        backgroundColorIcon: '#8cef8a',
    }
];

export const DataTaskGroup = [
    {
        id: '663faabe14392c1dc30b837f',
        idTaskGroup: '663faaa114392c1dc30b837a',
        name: 'Công việc văn phòng',
        icon: <BagIcon color="#f478b8" size={18} />,
        backgroundColorIcon: '#ffe4f3',
        totalNumbeTask: 30,
        numberTaskCompleted: 5,
        colorProgress: '#f478b8'
    },
    {
        id: '663fac1514392c1dc30b8384',
        idTaskGroup: '663faaa114392c1dc30b837b',
        name: 'Công việc cá nhân',
        icon: <PersonalIcon color="#9260f4" size={18} />,
        backgroundColorIcon: '#ede4ff',
        totalNumbeTask: 5,
        numberTaskCompleted: 1,
        colorProgress: '#9260f4'
    },
    {
        id: '663fac1514392c1dc30b8385',
        idTaskGroup: '663faaa114392c1dc30b837c',
        name: 'Học tập hằng ngày',
        icon: <IconEntypo name={'open-book'} size={18} color={'#ff9241'} />,
        backgroundColorIcon: '#fce3d2',
        totalNumbeTask: 11,
        numberTaskCompleted: 2,
        colorProgress: '#ff9241'
    },
    {
        id: '663fac1514392c1dc30b8386',
        idTaskGroup: '663faaa114392c1dc30b837d',
        name: 'Thể dục hằng ngày',
        icon: <IconMaterialIcons name={'emoji-people'} size={18} color={'#007AFF'} />,
        backgroundColorIcon: '#e7f3ff',
        totalNumbeTask: 20,
        numberTaskCompleted: 15,
        colorProgress: '#007AFF'
    },
    {
        id: '663fac1514392c1dc30b8387',
        idTaskGroup: '663faaa114392c1dc30b837e',
        name: 'Công việc khác',
        icon: <IconAntDesign name={'like1'} size={18} color={'#237021'} />,
        backgroundColorIcon: '#8cef8a',
        totalNumbe: 0,
        numberTaskCompleted: 0,
        colorProgress: '#237021'
    }
]

const Home: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<AllStackParams>>();
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        setProgress(0.75);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.wrapAll}>
                <View style={styles.wrapHeader}>
                    <View style={styles.headerLeft}>
                        <Image
                            source={require('../assets/image/avatar.jpeg')}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                            }}
                        />
                        {/* <View style={styles.cricleRed} /> */}

                        <View style={{
                            marginLeft: 12,
                        }}>
                            <View style={{

                            }}>
                                <Text style={styles.txtHello}>
                                    Hello!
                                </Text>
                            </View>

                            <View style={{

                            }}>
                                <Text style={styles.txtName}>Nguyễn Thành Nhân</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: 26 }}>
                        <View style={styles.dotNotifi} />
                        <IconFontAwesome name={'bell'} size={26} color={'#000'} />
                    </View>
                </View>

                <View style={styles.noteTaskToDay}>
                    <View style={{
                        maxWidth: '50%'
                    }}>
                        <View style={{
                            marginBottom: 12
                        }}>
                            <Text
                                numberOfLines={3}
                                style={styles.txtNoteTaskToday}>Bạn có công việc chưa hoàn thành.</Text>
                        </View>

                        <TouchableOpacity style={styles.btnViewTask}
                            onPress={() => {
                                navigation.navigate("ListTask");
                            }}
                        >
                            <Text
                                style={styles.txtBtnViewTask}
                            >Xem công việc</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        maxWidth: '40%'
                    }}>
                        <View style={styles.progess} />
                        <Progress.Circle
                            color="#fff"
                            borderWidth={0}
                            progress={progress}
                            size={80}
                            showsText={true}
                            thickness={6}
                            direction="counter-clockwise"
                            textStyle={{
                                fontWeight: '500',
                                color: '#fff'
                            }}
                        />
                    </View>

                    <View style={{
                        maxWidth: '10%',
                        height: '100%'
                    }}>
                        <TouchableOpacity
                            style={styles.btnOption}
                        >
                            <IconSimpleLineIcons name={'options'} size={22} color={'#fff'} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.taskInProgress}>
                    <View style={styles.wrapLableTaskInProgress}>
                        <Text
                            style={styles.txtLableInProgess}
                        >
                            Đang thực hiện
                        </Text>
                        <View style={styles.countTaskInProgess}>
                            <Text style={styles.numberTaskInProgess}>5</Text>
                        </View>
                    </View>

                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            DataTaskProgressing.map((item, index) => {
                                return (
                                    <TaskProgerssing key={index} item={item} />
                                )
                            })
                        }
                    </ScrollView>
                </View>

                <View style={styles.taskInProgress}>
                    <View style={styles.wrapLableTaskInProgress}>
                        <Text
                            style={styles.txtLableInProgess}
                        >
                            Nhóm công việc
                        </Text>
                        <View style={styles.countTaskInProgess}>
                            <Text style={styles.numberTaskInProgess}>5</Text>
                        </View>
                    </View>

                    <ScrollView
                    >
                        {
                            DataTaskGroup.map((item, index) => {
                                return (
                                    <GroupTask key={index} item={item} />
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </ScrollView>
            <TouchableOpacity style={{
                position: 'absolute',
                bottom: 20,
                right: 20,
                width: 54,
                height: 54,
                borderRadius: 54,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#8043CC'
            }}
                onPress={() => {
                    navigation.navigate("AddTodo");
                }}
            >
                <IconIonicons name={'create-outline'} size={30} color={'#fff'} style={{
                    marginLeft: 4,
                    marginBottom: 4,
                }} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fbfcfc"
    },

    wrapAll: {
        flex: 1,
        padding: 16,
    },

    wrapHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    cricleRed: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'red'
    },

    txtHello: {
        fontSize: 16,
        fontWeight: '400',
        color: '#000'
    },

    txtName: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000'
    },

    dotNotifi: {
        width: 16,
        height: 16,
        borderRadius: 16,
        backgroundColor: '#8043CC',
        position: 'absolute',
        zIndex: 1,
        elevation: 1,
        right: 0,
        top: -5
    },

    noteTaskToDay: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#5f33e1',
        marginTop: 16,
        padding: 16,
        borderRadius: 16,
    },

    txtNoteTaskToday: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        marginBottom: 4,
    },

    btnViewTask: {
        padding: 8,
        marginTop: 12,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    txtBtnViewTask: {
        fontSize: 16,
        fontWeight: '800',
        color: '#8043CC',
    },

    progess: {
        position: 'absolute',
        width: 80,
        height: 80,
        borderRadius: 80,
        borderWidth: 6,
        borderColor: '#7e5eef'
    },

    btnOption: {
        backgroundColor: '#7e5eef',
        width: 30,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    taskInProgress: {
        marginTop: 8,
    },

    txtLableInProgess: {
        fontSize: 22,
        fontWeight: '600',
        color: '#000',
        textAlign: 'center',
        flexWrap: 'wrap',
    },

    countTaskInProgess: {
        marginLeft: 6,
        width: 22,
        height: 22,
        borderRadius: 22,
        backgroundColor: '#eee9ff',
        justifyContent: 'center',
        alignItems: 'center'
    },

    numberTaskInProgess: {
        fontSize: 16,
        fontWeight: '500',
        color: '#8043CC',
    },

    wrapLableTaskInProgress: {
        marginVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default Home;