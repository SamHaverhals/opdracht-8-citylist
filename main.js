const p = ;
const startpoint = ((p - 1) * 30) + 1;
const a = ("https://backendcities.herokuapp.com/?cuid=hajIUIksk983LLP11112220&start=${startpoint}&size=30");
fetch(a)

    .then(response => response.json())
    .then(data => {
        console.log(data);

        for (const d of data) {
            console.log(d.name);

            const e = document.createElement("div");
            e.innerHTML = d.name;
            document.body.appendChild(e);
        }
    });