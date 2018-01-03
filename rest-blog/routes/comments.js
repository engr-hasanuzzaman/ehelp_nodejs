module.exports = function(app){
    app.get("/posts/:postId/comments", (req, res) => {
        res.json({success: true })
    })
}