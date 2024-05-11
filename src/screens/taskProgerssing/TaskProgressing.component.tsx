import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity, Dimensions } from "react-native";
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import * as Progress from 'react-native-progress';

import { BagIcon } from "../../assets/icon/Icon";

const { width } = Dimensions.get('screen');

interface IProps {
    item: any;
    // also contains all props of the TextInput component
}


const TaskProgerssing: React.FC<IProps> = (props: IProps) => {
    const { item } = props;

    return (
        <View style={{
            maxWidth: width * (60 / 100) + 16,
            backgroundColor: `${item?.backgroundColor}`,
            padding: 16,
            borderRadius: 16,
            marginRight: 16,
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: '500',
                        color: '#6f6a7c',
                        textAlign: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    {item?.name}
                </Text>

                <View
                    style={{
                        backgroundColor: `${item?.backgroundColorIcon}`,
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {item?.icon}
                </View>
            </View>

            <View style={{

            }}>
                <Text
                    numberOfLines={3}
                    style={{
                        fontSize: 22,
                        fontWeight: '500',
                        color: '#000',
                    }}>
                    {item?.nameTask}
                </Text>
            </View>

            <View style={{
                marginTop: 18,
            }}>
                <Progress.Bar
                    progress={0.6}
                    color={`${item?.colorProgress}`}
                    width={(width * (60 / 100)) - 16}
                    unfilledColor='#fff'
                    borderWidth={0}
                />
            </View>
        </View>
    )
}

export default TaskProgerssing;