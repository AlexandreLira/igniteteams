import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { HighLight } from '@components/HighLight'
import { Input } from '@components/Input'

import { Container, Icon, Content } from './styles'

export function NewGroups() {
    const [group, setGroup] = useState('')
    const navigation = useNavigation()

    function handleGotoPlayers(){
        navigation.navigate('players', {group: 'Alexandre'})
    }
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
                    onChangeText={setGroup}
                />

                <Button title='Criar' onPress={handleGotoPlayers} />
            </Content>
        </Container>
    )
} 