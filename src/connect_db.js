"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.connectToDatabase = void 0;
const mongoose_1 = __importStar(require("mongoose"));
// Definizione dello schema utente
const userSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    password: String,
});
// Definizione del modello utente
const UserModel = mongoose_1.default.model('User', userSchema);
exports.User = UserModel;
// Funzione per connettersi al database MongoDB
const connectToDatabase = async (databaseName) => {
    try {
        await mongoose_1.default.connect(`mongodb://localhost:27017/${databaseName}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to the database');
    }
    catch (error) {
        console.error('Error connecting to the database:', error);
    }
};
exports.connectToDatabase = connectToDatabase;
