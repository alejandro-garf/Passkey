class DB {
    constructor() {
        this.Sequelize = require('sequelize')
    }

    init() {
        const dbName = process.env.PGDATABASE
        const dbUsername = process.env.PGUSER
        const dbPassword = process.env.PGPASSWORD
        const dbHost = process.env.PGHOST
        const dbPort = process.env.PGPORT
    }
}

module.exports = new Db().init()