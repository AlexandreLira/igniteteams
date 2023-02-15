import { ActivityIndicatorProps } from 'react-native'
import { Container, LoadIndicator } from './styles'
import theme from '@theme/index'
import { useTheme } from 'styled-components/native'

interface Props extends ActivityIndicatorProps {
    color?: keyof typeof theme.COLORS
}

export function Loading({ color, ...rest }: Props) {
    return (
        <Container>
            <LoadIndicator
                {...rest}
                color={color || 'GREEN_500'}
            />
        </Container>
    )
} 