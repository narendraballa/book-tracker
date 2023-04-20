import fs from 'fs'

const options = {
    method : "get",
    url : "https://www.googleapis.com/books/v1/volumes?q=The+Subtle+Art+of+Not+Giving+a+F*ck"
}

let requestValue = false

fetch(options.url)
    .then((response) => {
        return response.json()
    })
    .then((jsonData) => {     
        fs.writeFileSync('logs.json', JSON.stringify(jsonData))
        requestValue = jsonData
    })
    
    console.log(requestValue)