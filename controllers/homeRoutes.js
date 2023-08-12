const router = require('express').Router();
const { Comment, User, Blogpost } = require('../models');



router.get('/', async (req, res) => {
    try {

        const blogPostData = await Blogpost.findAll({include: {model: Comment}});

        const blogPosts = blogPostData.map((blogPost) => {
           return blogPost.get({plain: true})
        });
        
        console.log(blogPosts);
        res.render('homepage', { blogPosts : blogPosts});
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/blogpost/:id', async (req, res) => {

    const commentData = await Comment.findAll({
        include : {
            where: {
                username : req.params.id
            }
        }
    })
    res.render(`blogpost-details`, { comments : commentData} )
})


router.get('/login', async (req, res) => {
    if (!req.session.logged_in) {
        res.render('login');
    } else {
        res.render('homepage')
    }
})
module.exports = router;