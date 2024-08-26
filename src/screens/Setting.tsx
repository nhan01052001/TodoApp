import {StyleSheet, Text, View} from 'react-native';
import {useEffect, useState, useRef} from 'react';
import {useCameraDevice} from 'react-native-vision-camera';

export default function Setting() {
  const device = useCameraDevice('front');

  if (device == null)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Text>Hello word</Text>
      </View>
    );
  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
}
