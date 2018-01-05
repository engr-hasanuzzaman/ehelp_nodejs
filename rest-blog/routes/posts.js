const _ = require("lodash")

module.exports = function(app, store){
    // fetch all posts from server
    app.get("/posts", (req, res) => {
        res.json(store.posts)
    })

    // fetch single post useing provide id
    app.get("/posts/:postId", (req, res) => {
        let post = store.posts[req.params.postId]
        res.json(post)
    })

    // create new post
    app.post("/posts", (req, res) => {
        let post = {
            name: req.body.name,
            url: req.body.url,
            text: req.body.text
        }
        store.posts.push(post)
        res.json({ status: "success", msg: "Successfully post created" })
    })

    // updated single post
    app.put("/posts/:postId", (req, res) => {
        let update_post = {
            name: req.body.name,
            url: req.body.url,
            text: req.body.text
        }
        let post = store.posts[req.params.postId]
        
        Object.assign(post, _.pickBy(update_post))
        res.sendStatus(204)
    })

    // deleteing post
    app.delete("/posts/:postId", (req, res) => {
        store.posts.splice(req.params.postId, 1)
        res.sendStatus(204)
    })
}