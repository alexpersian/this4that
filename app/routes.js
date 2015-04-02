/**
 * Created by alexpersian on 3/16/15.
 */

// app/routes.js

// grab the nerd model
var Post = require('./models/post');

module.exports = function(app, express) {

    /**
     * server routers
     * handles things like api calls
     * or authentication routes
     */

    /**
     * Posts
     */
    /** debug functionality **/
    app.use(function(req, res, next) {
        console.log('API accessed...');
        next();
    });

    /** get all posts in database **/
    app.get('/api/posts', function(req, res) {
        // use mongoose to get all nerds in the database
        Post.find(function(err, posts) {
            // if there is an error retrieving, send the error
            // nothing after res.send(err) will execute if there is one
            if (err) {
                res.send(err);
            }
            res.json(posts);
        });
    });

    /** add a new post with parameters **/
    app.post('/api/posts', function(req, res) {
        var post = new Post();
        post.type = req.body.type;
        post.name = req.body.name;
        post.desc = req.body.desc;
        post.img = req.body.img;
        post.qty = req.body.qty;
        post.time = new Date();

        post.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Post created!' });
        });
    });

    /** get a specific post by id **/
    app.get('/api/posts/:post_id', function(req, res) {
        Post.findById(req.params.post_id, function(err, post) {
            if (err) {
                res.send(err);
            }
            res.json(post);
        });
    });

    /** update a post **/
    app.put('/api/posts/:post_id', function(req, res) {
        Post.findById(req.params.post_id, function(err, post) {
            if (err) {
                res.send(err);
            }
            post.name = req.body.name;

            post.save(function(err) {
                if (err) {
                    res.send(err);
                }
                res.json({ message: "Post updated!" });
            });
        });
    });

    /** delete a single post **/
    app.delete('/api/posts/:post_id', function(req, res) {
        Post.remove({
            _id: req.params.post_id
        }, function(err, post) {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Post deleted!" });
        });
    });
};