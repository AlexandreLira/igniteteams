import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type FilterStyleProps = {
    isActive?: boolean
}


export const Container = styled(TouchableOpacity)<FilterStyleProps>`
   ${({theme, isActive}) => isActive && css`
        border: 1px solid ${theme.COLORS.GREEN_700};
   `}

   border-radius: 4px;

   height: 38px;
   min-width: 70px;
   padding: 0 6px;
   
   align-items: center;
   justify-content: center;
`;

export const Title = styled.Text`
    text-transform: uppercase;
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.WHITE};
    `}
`;



