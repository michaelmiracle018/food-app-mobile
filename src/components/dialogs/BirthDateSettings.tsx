import {View} from 'react-native'
import {msg, Trans} from '@lingui/macro'
import {useLingui} from '@lingui/react'
import * as Dialog from '~/components/Dialog'
import { Text } from '../ui/text'


export function BirthDateSettingsDialog({
  control,
}: {
  control: Dialog.DialogControlProps
}) {

  const {_} = useLingui()


  return (
    <>
    <Dialog.Outer control={control} nativeOptions={{preventExpansion: true}} testID='iii'>
      <Dialog.Handle />
      <Dialog.ScrollableInner label={_(msg`My Birthday`)}>
        <View >
          <Text>
            <Trans>My Birthday</Trans>
          </Text>
          <Text>
            <Trans>This information is not shared with other users.</Trans>
          </Text>
        </View>
        <Dialog.Close />
      </Dialog.ScrollableInner>
    </Dialog.Outer>
    </>
  )
}


