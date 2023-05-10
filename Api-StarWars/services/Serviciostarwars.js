export async function traerPersonajes() {
    const URL = `https://swapi.dev/api/people/`;
    const pedir = { method: "GET" };
    const respuesta = await fetch(URL, pedir);
    const respuestaJSON = await respuesta.json();
    console.log(respuestaJSON);
    return respuestaJSON;
}

export async function traerPeliculas() {
    const URL = `https://swapi.dev/api/films/`;
    const pedir = { method: "GET" };
    const respuesta = await fetch(URL, pedir);
    const respuestaJSON = await respuesta.json();
    console.log(respuestaJSON);
    return respuestaJSON;
}
