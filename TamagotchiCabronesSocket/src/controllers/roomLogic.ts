import { Jugador } from "../models/Jugadores";
import { Room } from "../models/Rooms";

class roomLogic {
    private rooms: Room[] = [];
    private id: Room = { id: 0, players: [] };
    constructor(room: number) {
        this.rooms = [];
    }
    createRoom() {
        const room = new roomLogic(this.rooms.length + 1);
        this.rooms.push(room);
        return room;
    }

    joinRoom(room: Room) {
        if (room.players.length < 2) {
            room.players.push();
        }
    }
}
