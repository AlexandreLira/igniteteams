import { ButtonTypeStyleProps, Container, Title } from './styles'
import { TouchableOpacityProps } from 'react-native'

type ListEmptyProps = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps 
}

export function Button({ title, type = 'Primary', ...rest}: ListEmptyProps) {
    return (
        <Container type={type} {...rest}>
            <Title>{title}</Title>
        </Container>
    )
} 