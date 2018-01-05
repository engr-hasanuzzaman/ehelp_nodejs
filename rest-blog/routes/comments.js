const _ = require("lodash")

module.exports = function(app, store){
    // fetch all comments under post
    app.get("/posts/:postId/comments", (req, res) => {
        let post = store.posts[req.params.postId]
        res.json(post.comments)
    })

    // fetch comment by passing id under post
    app.get("/posts/:postId/comments/:commentId", (req, res) => {
        let post = store.posts[req.params.postId]
        res.json(post.comments[req.params.commentId])
    })

    // fetch all post under post
    app.post("/posts/:postId/comments", (req, res) => {
        let post = store.posts[req.params.postId]
        let comment = {
            text: req.body.text
        }
        post.comments.push(comment)
        res.sendStatus(201)
    })

    // fetch all post under post
    app.put("/posts/:postId/comments/:commentId", (req, res) => {
        let post = store.posts[req.params.postId]
        let comment = { text: req.body.text }
        Object.assign(post.comments[req.params.commentId], _.pickBy(comment))
        res.sendStatus(204)
    })


    // fetch all post under post
    app.delete("/posts/:postId/comments/:commentId", (req, res) => {
        let post = store.posts[req.params.postId]
        post.comments.splice(req.params.commentId, 1)
        res.sendStatus(204)
    })
}