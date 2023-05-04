import express from 'express';
import dotenv from 'dotenv'

import Connection from './database/db.js';
import DefaultData from './default.js';

const app = express();

dotenv.config();

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);       

// express server is created by using listen function... 2arguments...port number and a callback function()....callback function is run just after sserver starts
app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));

DefaultData();