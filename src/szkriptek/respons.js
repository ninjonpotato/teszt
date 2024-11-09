document.getElementById('reg').onsubmit = async (e) => {
    e.preventDefault(); 
    const nev = document.getElementById('nev').value;
    const pass = document.getElementById('pass').value;
    const lakc = document.getElementById('lakcim').value;
    const email = document.getElementById('email').value;

    try {
        const response = await fetch('https://powerful-waters-84392-60d0172db300.herokuapp.com/regisztracio', { // Heroku API endpoint.
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nev ,pass,lakc,email }) //Elküldjük POST-al az input mezők értékeit
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.text();
        alert(result)// Válasz megjelenítése, tesztelés céljából.
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};
