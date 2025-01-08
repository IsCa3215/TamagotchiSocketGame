import { Room } from "../models/Rooms";

interface Salas {
    salas: Room[];
}

function createRoom(salas: Salas) {
    return {
        id: salas.salas.length + 1,
        players: []
    }
}

export function joinRoom(room: Room){
    
}