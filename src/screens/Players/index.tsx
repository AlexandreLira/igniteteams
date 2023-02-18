import { useState } from 'react';
import { FlatList } from 'react-native';


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

export function Players() {
    const [teams, setTeams] = useState(['time a', 'time b'])
    const [selectedTeam, setSelectedTeam] = useState(teams[0])
    const [players, setPlayers] = useState(['alexandre', 'pamela'])

    function handleRemovePlayer(name: string) {
        const newPlayers = players.filter(player => player !== name)
        setPlayers(newPlayers)
    }

    function handleAddPlayer(name: string) {
        setPlayers(prevState => [name, ...prevState])
    }

    return (
        <Container>
            <Header showBackButton />
            <HighLight
                title='Nome da turma'
                subtitle='Adicione a galera e separe os times'
            />
            <Form>

                <Input
                    placeholder='Nome da pessoa'
                    autoCorrect={false}
                />
                <ButtonIcon icon='add' onPress={() => handleAddPlayer(Math.random().toString())}/>
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
                keyExtractor={item => item}
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
                        name={item}
                        onRemove={() => handleRemovePlayer(item)}
                    />}
            />

            <Button title='Remover Turma' type='Secondary' />
        </Container>
    )
} 