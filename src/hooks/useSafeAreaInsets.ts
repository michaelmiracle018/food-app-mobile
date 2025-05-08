import type {EdgeInsets} from 'react-native-safe-area-context';
// eslint-disable-next-line no-restricted-imports
import {useSafeAreaInsets as useSafeAreaInsetsInternal} from 'react-native-safe-area-context';
import getSafeAreaInsets from '~/lib/getSafeAreaInsets';


/**
 * Note: if you're looking for a hook to implement safe area padding in your screen, please either:
 * - add the `addBottomSafeAreaPadding` prop to generic components like ScrollView, SelectionList or FormProvider.
 * - use the `useSafeAreaPaddings` hook.
 *
 * This hook is only meant for internal use cases where you need to access the raw safe area insets.
 */
function useSafeAreaInsets(): EdgeInsets {
    
    const insets = useSafeAreaInsetsInternal();
    const adjustedInsets = getSafeAreaInsets(insets);

    return adjustedInsets;
}

export default useSafeAreaInsets;
