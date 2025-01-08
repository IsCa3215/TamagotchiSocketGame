import io from "socket.io-client";

const socker = io("https://localhost:3000", {
    reconnection: false,
    rejectUnauthorized: false,
    secure: true
});

socker.on("connect", () => {
    console.log("Conectado");
});
socker.on("error", (error) => {
    console.log("Error", error);
});