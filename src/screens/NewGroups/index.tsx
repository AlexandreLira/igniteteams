import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { HighLight } from '@components/HighLight'
import { Input } from '@components/Input'
import { Container, Icon, Content } from './styles'

export function NewGroups() {

    return (
        <Container>
            <Header showBackButton />
            <Content>

                <Icon />
                <HighLight
                    title='Nova Turma'
                    subtitle='crie uma turma para adicionar pessoas'
                />

                <Input 
                    style={{marginBottom: 20}}
                    placeholder="Nome da turma"    
                />

                <Button title='Criar' />
            </Content>
        </Container>
    )
} 