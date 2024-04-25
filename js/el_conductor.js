document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logout-btn');
    const userList = document.getElementById('user-list');
    const totalAmountElement = document.getElementById('total-amount');

    
    const usersData = [
        { nombre: 'Usuario 1', abordajes: 10, montoTotal: 100 },
        { nombre: 'Usuario 2', abordajes: 8, montoTotal: 80 },
        { nombre: 'Usuario 3', abordajes: 5, montoTotal: 50 },
    ];

   
    const totalAmount = usersData.reduce((total, user) => total + user.montoTotal, 0);
    totalAmountElement.textContent = totalAmount + ' soles';

    
    const sortedUsers = usersData.sort((a, b) => b.abordajes - a.abordajes);

    
    sortedUsers.forEach(function(user) {
        const li = document.createElement('li');
        li.textContent = `${user.nombre} - Abordajes: ${user.abordajes}, Monto total: ${user.montoTotal} soles`;
        userList.appendChild(li);
    });

  
    logoutBtn.addEventListener('click', function() {
    
        localStorage.removeItem('isLoggedIn');
      
        localStorage.removeItem('isDriver');
      
        window.location.href = 'login.html';
    });
});