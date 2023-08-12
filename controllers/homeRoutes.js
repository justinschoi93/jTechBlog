const router = require('express').Router();
const { Comment, User, Blogpost } = require('../models');



router.get('/', async (req, res) => {
    try {

        const blogPostData = await Blogpost.findAll({
            include: [
                {model: Comment}
            ]
        })

        const blogPosts = blogPostData.map((blogPost) => {
            blogPost.get({plain: true})
        })

        res.render( 'homepage', { blogPosts: blogPosts })

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


})

module.exports = router;