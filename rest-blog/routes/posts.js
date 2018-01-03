module.exports = function(app, store){
    app.get("/posts", (req, res) => {
        res.json(store.posts)
    })
}