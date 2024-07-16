import express, { Application } from 'express';
import routes from '../routes/auth';
const app:Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/auth', routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});