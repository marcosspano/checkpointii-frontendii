let valorUrl = document.getElementById('input_url').value = "https://jsonplaceholder.typicode.com/todos/";

let btnUrl = document.getElementById('btn_url');

let jsonContent = document.getElementById('json');

btnUrl.addEventListener('click', () => {
    fetch(valorUrl)
    .then(t => t.json())
    .then(t => {
        for (campo in t) {
            if (t[campo].completed) {
                jsonContent.insertAdjacentHTML('beforeend',
                    `<div class=cardContent>
                        <p><strong>${Object.keys(t[campo])[1]}:</strong> ${t[campo].id}</p>
                        <p><strong>${Object.keys(t[campo])[2]}:</strong> ${t[campo].title}</p>
                    </div>`
                )
            } else {
                jsonContent.insertAdjacentHTML('beforeend',
                    `<div class=cardContent>
                        <p><strong>${Object.keys(t[campo])[1]}:</strong> <s>${t[campo].id}</s></p>
                        <p><strong>${Object.keys(t[campo])[2]}:</strong> <s>${t[campo].title}</s></p>
                    </div>`
                )
            }
        }
    })
    .catch(erro => alert(erro, "Ops! Algo deu errado.. tente novamente."))
});



