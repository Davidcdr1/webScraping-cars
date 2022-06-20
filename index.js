

const PORT = 8080
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()

 const url = 'https://www.coches.net/land-rover-range-rover-sport-36-tdv8-272-cv-hse-5p-diesel-2009-en-cordoba-52097826-covo.aspx';




axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html)

        const articles = []

        $('.mt-PanelAdInfo', html).each((index, element) =>  { 
            const brand = $(element).children('.mt-PanelAdInfo-title').text()
            const price = $(element).children('.mt-PanelAdInfo-price').text()

            articles.push({
                brand,
                price
            })
        })
        
        console.log(articles)
    
        
      }).catch(err => console.log(err))
    



app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));

