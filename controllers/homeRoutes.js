const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const blogPostData = await Blogpost.findAll({
            include: [
                {model: Comment}
            ]
        })

        const blogPosts = blogPostData.map((blogPost) => {
            blogPosts.get({plain: true})
        })

        res.render('homepage', {
            blogPosts,
            logged_in: req.session.logged_in
        })


    } catch (err) {
        res.status(500).json(err);
    }
})