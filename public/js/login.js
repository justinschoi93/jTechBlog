async function signUpFormHandler (e) {
    e.preventDefault();
    console.log('click')
    const username = document.querySelector('.sign-up-name').value.trim();
    const email = document.querySelector('.sign-up-email').value.trim();
    const password = document.querySelector('.sign-up-password').value.trim();

    if (username && email && password) {

        console.log('fetch made');

        const response = fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({username: username, email: email, password: password}),
            headers: {'Content-Type': 'application/json'} 
        })

        console.log('fetch completed')
        console.log(response.ok)
        
    };
}

async function logInFormHandler (event) {
    event.preventDefault();
    
    const username = await document.querySelector(".log-in-username").value.trim();
    const password = await document.querySelector(".log-in-password").value.trim();
    
    if (username && password) {
    
        
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({username: username, password: password}),
            headers: { "Content-Type": "application/json"}
        });

        console.log('fetch request made')
       
        if (response.ok){
            console.log('Log in successful!');
      
        } else {
          
        }

    }
}

document.querySelector(".log-in-form").addEventListener("submit", logInFormHandler);
document.querySelector(".sign-up-form").addEventListener("submit", signUpFormHandler)