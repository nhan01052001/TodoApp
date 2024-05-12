import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Progress from 'react-native-progress';


interface IProps {
    item: any;
    // also contains all props of the TextInput component
}

const GroupTask: React.FC<IProps> = (props: IProps) => {
    const { item } = props;
    const [progress, setProgress] = useState<number>(1);
    // const progress = (item?.totalNumbeTask !== undefined && item?.totalNumbeTask !== 0) ? item?.numberTaskCompleted / item?.totalNumbeTask : 1;

    useEffect(() => {
        if(item?.totalNumbeTask !== undefined && item?.totalNumbeTask !== 0)
            setProgress(item?.numberTaskCompleted / item?.totalNumbeTask);
    }, [item?.totalNumbeTask]);

    return (
        <TouchableOpacity
            style={{
                padding: 16,
                borderRadius: 8,
                backgroundColor: 'white',
                borderWidth: 0.1,
                borderColor: '#b6b6b6',
                marginBottom: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
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

                <View
                    style={{
                        marginLeft: 12,
                    }}
                >
                    <Text
                        numberOfLines={1}
                        style={{
                            fontSize: 18,
                            fontWeight: '500',
                            color: '#24252c',
                        }}
                    >
                        {item?.name}
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: '500',
                            color: '#6e6a7c',
                        }}
                    >
                        23 công việc
                    </Text>
                </View>
            </View>

            <View>
                <View style={{
                    position: 'absolute',
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    borderWidth: 6,
                    borderColor: `${item?.backgroundColorIcon}`
                }} />
                <Progress.Circle
                    color={`${item?.colorProgress}`}
                    borderWidth={0}
                    progress={progress}
                    size={50}
                    showsText={true}
                    thickness={6}
                    direction="clockwise"
                    textStyle={{
                        fontSize: 14,
                        fontWeight: '500',
                        color: '#000'
                    }}
                />
            </View>
        </TouchableOpacity>
    )
}

export default GroupTask;