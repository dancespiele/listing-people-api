import { PyriteServer } from 'pyrite-server';
import * as mongoose from 'mongoose';
import { globalConfig } from './config';

const server: PyriteServer = new PyriteServer({
    port: globalConfig.service.port,
    routes: "/routes",
    cors: ['http://localhost:3000']
});
  
  
mongoose.connect(`mongodb://${globalConfig.mongodb.username}:${globalConfig.mongodb.password}@${globalConfig.mongodb.host}/${globalConfig.mongodb.database}`)
.then(() => {
  server.listen(() => {
    console.log(`Server running in port ${globalConfig.service.port}!`);
  });
});