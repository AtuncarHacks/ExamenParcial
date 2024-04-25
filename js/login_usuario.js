document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const logoutBtn = document.getElementById('logout-btn');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const userType = document.getElementById('user-type').value;

        if (username === 'usuario' && password === '123') {
          
            localStorage.setItem('isLoggedIn', true);
            if (userType === 'conductor') {
               
                localStorage.setItem('isDriver', true);
               
                window.location.href = 'dashboardconductor.html';
            } else {
                
                window.location.href = 'dashboard.html';
            }
        } else {
            alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
    });

    
    logoutBtn.addEventListener('click', function() {
      
        localStorage.removeItem('isLoggedIn');
      
        localStorage.removeItem('isDriver');
     
        logoutBtn.style.display = 'none';
       
        window.location.href = 'login.html';
    });

});