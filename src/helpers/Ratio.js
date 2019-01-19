import { Dimensions, PixelRatio, Platform } from 'react-native';

const devicePlatform = Platform.OS === 'ios' ? 'ios' : 'android';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const pixelRatio = PixelRatio.get();

// =========PixelRatio=========
// iPhone 7 = 2
// iPhone 7 Plus, X = 3
// Samsung S7 = 2.625

const multiplier = pixelRatio >= 3 ? screenHeight * 0.9 : screenHeight;
const heightScaleHighRatio = value => PixelRatio.roundToNearestPixel(multiplier * value / 100);
const isIphoneX = Platform.OS === 'ios' && screenHeight === 812 ? true : false;

const widthScale = value => PixelRatio.roundToNearestPixel(screenWidth * value / 100);
const heightScale = value => PixelRatio.roundToNearestPixel(screenHeight * value / 100);
const marginScale = value => {
  let roundedValue1 = PixelRatio.roundToNearestPixel(screenHeight * (pixelRatio / 2) * value / 100);
  let roundedValue2 = PixelRatio.roundToNearestPixel(screenHeight * (pixelRatio / 4) * value / 100);

  return screenHeight > 600 ? roundedValue1 : roundedValue2;
};
const platformScale = (value1, value2) => {
  if (Platform.OS === 'ios') {
    return value1;
  } else {
    return value2;
  };
};

const normalize = (size) => {
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(size));
  } else {
    if (PixelRatio >= 3) {
      return Math.round(PixelRatio.roundToNearestPixel(size) - 1);
    } else {
      return size;
    }
  };
};

export default { devicePlatform, widthScale, heightScale, heightScaleHighRatio, marginScale, platformScale, screenWidth, screenHeight, isIphoneX, normalize };
