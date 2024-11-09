 function kuldes() {

    const formData = new FormData(this);  // Összegyűjti a form adatokat

    // AJAX POST kérés küldése
    fetch('https://frozen-forest-93816-b483a1d3b2e2.herokuapp.com/regisztracio', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())  // A válasz szövegként történő kezelése
    .then(data => {
        // Válasz megjelenítése a felhasználónak
        document.getElementById('container').textContent = data;
    })
    .catch(error => {
        console.error('Hiba történt:', error);
        document.getElementById('response').textContent = 'Hiba történt a regisztráció során.';
    });
}

