const registered = [{email: 'jondoe@mail.com', password:'123456'}]
const loginForm = document.getElementById('loginForm')
const errorMessage = document.getElementById('error')

loginForm.addEventListener('submit', (ev)=>{
    ev.preventDefault()

    const mail = document.getElementById('email').value
    const pass = document.getElementById('password').value

    const user = registered.find((u)=> u.email === mail)

    if(!user) return errorMessage.textContent = 'Incorrect email or password!'

    if(user.email === mail && user.password === pass){
        localStorage.setItem('auth_key', 'key_123')
        window.location.href = 'authenticated.html'
    }else{
        errorMessage.textContent = 'Incorrect email or password!'
    }
})



