import {Dimensions, Platform, StatusBar} from 'react-native'

export const isIOS = Platform.OS === 'ios'
export const isAndroid = Platform.OS === 'android'
export const isNative = isIOS || isAndroid
export const devicePlatform = isIOS ? 'ios' : isAndroid ? 'android' : 'web'
export const isWeb = !isNative
export const isMobileWebMediaQuery = 'only screen and (max-width: 1300px)'
export const isMobileWeb =
  isWeb &&
  // @ts-ignore we know window exists -prf
  global.window.matchMedia(isMobileWebMediaQuery)?.matches
export const statusBarHeight =
  Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
export const windowWidth = Dimensions.get('window').width
export const windowHeight = Dimensions.get('window').height
