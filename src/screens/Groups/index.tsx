import { useState, useEffect, useCallback } from 'react'
import { FlatList } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { Button } from '@components/Button'
import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'
import { HighLight } from '@components/HighLight'
import { ListEmpty } from '@components/ListEmpty'
import { Container } from './styles'
import { Group } from '@storage/group'

export function Groups() {

    const [groups, setGroups] = useState<string[]>([])

    const navigation = useNavigation()

    function handleNewGroup() {
        navigation.navigate('new')
    }

    async function fetchGroups() {
        const storage = await Group.getAll()
        setGroups(storage)
    }

    useFocusEffect(
        useCallback(() => {
            fetchGroups()
        }, [])
    )

    return (
        <Container>
            <Header />
            <HighLight
                title='Turmas'
                subtitle='Jogue com a sua turma'
            />

            <FlatList
                showsHorizontalScrollIndicator={false}
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => <GroupCard title={item} />}
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => <ListEmpty message='Que tal cadastrar a primeira turma?' />}
            />

            <Button title='Criar nova turma' onPress={handleNewGroup} />
        </Container>
    )
} 