import { ActivityIndicatorProps } from 'react-native'
import { Container, Title } from './styles'

type GroupCardProps = {
    title: string
}

export function GroupCard({title}: GroupCardProps) {
    return (
        <Container>
          <Title>{title}</Title>
        </Container>
    )
} 