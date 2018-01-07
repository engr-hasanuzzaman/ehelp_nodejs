const MongoClient = require("mongodb").MongoClient
const assert = require("assert")

// connection url
const url = "mongodb://localhost:27017"

// Database name
const dbName = "todos"

MongoClient.connect(url, (error, client) => {
    assert.equal(null, error)
    console.log("connect successfully to server")

    const db = client.db(dbName)

    client.close()
})