import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ButtonTypeStyleProps = 'Primary' | 'Secondary';

type Props = {
    type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity) <Props>`
    flex: 1;
    min-height: 56px;
    max-height: 56px;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme, type }) =>
        type === 'Primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK
    };

    border-radius: 6px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.WHITE};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`




