
const queryString = require('query-string');
const parsed = queryString.parse(location.search);

let p =1;
if (parsed.p){
    p = parsed.p;
}



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


const back = document.createElement('a');
back.href = `index.html?p=${(p - 1)}`;
back.innerText = 'Previous Page' + " ";

const forward = document.createElement('a');
forward.href = `index.html?p=${(parseInt(p) + 1)}`;
forward.innerText = 'Next Page';

const d = document.getElementById('states');
d.append(back,forward);