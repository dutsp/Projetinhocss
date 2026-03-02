// tive que adicionar essa função pra manter a funcionalidade do codigo - dev1

function segredo() {
    let bernardo = document.getElementById("corpo");
    const cores = [
        "red",
        "green",
        "blue",
        "purple",
        "black",
        "white",
        "cyan",
        "yellow"
    ];

    let index = 0;

    setInterval(() => {
        bernardo.style.backgroundColor = cores[index];
        index++;

        if (index >= cores.length) {
            index = 0; 
        }

    }, 1000);
}