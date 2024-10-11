import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';
import bodyParser from 'body-parser';


dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(session({
    secret: '1234',
    resave: true,
    saveUninitialized: true}));
    
server.use(bodyParser.urlencoded({extended:true}));

server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRoutes);

server.use((req, res)=>{
    res.send('Página não encontrada!');
});

server.listen(process.env.PORT);


