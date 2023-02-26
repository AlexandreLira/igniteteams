import { useEffect, useState, useRef } from 'react';
import { Alert, FlatList, TextInput } from 'react-native';


import { Button } from '@components/Button'
import { ButtonIcon } from '@components/ButtonIcon'
import { Filter } from '@components/Filter'
import { Header } from '@components/Header'
import { HighLight } from '@components/HighLight'
import { Input } from '@components/Input'
import { PlayerCard } from '@components/PlayerCard';

import {
    Container,
    ContentList,
    Form,
    NumbersOfPlayers,
    Separator
} from './styles'
import { ListEmpty } from '@components/ListEmpty';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppError } from '@utils/AppError';
import { Player } from '@storage/player';
import { PlayerStorageDTO } from '@storage/player/playerDTO';
import { Group } from '@storage/group';

type RouteParams = {
    group: string
}


export function Players() {
    const [newPlayerName, setNewPlayerName] = useState('')
    const [teams, setTeams] = useState(['time a', 'time b'])
    const [selectedTeam, setSelectedTeam] = useState(teams[0])
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([])

    const route = useRoute();
    const navigation = useNavigation();
    const { group } = route.params as RouteParams

    const newPlayerNameInputRef = useRef<TextInput>(null)

    async function handleRemovePlayer(name: string) {
        await Player.delete(name, group)

        fetchPlayersByTeam()
    }

    async function handleAddPlayer(name: string) {
        if (name.trim().length === 0) {
            return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar')
        }

        const newPlayer = {
            name: name,
            team: selectedTeam
        }

        try {
            await Player.create(newPlayer, group)
            newPlayerNameInputRef.current?.blur()
            setNewPlayerName('')
            fetchPlayersByTeam()
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Nova pessoa', error.message)
            } else {
                Alert.alert('Nova pessoa', 'Não foi possivel adicionar')
                console.error(error)
            }
        }
    }

    async function handleRemoverGroup() {
        Alert.alert(
            'Remover Groupo', 
            'Deseja remover o grupo',
            [
                {text: 'Não', style: 'cancel'},
                {text: 'Sim', onPress: removeGroup}
            ]
        )
    }


    async function fetchPlayersByTeam() {
        try {
            const playersByTeam = await Player.getByGroupAndTeam(group, selectedTeam)
            setPlayers(playersByTeam)

        } catch (error) {
            console.warn(error)
            Alert.alert('Pessoas', 'Não foi possivel carregar as pessoas')
        }
    }

    async function removeGroup() {
        try {
            await Group.delete(group)
            navigation.navigate('groups')
        } catch (error) {
            Alert.alert('Remover grupo', 'Não foi possivel remover o grupo')
            console.error(error)
        }
    }

    useEffect(() => {
        fetchPlayersByTeam()
    }, [selectedTeam])

    return (
        <Container>
            <Header showBackButton />
            <HighLight
                title={group}
                subtitle='Adicione a galera e separe os times'
            />
            <Form>

                <Input
                    inputRef={newPlayerNameInputRef}
                    placeholder='Nome da pessoa'
                    autoCorrect={false}
                    onChangeText={setNewPlayerName}
                    value={newPlayerName}
                    onSubmitEditing={() => handleAddPlayer(newPlayerName)}
                    returnKeyType="done"
                />
                <ButtonIcon icon='add' onPress={() => handleAddPlayer(newPlayerName)} />
            </Form>

            <ContentList>
                <FlatList
                    data={teams}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={() => <Separator space={8} />}
                    horizontal
                    renderItem={({ item }) =>
                        <Filter
                            title={item}
                            isActive={item == selectedTeam}
                            onPress={() => setSelectedTeam(item)}
                        />}
                />
                <NumbersOfPlayers>
                    {players.length}
                </NumbersOfPlayers>
            </ContentList>

            <FlatList
                data={players}
                keyExtractor={item => item.name}
                contentContainerStyle={[
                    { paddingBottom: 100 },
                    players.length === 0 && { flex: 1 }
                ]}
                ListHeaderComponent={() => <Separator space={20} />}
                ItemSeparatorComponent={() => <Separator space={14} />}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => <ListEmpty message='Não há pessoas nesse time' />}
                renderItem={({ item }) =>
                    <PlayerCard
                        name={item.name}
                        onRemove={() => handleRemovePlayer(item.name)}
                    />}
            />

            <Button
                title='Remover Turma'
                type='Secondary'
                onPress={handleRemoverGroup}
            />
        </Container>
    )
} 