const router = require('express').Router();
const { User } = require('../../models/User');

//POST: api/user
router.post('/', async (req, res)=>{
    try{
        const userData = await User.create(req.body);

        req.session.save(()=>{
            req.session.user_id = userData.

        })
    } catch (err) {
        res.status(500).json(err);
    }
});

//POST: api/user/login
router.post('/login', async (req, res)=>{
    try{
        const userData = await User.findOne({where: {email: req.body.email}});

        const isValid = await userData.checkPassword(req.body.password);

        if (isValid){
            
        }
    } catch (err) {
        res.status(500).json(err);
    }
});
//POST: api/user/logout
router.post('/logout', async (req, res)=>{
    try{

    } catch (err) {
        res.status(500).json(err);
    }
});