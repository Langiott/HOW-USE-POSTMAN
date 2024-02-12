import mongoose, { Document, Schema } from "mongoose";

// Dichiarazione del modello utente
interface User extends Document {
    name: string;
    email: string;
    password: string;
  }

// Definizione dello schema utente
const userSchema = new Schema<User>({
    name: String,
    email: String,
    password: String,
  });

// Definizione del modello utente
const UserModel = mongoose.model<User>('User', userSchema);

// Funzione per connettersi al database MongoDB
export const connectToDatabase = async (databaseName: string) => {
    try {
      await mongoose.connect(`mongodb://localhost:27017/${databaseName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to the database');
    } catch (error) {
      console.error('Error connecting to the database:', error);
    }
  };
  
  // Esporta il modello utente
  export { UserModel as User };