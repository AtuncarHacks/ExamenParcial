document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logout-btn');
    const tripsList = document.getElementById('trips-list');
    const viewAllBtn = document.getElementById('view-all-btn');

   
    logoutBtn.addEventListener('click', function() {
        
        localStorage.removeItem('isLoggedIn');
       
        window.location.href = 'login.html';
    });

   
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (!isLoggedIn) {
    
        window.location.href = 'login.html';
    } else {
        
        const trips = [
            { duracion: '1 hora', fecha: '2024-04-23', origen: 'Lima', destino: 'Cusco', conductor: 'Conductor 1' },
            { duracion: '45 minutos', fecha: '2024-04-22', origen: 'Arequipa', destino: 'Trujillo', conductor: 'Conductor 2' },
            { duracion: '2 horas', fecha: '2024-04-21', origen: 'Piura', destino: 'Iquitos', conductor: 'Conductor 3' },            
            { duracion: '1 hora', fecha: '2024-04-23', origen: 'Lima', destino: 'Cusco', conductor: 'Conductor 1' },
            { duracion: '45 minutos', fecha: '2024-04-22', origen: 'Arequipa', destino: 'Trujillo', conductor: 'Conductor 2' },
            { duracion: '2 horas', fecha: '2024-04-21', origen: 'Piura', destino: 'Iquitos', conductor: 'Conductor 3' },
            { duracion: '1.5 horas', fecha: '2024-04-20', origen: 'Chiclayo', destino: 'Tacna', conductor: 'Conductor 4' },
            { duracion: '3 horas', fecha: '2024-04-19', origen: 'Huancayo', destino: 'Puno', conductor: 'Conductor 5' },
            { duracion: '2.5 horas', fecha: '2024-04-18', origen: 'Ica', destino: 'Tarapoto', conductor: 'Conductor 6' },
            { duracion: '2 horas', fecha: '2024-04-17', origen: 'Cajamarca', destino: 'Chimbote', conductor: 'Conductor 7' }
            
        ];

       
        function showTrips(tripsArray) {
          
            tripsList.innerHTML = '';

           
            tripsArray.forEach(function(trip) {
                const li = document.createElement('li');
                li.textContent = `${trip.fecha} - ${trip.origen} a ${trip.destino}, ${trip.duracion}, Conductor: ${trip.conductor}`;
                tripsList.appendChild(li);
            });
        }

      
        const last4Trips = trips.slice(Math.max(trips.length - 4, 0));
        showTrips(last4Trips);

        viewAllBtn.addEventListener('click', function() {
            
            showTrips(trips);
        });
    }
});