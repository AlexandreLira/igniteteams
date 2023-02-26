import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";
import { PLAYER_COLLECTION } from "@utils/constants/storage";
import { PlayerStorageDTO } from "./playerDTO";


export class Player {
    static async create(newPlayer: PlayerStorageDTO, group: string) {
        try {
            const storedPlayers = await Player.getByGroup(group)

            const playersExist = storedPlayers.filter(player => player.name === newPlayer.name)
            if (playersExist.length > 0) {
                throw new AppError('Essa pessoa já está adicionada em um time.')
            }

            const storage = JSON.stringify([...storedPlayers, newPlayer])

            await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
        } catch (error) {
            throw error
        }
    }

    static async delete(name: string, group: string) {
        try {
            const players = await Player.getByGroup(group)
            const newPlayers = players.filter(player => player.name !== name)
            const storage = JSON.stringify(newPlayers)

            await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
        } catch (error) {
            throw error
        }
    }
    static async getByGroup(group: string) {
        try {
            const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`)
            const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : []
            return players
        } catch (error) {
            throw error
        }
    }

    static async getByGroupAndTeam(group: string, team: string) {
        try {
            const groupStorage = await Player.getByGroup(group)

            const players = groupStorage.filter(player => player.team === team)

            return players
        } catch (error) {
            throw error
        }
    }

}