import Knex from "knex"
const dbEnvironment = "development"

const config = require("./knexfile")[dbEnvironment]

export default Knex(config)
