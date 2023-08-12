const router = require('express').Router();
const { User } = require('../../models/User');
const withAuth = require('../../utils/auth');

//POST: api/user
router.post('/', withAuth, async (req, res)=>{
    
    try   {
        const userData = await User.create(req.body);

        const users = userData.map(user => user.get({ plain: true}))

        req.session.save(()=>{
            req.session.user_id = userData.id;
            req.session.logged_in = true;
        })

       res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err)
    }
  
});

//POST: api/user/login
router.post('/login', async (req, res)=>{
    try {
        const userData = await User.findOne({where: {username: req.body.username}});

        const passIsValid = await userData.checkPassword(req.body.password);

        if (passIsValid){

            req.session.save(()=> {
                req.session.user_id = userData.id;
                req.session.logged_in = true;
            })

           
        }

        document.location.replace('/homepage')
    } catch (err) {
        res.status(500).json(err);
    }
});

//POST: api/user/logout
router.post('/logout', async (req, res)=>{
    try {
        if (!req.session.logged_in){
            document.location.replace('/landingpage');
        }
    } catch (err) {
        res.status(500).json(err);
    }
});