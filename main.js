const a = ("https://backendcities.herokuapp.com/?cuid=hajIUIksk983LLP11112220&start=1&size=30")
fetch(a)

    .then(response => response.json())
    .then(data => console.log(data));

function addList(){
    const c = document.createElement("div");
    document.body.appendChild(c);
};
