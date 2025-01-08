import { Jugador } from "../Jugadores"
import { Room } from "../Rooms"

export const playerMapper = (jugador: Jugador[]): Room => {
    return {
        id: jugador[0].socketId,
        players: jugador.map((jugador: Jugador) => {
            return {
                socketId: jugador.socketId,
                room: jugador.room,
                position: jugador.position,
                watchingAt: jugador.watchingAt,
                alive: jugador.alive,
                isOnHoyo: jugador.isOnHoyo
            }
        })
    }
}