//this middleware will accept the req of the route, and 
//check to see if req.session.loggedIn is a truty value 
//before allowing the route to execute the next callback function. 
//Otherwise, the user will be redirected to the login page. 

const withAuth = async (req, res) => {

    if (!req.session.loggedIn){
        res.redirect('/login');
    } else {
        next();
    };
}

module.exports = withAuth;