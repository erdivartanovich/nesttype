export interface PotServiceInterface {
    findContainerIdByPotID(potID: string): Promise<string>
    
}