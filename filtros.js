const botones = document.querySelectorAll(".filtro");
const productos = document.querySelectorAll(".card");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        botones.forEach(b => b.classList.remove("activo"));
        boton.classList.add("activo");

        const categoria = boton.dataset.filtro;

        productos.forEach(producto => {

            if (categoria === "todos") {
                producto.style.display = "block";
            } else {
                if (producto.dataset.categoria === categoria) {
                    producto.style.display = "block";
                } else {
                    producto.style.display = "none";
                }
            }

        });

    });
});