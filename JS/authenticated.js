const logout = document.getElementById('Logout')
const token = localStorage.getItem('auth_key')

if(!token){
    window.location.replace('index.html')
}

logout.addEventListener('click', ()=>{
    localStorage.removeItem('auth_key')
    window.location.replace('index.html')
})
