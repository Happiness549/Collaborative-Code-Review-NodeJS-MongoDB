import express from 'express'
import { connectDB } from './config/db'
import userRoutes from './routes/userRoutes'

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;



const startServer = async () => {

    await connectDB();
    app.use("/api/users", userRoutes);
    
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
};


startServer();
