import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';


export const Container = styled.View`
    width: 100%;
    height: 56px;

    flex-direction: row;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    border-radius: 6px;
`;

export const Title = styled.Text`
    flex: 1;
    text-transform: capitalize;
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.WHITE};
    `}
`;


export const Icon = styled(MaterialIcons).attrs(({theme}) => ({
    name: 'person',
    size: 24,
    color: theme.COLORS.GRAY_200
}))`
  margin-left: 16px;
  margin-right: 4px;
`


