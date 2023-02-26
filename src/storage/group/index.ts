import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@utils/constants/storage";

export class Group {
    static async create(newGroup: string) {
        try {
            
            const storedGroups = await this.getAll()

            const groupAlreadyExists = storedGroups.includes(newGroup)

            if(groupAlreadyExists){
                throw new AppError('Já existe um grupo cadastrado com esse nome')
            }

            const groups = JSON.stringify([...storedGroups, newGroup])
            await AsyncStorage.setItem(GROUP_COLLECTION, groups)
        } catch (error) {
            throw error
        }
    }

    static async delete(name: string) {
        try {
            const storageGroups = await Group.getAll()
            const filtered = storageGroups.filter(groupName => groupName !== name)
            const groups = JSON.stringify(filtered)

            await AsyncStorage.setItem(GROUP_COLLECTION, groups)
            await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${name}`)
        } catch (error) {
            throw error
        }
    }

    static async getAll() {
        try {
            const storage = await AsyncStorage.getItem(GROUP_COLLECTION)
            const groups: string[] = storage ? JSON.parse(storage) : []

            return groups
        } catch (error) {
            throw error
        }
    }
}