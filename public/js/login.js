async function signUpFormHandler (e) {
    e.preventDefault();

    const username = document.querySelector('.sign-up-name').value.trim();
    const email = document.querySelector('.sign-up-email').value.trim();
    const password = document.querySelector('.sign-up-password').value.trim();

    if (username && email && password) {

        const response = fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({username: username, email: email, password: password}),
            headers: {'Content-Type': 'application/json'} 
        })

        console.log(response.ok);
        if (response.ok){
            console.log('Sign up successful!');
            document.location.replace('/homepage')
        } else {
            document.location.replace('/login')
        }
    }
}

async function logInFormHandler (event) {
    event.preventDefault();
    
    const username = await document.querySelector(".log-in-username").value.trim();
    const password = await document.querySelector(".log-in-password").value.trim();
    
    if (username && password) {
        console.log(username, password);
        // const bodyObject = {username: username, password: password}
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({username: username, password: password}),
            headers: { "Content-Type": "application/json"}
        });

        console.log('fetch request made')
        // console.log(response.ok);
        // if (response.ok){
        //     console.log('Log in successful!');
        //     // document.location.replace('/homepage')
        // } else {
        //     // document.location.replace('/login')
        // }

    }
}

document.querySelector(".log-in-form").addEventListener("submit", logInFormHandler);

document.querySelector(".sign-up-form").addEventListener("submit", signUpFormHandler)