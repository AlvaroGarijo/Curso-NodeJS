let infoCurso = {
    "titulo" : "Aprende Node.js y JavaScript",
    "numVistas" : 34555,
    "numLikes" : 9244,
    "temas" : [
        "Node.js",
        "JavaScript"
    ],
    "esPublico":true
}


// Objeto -> String
// Cadena de caracteres en formato JSON

let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);


//String -> Objeto
// Objeto de JavaScript
let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);

console.log(infoCursoObjeto.titulo, infoCursoObjeto.temas);