module.exports = function(app){
    app.get("/posts", (req, res) => {
        res.json({ "status": "success" })
    })
}