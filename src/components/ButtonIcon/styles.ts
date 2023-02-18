import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export type ButtonIconTypeStyleProps = 'Primary' | 'Secondary';

type Props = {
    type: ButtonIconTypeStyleProps
}

export const Container = styled(TouchableOpacity) <Props>`
    width: 56px;
    height: 56px;

    justify-content: center;
    align-items: center;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({theme, type}) => ({
    size: 24,
    color: type === 'Primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK
}))`
  
`




