import {enableFreeze} from 'react-native-screens'
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context'
import '../global.css'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import Splash from './lib/Splash'
import React from 'react'
// import {BottomSheetProvider} from './bottomSheetModals/BottomSheetPortal'
import {BottomSheetOutlet, BottomSheetProvider} from '../modules/bottom-sheet'
import {
  DarkTheme,
  DefaultTheme,
  Theme,
  ThemeProvider,
} from '@react-navigation/native'
// import '../reanimatedConfig'

// import {useColorScheme} from './lib/useColorScheme'
import {NAV_THEME} from './lib/constants'
import {setAndroidNavigationBar} from './lib/android-navigation-bar'
// import {Provider as DialogStateProvider} from '#/state/dialogs'
import { KeyboardControllerProvider } from './hooks/useEnableKeyboardController'
import { Text } from 'react-native'
// import { BottomSheetModalProvider } from '@discord/bottom-sheet'

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
}
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
}

function InnerApp() {
  enableFreeze(true)
  // const {colorScheme, isDarkColorScheme} = useColorScheme()
  // const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false)
  // const hasMounted = React.useRef(false)
  // const useIsomorphicLayoutEffect = React.useLayoutEffect

  // useIsomorphicLayoutEffect(() => {
  //   if (hasMounted.current) {
  //     return
  //   }
  //   setAndroidNavigationBar(colorScheme)
  //   setIsColorSchemeLoaded(true)
  //   hasMounted.current = true
  // }, [])

  // if (!isColorSchemeLoaded) {
  //   return null
  // }

  return (
    <>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <GestureHandlerRootView>
            <React.Fragment key={'KKK'}>
            
                
                  {/* <ThemeProvider
                    value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}> */}

      {/* <BottomSheetOutlet /> */}

                     <Text>Hello</Text>


            </React.Fragment>
          </GestureHandlerRootView>
      </SafeAreaProvider>
    </>
  )
}

export default function App() {
  return (
    <>
          <KeyboardControllerProvider>
      {/* <DialogStateProvider> */}
              <BottomSheetProvider>
                  <InnerApp />
                  </BottomSheetProvider>
      {/* </DialogStateProvider>   */}
      </KeyboardControllerProvider>
    </>
  )
}
