import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Logo = styled.Image`

`
export const BackButton = styled.TouchableOpacity`
    flex: 1;
`

export const BackIcon = styled(Entypo).attrs(() => ({
    name: 'chevron-thin-left',
    size: 32,
    color: 'white'
}))`

`


