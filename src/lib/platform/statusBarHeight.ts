import {Dimensions, Platform, StatusBar} from 'react-native'

const STATUSBAR_DEFAULT_HEIGHT = 20
const STATUSBAR_X_HEIGHT = 44
const STATUSBAR_IP12_HEIGHT = 47
const STATUSBAR_IP12MAX_HEIGHT = 47
const STATUSBAR_IP14PRO_HEIGHT = 49

const X_WIDTH = 375
const X_HEIGHT = 812

const XSMAX_WIDTH = 414
const XSMAX_HEIGHT = 896

const IP12_WIDTH = 390
const IP12_HEIGHT = 844

const IP12MAX_WIDTH = 428
const IP12MAX_HEIGHT = 926

const IP14PRO_WIDTH = 393
const IP14PRO_HEIGHT = 852

const IP14PROMAX_WIDTH = 430
const IP14PROMAX_HEIGHT = 932
export const {width: Screen_width} = Dimensions.get('screen')
const {height: W_HEIGHT, width: W_WIDTH} = Dimensions.get('window')

let statusBarHeight = STATUSBAR_DEFAULT_HEIGHT
let isIPhoneX_v = false
let isIPhoneXMax_v = false
let isIPhone12_v = false
let isIPhone12Max_v = false
let isIPhoneWithMonobrow_v = false
let isIPhoneWithDynamicIsland_v = false

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTV) {
  if (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) {
    isIPhoneWithMonobrow_v = true
    isIPhoneX_v = true
    statusBarHeight = STATUSBAR_X_HEIGHT
  } else if (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT) {
    isIPhoneWithMonobrow_v = true
    isIPhoneXMax_v = true
    statusBarHeight = STATUSBAR_X_HEIGHT
  } else if (W_WIDTH === IP12_WIDTH && W_HEIGHT === IP12_HEIGHT) {
    isIPhoneWithMonobrow_v = true
    isIPhone12_v = true
    statusBarHeight = STATUSBAR_IP12_HEIGHT
  } else if (W_WIDTH === IP12MAX_WIDTH && W_HEIGHT === IP12MAX_HEIGHT) {
    isIPhoneWithMonobrow_v = true
    isIPhone12Max_v = true
    statusBarHeight = STATUSBAR_IP12MAX_HEIGHT
  } else if (W_WIDTH === IP14PROMAX_WIDTH && W_HEIGHT === IP14PROMAX_HEIGHT) {
    isIPhoneWithDynamicIsland_v = true
    statusBarHeight = STATUSBAR_IP14PRO_HEIGHT
  } else if (W_WIDTH === IP14PRO_WIDTH && W_HEIGHT === IP14PRO_HEIGHT) {
    isIPhoneWithDynamicIsland_v = true
    statusBarHeight = STATUSBAR_IP14PRO_HEIGHT
  }
}

export const isIPhoneX = () => isIPhoneX_v
export const isIPhoneXMax = () => isIPhoneXMax_v
export const isIPhone12 = () => isIPhone12_v
export const isIPhone12Max = () => isIPhone12Max_v
export const isIPhoneWithMonobrow = () => isIPhoneWithMonobrow_v
export const isIPhoneWithDynamicIsland = () => isIPhoneWithDynamicIsland_v

export function getStatusBarHeight(skipAndroid: boolean) {
  return Platform.select({
    ios: statusBarHeight,
    android: skipAndroid ? 0 : StatusBar.currentHeight,
    default: 0,
  })
}
