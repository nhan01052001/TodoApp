import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    ImageBackground,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    Platform
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

const AddTodo: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<AllStackParams>>();
    const [taskGroup, setTaskGroup] = useState<any>(null);
    const [nameTask, setNameTask] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [line, setLine] = useState<number>(0);
    const [height, setHeight] = useState<number>(60);
    const [dateStart, setDateStart] = useState<any>(moment());
    const [dateEnd, setDateEnd] = useState<any>(moment().add(1, 'days'));
    const [timeStart, setTimeStart] = useState<any>(moment());
    const [timeEnd, setTimeEnd] = useState<any>(moment());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isNotification, setIsNotification] = useState(false);
    const [isStart, setIsStart] = useState(true);
    const [isError, setIsError] = useState<boolean>(false);
    const [isNotiError, setIsNotiError] = useState<boolean>(false);
    const iosTextHeight = 20.5
    const androidTextHeight = 20.5
    const textHeight = Platform.OS === 'ios' ? iosTextHeight : androidTextHeight;
    let numberOfLines = 8;

    const onChangeText = (text: string) => {
        setNameTask(text);
    }

    const onChangeTextDescription = (text: string) => {
        setDescription(text);
    }

    const showDatePicker = (isStart: boolean) => {
        setIsStart(isStart);
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const showTimePicker = (isStart: boolean) => {
        setIsStart(isStart);
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleConfirm = (date: any) => {
        if (isStart) {
            setDateStart(moment(date));
        } else {
            setDateEnd(moment(date));
        }
        return hideDatePicker();
    };

    const handleConfirmTime = (time: any) => {
        if (isStart) {
            setTimeStart(moment(time));
        } else {
            setTimeEnd(moment(time));
        }
        return hideTimePicker();
    };

    const closeModal = () => {
        setModalVisible(false);
    }

    const closeModalNotiError = () => {
        setIsNotiError(false);
    }

    useEffect(() => {
        console.log({
            line,
            height
        });
    }, [line, height]);

    useEffect(() => {
        if(isNotiError) {
            setTimeout(() => {
                setIsNotiError(false);
            }, 5000);
        }
    }, [isNotiError]);

    const handleChooseTaskGroup = (taskGroup: any) => {
        if (taskGroup) {
            DataTaskGroupDefault.forEach((item) => {
                item.isChecked = false;
            });
            taskGroup.isChecked = true;

            setTaskGroup(taskGroup);

            return closeModal();
        }
    }

    const handleSave = () => {
        if (!taskGroup || !taskGroup?.id) {
            setIsError(true);
            setIsNotiError(true);
            return;
        }

        if (nameTask.length === 0) {
            setIsError(true);
            setIsNotiError(true);
            return;
        }
    }


    return (
        <SafeAreaView
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ImageBackground
                    source={require('../../assets/image/imagebackgroundadd.jpg')}
                    resizeMode="cover"
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
                        >Thêm công việc</Text>
                        <View />
                    </View>

                    <ScrollView>
                        <View style={styles.content}>
                            <TouchableOpacity
                                style={[styles.controlChooseTaskGroup, styles.mv16]}
                                onPress={() => setModalVisible(true)}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    <View
                                        style={[{
                                            backgroundColor: (taskGroup?.id && taskGroup?.backgroundColorIcon) ? `${taskGroup?.backgroundColorIcon}` : '#f5f5f5'
                                        }, styles.wrapIcon]}
                                    >
                                        {(taskGroup?.id && taskGroup?.icon) ? taskGroup?.icon : <IconMaterialCommunityIcons name={'null'} size={26} color={'#000'} />}
                                    </View>

                                    <View
                                        style={{
                                            marginLeft: 12,
                                        }}
                                    >
                                        <Text
                                            style={styles.txtLableTaskGroup}
                                        >
                                            Nhóm công việc <Text style={{ color: 'red' }}>*</Text>
                                        </Text>
                                        <Text
                                            style={styles.txtValueTaskGroup}
                                        >
                                            {taskGroup?.id ? taskGroup?.name : 'Vui lòng chọn'}
                                        </Text>
                                    </View>
                                </View>

                                <View>
                                    <IconFontAwesome name={'chevron-down'} size={26} color={'#000'} />
                                </View>
                            </TouchableOpacity>
                            {
                                ((!taskGroup || !taskGroup?.id) && isError) && (
                                    <View
                                        style={{
                                            marginTop: -12
                                        }}
                                    >
                                        <Text
                                            style={{ color: 'red' }}
                                        >Vui lòng chọn nhóm công việc</Text>
                                    </View>
                                )
                            }

                            <View
                                style={[{
                                    padding: 12,
                                    backgroundColor: '#fff',
                                    borderRadius: 12,
                                }, styles.mv16]}
                            >
                                <View>
                                    <Text
                                        style={styles.txtLableTaskGroup}
                                    >
                                        Tên công việc <Text style={{ color: 'red' }}>*</Text>
                                    </Text>
                                    <TextInput
                                        style={styles.txtValueTaskGroup}
                                        onChangeText={(text: string) => {
                                            onChangeText(text);
                                        }}
                                        value={nameTask}
                                        placeholder="Vui lòng nhập"
                                    />
                                </View>
                            </View>
                            {
                                (nameTask.length === 0 && isError) && (
                                    <View
                                        style={{
                                            marginTop: -12
                                        }}
                                    >
                                        <Text
                                            style={{ color: 'red' }}
                                        >Vui lòng nhập tên công việc</Text>
                                    </View>
                                )
                            }

                            <View
                                style={[{
                                    padding: 12,
                                    backgroundColor: '#fff',
                                    borderRadius: 12,
                                }, styles.mv16]}
                            >
                                <View>
                                    <Text
                                        style={styles.txtLableTaskGroup}
                                    >
                                        Mô tả công việc
                                    </Text>
                                    <TextInput
                                        onContentSizeChange={(event) => {
                                            const height = Platform.OS === 'ios'
                                                ? event.nativeEvent.contentSize.height
                                                : event.nativeEvent.contentSize.height - androidTextHeight
                                            const lines = Math.round(height / textHeight);
                                            if (lines >= 3 && height <= 120 && lines !== line) {
                                                setLine(lines);
                                                setHeight((lines * 20) + 20);
                                            }
                                        }}
                                        multiline
                                        maxLength={500}
                                        style={[styles.txtValueTaskGroup, { height: height }]}
                                        onChangeText={(text: string) => {
                                            onChangeTextDescription(text);
                                        }}
                                        value={description}
                                        placeholder="Vui lòng nhập"
                                    />
                                </View>
                            </View>

                            <TouchableOpacity
                                style={[styles.controlChooseTaskGroup, styles.mv16]}
                                onPress={() => showTimePicker(true)}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    <View
                                        style={[{
                                            backgroundColor: '#fce3d2'
                                        }, styles.wrapIcon]}
                                    >
                                        <IconEntypo name={'back-in-time'} size={26} color={'#ff9241'} />
                                    </View>

                                    <View
                                        style={{
                                            marginLeft: 12,
                                        }}
                                    >
                                        <Text
                                            style={styles.txtLableTaskGroup}
                                        >
                                            Thời gian bắt đầu
                                        </Text>
                                        <Text
                                            style={styles.txtValueTaskGroup}
                                        >
                                            {moment(timeStart).format('HH:mm')}
                                        </Text>
                                    </View>
                                </View>

                                <View>
                                    <IconFontAwesome name={'chevron-down'} size={26} color={'#000'} />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.controlChooseTaskGroup, styles.mv16]}
                                onPress={() => showDatePicker(true)}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    <View
                                        style={[{
                                            backgroundColor: '#ede4ff'
                                        }, styles.wrapIcon]}
                                    >
                                        <IconFontAwesome5 name={'calendar-day'} size={26} color={'#9260f4'} />
                                    </View>

                                    <View
                                        style={{
                                            marginLeft: 12,
                                        }}
                                    >
                                        <Text
                                            style={styles.txtLableTaskGroup}
                                        >
                                            Ngày bắt đầu
                                        </Text>
                                        <Text
                                            style={styles.txtValueTaskGroup}
                                        >
                                            {moment(dateStart).format('DD/MM/YYYY')}
                                        </Text>
                                    </View>
                                </View>

                                <View>
                                    <IconFontAwesome name={'chevron-down'} size={26} color={'#000'} />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.controlChooseTaskGroup, styles.mv16]}
                                onPress={() => showTimePicker(false)}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    <View
                                        style={[{
                                            backgroundColor: '#fce3d2'
                                        }, styles.wrapIcon]}
                                    >
                                        <IconEntypo name={'back-in-time'} size={26} color={'#ff9241'} />
                                    </View>

                                    <View
                                        style={{
                                            marginLeft: 12,
                                        }}
                                    >
                                        <Text
                                            style={styles.txtLableTaskGroup}
                                        >
                                            Thời gian kết thúc
                                        </Text>
                                        <Text
                                            style={styles.txtValueTaskGroup}
                                        >
                                            {moment(timeEnd).format('HH:mm')}
                                        </Text>
                                    </View>
                                </View>

                                <View>
                                    <IconFontAwesome name={'chevron-down'} size={26} color={'#000'} />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.controlChooseTaskGroup, styles.mv16]}
                                onPress={() => showDatePicker(false)}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    <View
                                        style={[{
                                            backgroundColor: '#ede4ff'
                                        }, styles.wrapIcon]}
                                    >
                                        <IconFontAwesome5 name={'calendar-day'} size={26} color={'#9260f4'} />
                                    </View>

                                    <View
                                        style={{
                                            marginLeft: 12,
                                        }}
                                    >
                                        <Text
                                            style={styles.txtLableTaskGroup}
                                        >
                                            Ngày kết thúc
                                        </Text>
                                        <Text
                                            style={styles.txtValueTaskGroup}
                                        >
                                            {moment(dateEnd).format('DD/MM/YYYY')}
                                        </Text>
                                    </View>
                                </View>

                                <View>
                                    <IconFontAwesome name={'chevron-down'} size={26} color={'#000'} />
                                </View>
                            </TouchableOpacity>

                            <View
                                style={styles.mv16}
                            >
                                <View>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            fontWeight: '500',
                                            color: '#24252c',
                                        }}
                                    >Thông báo khi đến thời hạn công việc</Text>
                                </View>

                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: 12,
                                    }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                        onPress={() => setIsNotification(true)}
                                    >
                                        {
                                            isNotification ? (
                                                <IconIonicons name={'radio-button-on'} size={26} color={'#8043CC'} />
                                            ) : (
                                                <IconIonicons name={'radio-button-off'} size={26} color={'#8043CC'} />
                                            )
                                        }
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                fontWeight: '500',
                                                color: '#000',
                                                marginLeft: 8
                                            }}
                                        >Có</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                        onPress={() => setIsNotification(false)}
                                    >
                                        {
                                            !isNotification ? (
                                                <IconIonicons name={'radio-button-on'} size={26} color={'#8043CC'} />
                                            ) : (
                                                <IconIonicons name={'radio-button-off'} size={26} color={'#8043CC'} />
                                            )
                                        }
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                fontWeight: '500',
                                                color: '#000',
                                                marginLeft: 8
                                            }}
                                        >Không</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <TouchableOpacity
                                style={[{
                                    marginBottom: 12,
                                    padding: 12,
                                    backgroundColor: '#8043CC',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 12,
                                }, styles.mv16]}
                                onPress={handleSave}
                            >
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: '600',
                                        color: '#fff',
                                        textAlign: 'center',
                                        flexWrap: 'wrap'
                                    }}
                                >Hoàn tất</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                    <DateTimePickerModal
                        date={new Date(isStart ? dateStart : dateEnd)}
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />

                    <DateTimePickerModal
                        date={new Date(isStart ? timeStart : timeEnd)}
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={handleConfirmTime}
                        onCancel={hideTimePicker}
                    />

                    <Modal
                        animationIn="slideInUp"
                        animationOut="slideOutDown"
                        avoidKeyboard={true}
                        isVisible={isModalVisible}
                        onBackdropPress={() => {
                            closeModal();
                        }}
                        style={[
                            {
                                justifyContent: 'flex-end',
                                margin: 0,
                            }
                        ]}>
                        <View
                            style={{
                                flex: 0.5,
                                backgroundColor: '#fff'
                            }}
                        >
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingHorizontal: 16,
                                paddingVertical: 16,
                                backgroundColor: '#f5f5f5'
                            }}>
                                <View>
                                    <Text
                                        style={
                                            styles.txtLableModal
                                        }
                                    >Danh sách nhóm công việc</Text>
                                </View>

                                <TouchableOpacity
                                    onPress={closeModal}
                                >
                                    <CloseIcon color='#000' size={18} />
                                </TouchableOpacity>
                            </View>

                            <ScrollView>
                                {
                                    DataTaskGroupDefault.map((item, index) => {
                                        return (
                                            <TouchableOpacity
                                                key={index}
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    paddingHorizontal: 16,
                                                    paddingVertical: 16,
                                                    borderBottomWidth: 1,
                                                    borderBottomColor: '#f5f5f5'
                                                }}
                                                onPress={() => {
                                                    handleChooseTaskGroup(item);
                                                }}
                                            >
                                                <View
                                                    style={{
                                                        flex: 0.9,
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    {item.icon}
                                                    <View
                                                        style={{
                                                            marginLeft: 12
                                                        }}
                                                    >
                                                        <Text
                                                            style={{
                                                                fontSize: 16,
                                                                fontWeight: '400',
                                                                color: '#000',
                                                            }}
                                                        >{item.name}</Text>
                                                    </View>
                                                </View>

                                                {
                                                    item?.isChecked && (
                                                        <View
                                                            style={{
                                                                flex: 0.1,
                                                                justifyContent: 'center',
                                                                alignItems: 'center'
                                                            }}
                                                        >
                                                            <IconEntypo name={'check'} size={26} color={'green'} />
                                                        </View>
                                                    )
                                                }
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </ScrollView>
                        </View>
                    </Modal>

                    <Modal
                        animationIn="slideInDown"
                        animationOut="slideOutUp"
                        avoidKeyboard={true}
                        isVisible={isNotiError} //isNotiError
                        // visible={false}
                        backdropColor={'white'}
                        backdropOpacity={0}
                        onBackdropPress={() => {
                            closeModalNotiError();
                        }}
                        style={{
                            justifyContent: 'flex-start',
                            // backgroundColor: 'rgba(255, 255, 255, 01)'
                        }}
                    >
                        <View
                            style={{
                                width: '100%',
                                height: 50,
                                backgroundColor: '#fff',
                                borderRadius: 12,
                                borderColor: 'red',
                                borderWidth: 1,
                            }}
                        >
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingHorizontal: 12,
                            }}>
                                <IconMaterialIcons name={'report-gmailerrorred'} size={26} color={'red'} />
                                <Text
                                    style={{
                                        color: 'red',
                                        marginLeft: 8,
                                    }}
                                >Vui lòng nhập đầy đủ thông tin!</Text>
                            </View>
                        </View>
                    </Modal>
                </ImageBackground>
            </TouchableWithoutFeedback>
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
        paddingHorizontal: 16,
        paddingTop: 4,
    },

    controlChooseTaskGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 12,
    },

    wrapIcon: {
        width: 40,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    txtLableTaskGroup: {
        fontSize: 14,
        fontWeight: '400',
        color: '#817d8b',
    },

    txtValueTaskGroup: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    },

    mv16: {
        marginVertical: 16
    },

    txtLableModal: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    }
})

export default AddTodo;