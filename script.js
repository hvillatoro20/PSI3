/* script.js */
document.addEventListener("DOMContentLoaded", function () {
    // Generar preguntas dinámicamente
    const preguntas = [
        "¿Te sientes triste o vacío la mayor parte del tiempo?",
        "¿Has perdido interés en actividades que antes disfrutabas?",
        "¿Tienes dificultades para dormir o duermes demasiado?",
        "¿Te sientes fatigado o sin energía frecuentemente?",
        "¿Tienes dificultades para concentrarte o tomar decisiones?",
        "¿Sientes desesperanza sobre el futuro?",
        "¿Has experimentado cambios en el apetito o peso sin razón aparente?",
        "¿Te sientes inquieto o más lento de lo normal?",
        "¿Te sientes inútil o con culpa excesiva?",
        "¿Has tenido pensamientos de autolesión o suicidio?"
    ];

    const contenedorPreguntas = document.getElementById("preguntas");
    preguntas.forEach((pregunta, index) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <p>${pregunta}</p>
            <label><input type="radio" name="q${index}" value="0"> Nunca</label>
            <label><input type="radio" name="q${index}" value="1"> A veces</label>
            <label><input type="radio" name="q${index}" value="2"> Frecuentemente</label>
            <label><input type="radio" name="q${index}" value="3"> Siempre</label>
        `;
        contenedorPreguntas.appendChild(div);
    });

    document.getElementById("formEvaluacion").addEventListener("submit", function (event) {
        event.preventDefault();
        let puntaje = 0;
        preguntas.forEach((_, index) => {
            const respuesta = document.querySelector(`input[name="q${index}"]:checked`);
            if (respuesta) puntaje += parseInt(respuesta.value);
        });

        let resultado = "";
        if (puntaje < 10) {
            resultado = "No presentas signos de depresión significativa.";
        } else if (puntaje < 20) {
            resultado = "Podrías estar experimentando una depresión leve.";
        } else if (puntaje < 30) {
            resultado = "Podrías estar experimentando una depresión moderada.";
        } else {
            resultado = "Podrías estar experimentando una depresión severa. Se recomienda buscar ayuda profesional.";
        }

        document.getElementById("resultado").innerHTML = `<p>${resultado}</p>`;
    });

    document.getElementById("formContacto").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Formulario enviado correctamente.");
    });
});
