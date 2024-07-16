import {StyleSheet, Platform, Dimensions, PixelRatio} from 'react-native';
import {Colors} from './Colors.Theme';
import { AUTO_CENTER_JUSTIFY_LEFT_RIGHT, FLEXDIRECTION , FLEX_ALIGNITEMS, FLEX_JUSTIFYCONTENT} from '../type';

export const {width, height} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = width / 320;
const PLATFORM_IOS = Platform.OS === 'ios' ? true : false;

function normalize(size: number) {
  const newSize = size * scale;
  if (PLATFORM_IOS) {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const MINI = normalize(12);
const SMALL = normalize(14);
const MEDIUM = normalize(17);
const LARGE = normalize(20);
const SUPERLARGER = normalize(24);

export default StyleSheet.create({
  sizeLogo: {
    width: 200,
    height: 132,
  },

  sizeText: {
    fontSize: width > 420 ? 16 : 14,
  },

  sizeTextMini: {
    fontSize: MINI,
  },

  sizeTextSmall: {
    fontSize: SMALL,
  },

  sizeTextMedium: {
    fontSize: MEDIUM,
  },

  sizeTextLarge: {
    fontSize: LARGE,
  },

  sizeTextSuperLarge: {
    fontSize: SUPERLARGER,
  },

  droidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 0 : 35,
  },

  onlyFlexDirectionAli_Center: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  onlyFlexRow_AliCenter_JusSP: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  wh18: {
    width: 18,
    height: 18,
  },

  wh22: {
    width: 22,
    height: 22,
  },

  wh32: {
    width: 32,
    height: 32,
  },

  circle18: {
    width: 18,
    height: 18,
    borderRadius: 18,
  },

  circle22: {
    width: 22,
    height: 22,
    borderRadius: 22,
  },

  circle32: {
    width: 32,
    height: 32,
    borderRadius: 32,
  },

  flexW100: {
    flex: 1,
    width: '100%',
  },

  marginV12: {
    marginVertical: 12,
  },

  marginV24: {
    marginVertical: 12,
  },

  paddingH24: {
    paddingHorizontal: 24,
  },

  btnPrimary: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: 'center',
  },

  textError: {
    fontSize: 16,
    fontWeight: '600',
    color: 'red',
    textAlign: 'center',
  },

  flexRowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  line30: {
    width: '30%',
    height: 1,
    backgroundColor: '#ccc',
  },

  flexCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  styleTextBtnBasic: {
    fontSize: 18,
    fontWeight: '600',
    fontStyle: 'italic',
  },

  textBasic: {
    fontSize: 13,
    fontWeight: '400',
    color: '#000',
  },

  text14: {
    fontSize: MINI,
    fontWeight: PLATFORM_IOS ? '400' : '500',
    color: '#000',
  },

  text16: {
    fontSize: SMALL,
    fontWeight: PLATFORM_IOS ? '400' : '500',
    color: '#000',
  },

  textLabel: {
    fontSize: MEDIUM,
    fontWeight: PLATFORM_IOS ? '500' : '600',
    color: '#000'
  },
});

export const CustomStyleSheet = {
  textAlign: (value: AUTO_CENTER_JUSTIFY_LEFT_RIGHT) => {
    return {
      textAlign: value,
    };
  },

  alignItems: (value: FLEX_ALIGNITEMS) => {
    return {
      alignItems: value,
    };
  },

  justifyContent: (value: FLEX_JUSTIFYCONTENT) => {
    return {
      justifyContent: value,
    };
  },
  opacity: (value: number) => {
    return {
      opacity: value,
    };
  },

  flexDirection: (value: FLEXDIRECTION) => {
    return {
      flexDirection: value,
    };
  },

  zIndex: (value: number) => {
    return {
      zIndex: value,
    };
  },

  flex: (value = 1) => {
    return {
      flex: value,
    };
  },

  width: (value = width) => {
    return {
      width: value,
    };
  },

  minWidth: (value = width) => {
    return {
      minWidth: value,
    };
  },

  height: (value = height) => {
    return {
      height: value,
    };
  },

  marginVertical: (value = 0) => {
    return {
      marginVertical: value,
    };
  },

  marginHorizontal: (value = 0) => {
    return {
      marginHorizontal: value,
    };
  },

  margin: (value = 0) => {
    return {
      margin: value,
    };
  },

  marginBottom: (value = 0) => {
    return {
      marginBottom: value,
    };
  },

  marginTop: (value = 0) => {
    return {
      marginTop: value,
    };
  },

  marginRight: (value = 0) => {
    return {
      marginRight: value,
    };
  },

  marginLeft: (value = 0) => {
    return {
      marginLeft: value,
    };
  },

  paddingVertical: (value = 0) => {
    return {
      paddingVertical: value,
    };
  },

  paddingHorizontal: (value = 0) => {
    return {
      paddingHorizontal: value,
    };
  },

  paddingTop: (value = 0) => {
    return {
      paddingTop: value,
    };
  },

  paddingBottom: (value = 0) => {
    return {
      paddingBottom: value,
    };
  },

  paddingRight: (value = 0) => {
    return {
      paddingRight: value,
    };
  },

  paddingLeft: (value = 0) => {
    return {
      paddingLeft: value,
    };
  },

  padding: (value = 0) => {
    return {
      padding: value,
    };
  },

  flexGrow: (value = 1) => {
    return {
      flexGrow: value,
    };
  },

  borderRadius: (value = 0) => {
    return {
      borderRadius: value,
    };
  },

  borderWidth: (value = 0) => {
    return {
      borderWidth: value,
    };
  },

  borderTopWidth: (value = 0) => {
    return {
      borderTopWidth: value,
    };
  },

  borderBottomWidth: (value = 0) => {
    return {
      borderBottomWidth: value,
    };
  },

  borderBottomColor: (value = Colors.primaryColor) => {
    return {
      borderBottomColor: value,
    };
  },

  borderColor: (value = Colors.primaryColor) => {
    return {
      borderColor: value,
    };
  },

  backgroundColor: (value = Colors.primaryColor) => {
    return {
      backgroundColor: value,
    };
  },

  color: (value = Colors.primaryColor) => {
    return {
      color: value,
    };
  },

  borderRightWidth: (value = 0) => {
    return {
      borderRightWidth: value,
    };
  },

  borderLeftWidth: (value = 0) => {
    return {
      borderLeftWidth: value,
    };
  },

  fontWeight: (value = '400') => {
    if (typeof value === 'string' || typeof value === 'number') {
      value = value.toString();
    }
    return {
      fontWeight: value,
    };
  },

  fontSize: (value = Size.text) => {
    return {
      fontSize: value,
    };
  },

  maxWidth: (value = width) => {
    return {
      maxWidth: value,
    };
  },

  maxHeight: (value = width) => {
    return {
      maxHeight: value,
    };
  },

  minHeight: (value = height) => {
    return {
      minHeight: value,
    };
  },

  elevation: (value = 1) => {
    return {
      elevation: value,
    };
  },

  cricle: (value: number) => {
    return {
      width: value,
      height: value,
      borderRadius: value,
    };
  }
};

export const Size = {
  iconSize: normalize(13) + 6,
  iconSizeHeader: normalize(13) + 10,
  heightInput: 50,
  heightButton: 40,
  textSmall: normalize(11),
  text: normalize(12),
  textmedium: normalize(13) + 3,
  textlarge: normalize(13) + 5,
  textLableTabar: 13,
  deviceWidth: width,
  deviceheight: height,
  defineSpace: 16,
  defineHalfSpace: 8,
  borderPicker: 4,
  borderRadiusPrimary: 4,
  iconSizeLoadingSmall: 22,
  AvatarSize: width * 0.1 > 60 ? 60 : width * 0.1,
  borderRadiusBottom: 8,
  borderRadiusCircle: 100,
};
