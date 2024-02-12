"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connect_db_1 = require("./connect_db");
const app = (0, express_1.default)();
const port = 3003;
// Middleware per gestire il corpo delle richieste in formato JSON
app.use(express_1.default.json());
// Connessione al database
(0, connect_db_1.connectToDatabase)('database');
//GET
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
// POST per la registrazione di un nuovo utente
app.post('/register', async (req, res) => {
    try {
        // Estrai i dati dal corpo della richiesta
        const { name, email, password } = req.body;
        // Crea un nuovo utente utilizzando il modello Mongoose
        const user = new connect_db_1.User({ name, email, password });
        // Salva il nuovo utente nel database
        await user.save();
        // Fai qualcosa con i dati (ad esempio, salvali nel database)
        // Crea un nuovo utente utilizzando il modello Mongoose
        const newUser = new connect_db_1.User({ name, email, password });
        // Visualizza i dati ricevuti nella console del server
        res.status(201).send(`Dati ricevuti della registrazione: ${name}, ${email}, ${password}`);
        // Invia una risposta di successo
        res.status(201).json({ message: 'Utente registrato con successo' });
    }
    catch (error) {
        // Invia una risposta di successo
        res.status(201).json({ message: 'Utente registrato con successo' });
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
