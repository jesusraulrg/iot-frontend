document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://iot-backend-restapi-458a9520ec9a.herokuapp.com/devices';
    const tbody = document.getElementById('tbody_devices');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(device => {
                const row = document.createElement('tr');
                row.className = 'table-secondary';
                row.innerHTML = `<td>${device.id}</td><td>${device.device_name}</td><td>${device.value}</td>`;
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
});
