

const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()

const url = 'https://www.coches.net/land-rover-range-rover-sport-36-tdv8-272-cv-hse-5p-diesel-2009-en-cordoba-52097826-covo.aspx'


axios(url)
    .then(response => {
        const html = response.data;
        console.log(html);

    })


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));