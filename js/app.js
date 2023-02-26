// VARIABLES OPCIONES
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const precioMin = document.querySelector('#minimo')
const precioMax = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')


const max = new Date().getFullYear();
const min = max - 10;


const datosBusqueda = {
    marca: '',
    year: '',
    precioMin: '',
    precioMax: '',
    puertas: '',
    transmision: '',
    color: ''
}

// VARIABLES TABLA RESULTADO
const resultado = document.querySelector('#resultado')

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos)

    // Agregar años
    llenarSelect()
})

marca.addEventListener('change', val => {
    datosBusqueda.marca = val.target.value;
    filtrarAuto();
})

year.addEventListener('change', val => {
    datosBusqueda.year = parseInt(val.target.value);
    filtrarAuto();
})

precioMin.addEventListener('change', val => {
    datosBusqueda.precioMin = val.target.value;
    filtrarAuto();
})

precioMax.addEventListener('change', val => {
    datosBusqueda.precioMax = val.target.value;
    filtrarAuto();
})

puertas.addEventListener('change', val => {
    datosBusqueda.puertas = parseInt(val.target.value);
    filtrarAuto();
})

transmision.addEventListener('change', val => {
    datosBusqueda.transmision = val.target.value;
    filtrarAuto();
})

color.addEventListener('change', val => {
    datosBusqueda.color = val.target.value;
    filtrarAuto();
})


function mostrarAutos(autos){
    limpiarHTML()
    autos.forEach(auto => {
        const autoHTML = document.createElement('P');
        const {marca, modelo, year, precio, puertas, transmision, color} = auto;
        autoHTML.textContent = `
            Marca:${marca} - Modelo:${modelo} - Año:${year} - Precio:${precio} - Puertas:${puertas} - Transmisión:${transmision} - Color:${color}
        `;
        resultado.appendChild(autoHTML)
    });

}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}


function llenarSelect () {
    for(i = max; i >= min; i--){
        const opcion = document.createElement('OPTION')
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}


function filtrarAuto(){

    const resultadoAutos = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarPrecioMin).filter(filtrarPrecioMax).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    if(resultadoAutos.length){
        mostrarAutos(resultadoAutos)
    }else{
        sinResultados()
    }

    console.log(resultadoAutos)
}

function sinResultados(){
    limpiarHTML();
    const mensaje = document.createElement('P');
    mensaje.textContent = 'No se encontraron resultados';
    resultado.appendChild(mensaje);
    console.log("No hay resultados")
}


function filtrarMarca (auto) {
    const { marca } = datosBusqueda;
    if(marca){
        return auto.marca === marca;
    }else{
        return auto;
    }
}

function filtrarYear(auto){
    const { year } = datosBusqueda;
    if(year){
        return auto.year === year;
    }else{
        return auto;
    }
}

function filtrarPrecioMin(auto){
    const { precioMin } = datosBusqueda;
    if(precioMin){
        return auto.precio >= precioMin;
    }else{
        return auto;
    }
}

function filtrarPrecioMax(auto){
    const { precioMax } = datosBusqueda;
    if(precioMax){
        return auto.precio <= precioMax;
    }else{
        return auto;
    }
}

function filtrarPuertas(auto){
    const { puertas } = datosBusqueda;
    if(puertas){
        return auto.puertas === puertas;
    }else{
        return auto;
    }
}

function filtrarTransmision(auto){
    const { transmision } = datosBusqueda;
    if(transmision){
        return auto.transmision === transmision;
    }else{
        return auto;
    }
}

function filtrarColor(auto){
    const { color } = datosBusqueda;
    if(color){
        return auto.color === color;
    }else{
        return auto;
    }
}


