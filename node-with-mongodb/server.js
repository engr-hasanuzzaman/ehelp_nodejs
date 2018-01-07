const MongoClient = require("mongodb").MongoClient
const assert = require("assert")

// connection url
const url = "mongodb://localhost:27017"

// Database name
const dbName = "todo_app"

MongoClient.connect(url, (error, client) => {
    assert.equal(null, error)
    console.log("connect successfully to server")

    const db = client.db(dbName)
    insert(db, (result) => {
        console.log("insertion in db has been completed")
    })

    fetch(db, (result) => {
        client.close()
    })
    
})

const insert = function(db, callback){
    const collectionName= "todos"
    const todo = {
        title: "Have to cook curry",
        priority: 2
    }

    const collection = db.collection(collectionName)
    collection.insert(todo, (error, result) => {
        assert.equal(error, null)
        assert.equal(1, result.result.n)
        assert.equal(1, result.ops.length)
        console.log("todo inser successful")
        callback(result)
    })
}

const fetch = function(db, callback){
    const collection = db.collection("todos")
    collection.find({}).toArray((error, todos) =>{
        assert.equal(null, error)
        console.log("fetchign todos are ", todos)
        
        callback(todos)
    })
}