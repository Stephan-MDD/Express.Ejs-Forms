// libraries
import express from 'express';
import path from 'path';

// routes
import views from './routes/views';

// environments variables -> .env
const port: number = 4000;
const app: express.Application = express();

// ejs configuration
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware for json parsing
app.use(express.json());

// route configuration
app.use('/', views);

// initiating server
app.listen(port, () => console.log(`Server running @ http://localhost:${port}`));
