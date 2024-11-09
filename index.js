console.log("üdv az index.jsben");
const express = require('express');
const path = require('path');
const app = express();

// Statikus fájlok szolgáltatása a dist mappából
app.use(express.static('dist'));

// Port beállítása, amit Heroku biztosít
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



/*const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


const cors = require('cors');

const suba = require('@supabase/supabase-js');

const supabaseUrl = "https://tybayhvmngjrfvbdhhis.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5YmF5aHZtbmdqcmZ2YmRoaGlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2NTgzNzAsImV4cCI6MjA0NjIzNDM3MH0.BSg6sOVNl0KlWVzs6hoWm5ytpxCCb6KZomcxSDlLdFE"
const supabase = suba.createClient(supabaseUrl, supabaseKey)

const { Pool } = require('pg');

// SAdatbázisra csatlakozás/ Supabase
const pool = new Pool({
  user: "postgres.tybayhvmngjrfvbdhhis",
  host: "aws-0-eu-central-1.pooler.supabase.com",
  database: "postgres",
  password: "IhGZIcx4b46hfUFh",
  port: 6543
});

module.exports = pool;

app.use(cors());

// Middleware a JSON body kezelésére
app.use(express.json());

// Static files kiszolgálása
app.use(express.static("dist"));

//Adatbázisrül adat lekérés
async function fetchData() {
  try {
    const res = await pool.query('SELECT nev FROM admin');
    nevek = res.rows
   return nevek[0]
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }
}

async function insertUser(name,jelszo, email) {
  try {
     const res = await pool.query(
      'INSERT INTO admin (nev, jelszo,email) VALUES ($1, $2,$3) RETURNING *',
      [name, jelszo, email]
    );
    return res.rows; // Az új beszúrt sor visszaadása
  } catch (err) {
    console.error('Insert error:', err);
    throw err;
  }
}

// Post route a form adatainak kezelésére
app.post('/regisztracio', (req, res) => {
    const { nev,pass,lakc,email } = req.body;
    insertUser(nev,pass,email);
    // Itt kezelheted az adatokat, pl. elmentheted adatbázisba vagy más logikát írhatsz
    //megcsinálni hogy töltsön adatot a Mars adatbázisba
    res.send("siker")
    // Válasz a form benyújtására
});

// Alkalmazás indítása
app.listen(PORT, () => {
  // 
    console.log(`Server is running on http://localhost:${PORT}`);
});*/
