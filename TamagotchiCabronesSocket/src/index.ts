import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import fs from 'fs';
import https from 'https';
import { Server } from 'socket.io';


dotenv.config();

    const PORT = process.env.PORT || 3000;

    const privateKey = fs.readFileSync(process.env.KEY_PEM || '', 'utf8');
    const certificate = fs.readFileSync(process.env.CERT_PEM || '', 'utf8');
    const credentials = { key: privateKey, cert: certificate };

    const httpsServer = https.createServer(credentials);

    const io = new Server(httpsServer, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        },
    });
    let clientes = [];

    io.on('connection', (socket) => {
        console.log('Un jugador se ha conectado:', socket.id);
        clientes.push(socket);
        socket.join('room');
        console.log(socket.listenerCount)
        socket.on('disconnect', () => {
            console.log('Un cliente se ha desconectado:', socket.id);
        });
    });


    try {
        httpsServer.listen(PORT, (): void => {
            console.log(`Connected successfully on port ${PORT}`);
        });
    } catch (error: any) {
        console.error(`Error occurred: ${error.message}`);
    }