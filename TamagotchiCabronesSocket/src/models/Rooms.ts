import { Jugador } from "./Jugadores";

export interface Room {
    id: number;
    players: Jugador[];
}