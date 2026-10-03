import express from 'express'
import { connectDB } from './config/db'

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;



const startServer = async () => {

    await connectDB();
    
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
};


startServer();
