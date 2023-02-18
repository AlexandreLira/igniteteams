import { UsersThree } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

type SeparatorProps = {
    space: number
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    padding: 24px;
`

export const Content = styled.View`
    flex: 1;
    justify-content: center;
`

export const Form = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};

    flex-direction: row;
    border-radius: 6px;
    margin-bottom: 20px;
    align-items: center;
`

export const Separator = styled.View<SeparatorProps>`
    ${({ space = 0}) => css`
        width: ${space}px;
        height: ${space}px;
    `}
  
`;

export const ContentList = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const NumbersOfPlayers = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
`;


