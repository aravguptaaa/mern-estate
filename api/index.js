import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();
mongoose.connect(process.env.MONGO).then(
    () =>{
        console.log('Database is connected');
    }
)
.catch(
    (err) => {
        console.log('Database not connected');
    }
);

const app = express();
const port = 3001;

app.listen(port ,() => {
    console.log(` Server is running on the port number ${port}` );
}
);
