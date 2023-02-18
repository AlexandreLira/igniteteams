import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

import {
    ButtonIconTypeStyleProps,
    Container,
    Icon,
} from './styles'

type Props = TouchableOpacityProps & {
    type?: ButtonIconTypeStyleProps;
    icon: keyof typeof MaterialIcons.glyphMap;
}

export function ButtonIcon({ type = 'Primary', icon,...rest }: Props) {
    return (
        <Container type={type} {...rest}>
            <Icon
                name={icon}
                size={32}
                type={type}
            />
        </Container>
    )
} 