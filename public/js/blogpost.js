//get specific blogpost
//get all comments for that blogpost

if (req.session.logged_in) {

    const blogpostData = fetch('/api/blogpost/:id', {
        method: 'GET',
        
    })



}