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
router.post('/login', async (req, res) => {
    console.log('request made!')
    console.log(req.body);
    
    const userData = User.findOne( {where: {username: req.body.username}});
    console.log(userData);

        const passIsValid = await userData.checkPassword(req.body.password);
        console.log(passIsValid);
        if (passIsValid){

            req.session.save(()=> {
                req.session.user_id = userData.id;
                req.session.logged_in = true;
            })

           
        }

        res.status(200).json({ user: userData, message: 'You are now logged in!'})
  
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

module.exports = router;