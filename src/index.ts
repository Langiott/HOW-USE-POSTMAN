import express , { Request, Response } from 'express';
import { connectToDatabase, User } from './connect_db';


const app = express();
const port = 3003;

// Middleware per gestire il corpo delle richieste in formato JSON
app.use(express.json());

// Connessione al database
connectToDatabase('database');

//GET
app.get('/', (req : Request , res: Response) => {
  res.send('Hello, world!');
});

// POST per la registrazione di un nuovo utente
app.post('/register', async (req: Request, res: Response) => {

    try {
    // Estrai i dati dal corpo della richiesta
    const { name, email, password } = req.body;

    // Crea un nuovo utente utilizzando il modello Mongoose
    const user = new User({ name, email, password });
    
    // Salva il nuovo utente nel database
    await user.save();
  
    // Fai qualcosa con i dati (ad esempio, salvali nel database)
    // Crea un nuovo utente utilizzando il modello Mongoose
    const newUser = new User({ name, email, password });
    
    // Visualizza i dati ricevuti nella console del server
    res.status(201).send(`Dati ricevuti della registrazione: ${name}, ${email}, ${password}`);
    // Invia una risposta di successo
    res.status(201).json({ message: 'Utente registrato con successo' });
    }catch(error){
    // Invia una risposta di successo
    res.status(201).json({ message: 'Utente registrato con successo' });
    }
    
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});