require('dotenv').config()

module.exports = {
    "development": {
        "username": process.env.username,
        "password": process.env.password,
        "database": process.env.database,
        "host": process.env.host,
        "port": process.env.port,
        "dialect": "mysql",
        "pool": {
            "max":     5,
            "min":     0,
            "acquire": 30000,
            "idle":    10000
        }
    },
    "production": {
        "username": process.env.username,
        "password": process.env.password,
        "database": process.env.database,
        "host": process.env.host,
        "logging": false,
        "dialect": "mysql",
        "pool": {
            "max":     5,
            "min":     0,
            "acquire": 30000,
            "idle":    10000
        }
    },

}