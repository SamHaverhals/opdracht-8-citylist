
const queryString = require('query-string');


const parsed = queryString.parse(location.search);
const p = parsed.page; //page=3
const startpoint = ((p - 1) * 30) + 1;
const url = `https://backendcities.herokuapp.com/?cuid=hajIUIksk983LLP11112220&start=${startpoint}&size=30`;


fetch(url)
    .then(function(response ) { return response.json()})
    .then(data => {
        console.log(data);

        for (const d of data) {
            console.log(d.name);

            const e = document.createElement("div");
            e.innerHTML = d.name;
            document.body.appendChild(e);
        }
    });
