import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { dbConnection } from './src/data/db.connection.js';
import HttpText from './src/utils/HttpText.js';
import { driverRouter } from './src/modules/driver/driver.route.js';
import { routeRouter } from './src/modules/route/route.route.js';
import { startScheduleStatusJob } from './src/jobs/scheduleStatusJob.js';

const app = express();
const port = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json());

app.use('/api/drivers', driverRouter);
app.use('/api/routes', routeRouter);

dbConnection.then(() => startScheduleStatusJob());

app.use((req, res, next) => {
    res.status(404).json({
        status: HttpText.ERROR,
        message: 'Route Is Not Found'
    })
});

app.use((error, req, res, next) => {
    res.status(error.statusCode || 500).json({
        status: error.statusText || HttpText.ERROR,
        message: error.message,
        data: null
    })
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));