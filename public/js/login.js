async function signUpFormHandler (e) {
    e.preventDefault();

    const username = document.querySelector('.sign-up-name').value.trim();
    const email = document.querySelector('.sign-up-email').value.trim();
    const password = document.querySelector('.sign-up-password').value.trim();

    if (username && email && password) {

        const response = fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({username, email, password}),
            headers: {'Content-Type': 'application/json'} 
        })

        if (response.ok) {
            //new account has been created
            // document.location.href()
        } else {
            //refresh the page
        }
    }
}

async function logInFormHandler (event) {
    
    const username = document.querySelector(".log-in-username").value.trim();
    const password = document.querySelector(".log-in-password").value.trim();

    if (username && password) {
        
        const response = fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: { "Content-Type": "application/json"}
        })

        if (response.ok){
            //User is logged in
        } else {
            //refresh the page
        }

        

    }
}

document
    .querySelector(".log-in-form")
    .addEventListener("submit", logInFormHandler);

document
    .querySelector(".sign-up-form")
    .addEventListener("submit", signUpFormHandler)