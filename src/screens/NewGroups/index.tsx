import { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { HighLight } from '@components/HighLight'
import { Input } from '@components/Input'

import { Container, Icon, Content } from './styles'
import { Group } from '@storage/group'
import { AppError } from '@utils/AppError'

export function NewGroups() {
    const [group, setGroup] = useState('')
    const navigation = useNavigation()

    async function handleCreateNewGroup(name: string) {
        try {
            if(name.trim().length === 0) {
                return Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo')
            }
            
            await Group.create(name)
            navigation.navigate('players', { group: name })
        } catch(error) {
            if(error instanceof AppError) {
                return Alert.alert('Novo Grupo', error.message)
            }

            Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo')
        }
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
                    style={{ marginBottom: 20 }}
                    placeholder="Nome da turma"
                    onChangeText={setGroup}
                />

                <Button title='Criar' onPress={() => handleCreateNewGroup(group)} />
            </Content>
        </Container>
    )
} 