export const globalConfig = {
    service: {
        port: parseInt(process.env.SERVICE_PORT)
    },
    mongodb: {
        username: process.env.MONGO_USER,
        password: process.env.MONGO_PASSWORD,
        host: process.env.MONGO_HOST,
        database: process.env.MONGO_DATABASE
    }
}