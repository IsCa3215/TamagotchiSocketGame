export interface Jugador {
    socketId: number;
    room?: string;
    position: number;
    watchingAt: number;
    alive: boolean;
    isOnHoyo: boolean;
}