import { Container, FilterStyleProps, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';



type Props = TouchableOpacityProps & FilterStyleProps & {
    title: string;
}

export function Filter({title, isActive, ...rest}: Props) {
    return (
        <Container isActive={isActive} {...rest}>
           <Title>{title}</Title>
        </Container>
    )
} 