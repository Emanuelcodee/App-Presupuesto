//ARREGLOS DE INGRESOS & EGRESOS
const ingresos = [
    new Ingreso ('Sueldo', 2100.00),
    new Ingreso ('Venta coche', 1500)
];

const egresos = [
    new Egreso ('Renta Departamento', 900),
    new Egreso ('Comida', 400)
];


let cargarApp = ()=> {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

//FUNCION VA ITERANDO EL ARREGLO DE INGRESOS Y SUMANDO EL VALOR DE CADA OBJETO
let totalIngresos = ()=>{
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

//FUNCION VA ITERANDO EL ARREGLO DE EGRESOS Y SUMANDO EL VALOR DE CADA OBJETO
let totalEgresos = ()=> {
    let totalEgreso = 0;
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}


//FUNCION QUE CALCULA EL PRESUPUESTO TOTAL Y EL PORCENTAJE DE EGRESO Y LO ASIGNA MEDIANTE LA PROPEIDAD INNER
let cargarCabecero = ()=> {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

//ESTA FUNCION DA UN FORMATO DE MONEDA EN DOLARES
const formatoMoneda = (valor)=> {
    return valor.toLocaleString('es-ES', {style: 'currency', currency:'EUR', minimumFractionDigits:2});
}

//FORMATO DE PORCENTAJE
const formatoPorcentaje = (valor)=> {
    return valor.toLocaleString('en-US', {style:'percent', minimumFractionDigits:2});
}

//ESTA FUNCION CARGAR LOS INGRESOS AGREGADOS EN LA LISTA
const cargarIngresos = ()=> {
    let ingresosHTML = '';
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

// ESTA FUNCION RECIBE POR PARAMETRO EL INGRESO ITERADO EN EL ARREGLO, Y LE AÑADE LA ESTRUCTURA HTML DE TODO 
//EL INGRESO QUE CONTIENE (DESCRIPCION, VALOR)
const crearIngresoHTML = (ingreso)=>{
    let ingresoHTML = `
        <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn" >
                    <ion-icon name='close-circle-outline' onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;

    return ingresoHTML;
}


//ESTA FUNCION CARGAR LOS ENGRESOS AGREGADOS EN LA LISTA
const cargarEgresos = ()=> {
    let egresosHTML = '';
    for(let egreso of egresos){
        egresosHTML += crearEgresosHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}


// ESTA FUNCION RECIBE POR PARAMETRO EL INGRESO ITERADO EN EL ARREGLO, Y LE AÑADE LA ESTRUCTURA HTML DE TODO 
//EL ENGRESO QUE CONTIENE (DESCRIPCION, VALOR)
const crearEgresosHTML = (egreso) =>{
    let egresoHTML = `
        <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
            <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name='close-circle-outline' onclick='eliminarEgreso(${egreso.id})'></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return egresoHTML;
}

//ESTA FUNCION TRAE COMO PARAMETRO EL ID GENERADO POR ACA INGRESO, SE RECORRE EL ARREGLO MEDIANTE LA FUNCION
//FINDEINDEX() Y COMPARAMOS EL ID PASADO POR PARAMETRO CON EL QUE ESTA ITERANDO, UNA VEZ SEAN IGUALES SE ELIMINA 
//MEDIANTE EL METODO SPLICE Y SE RECARGA EL CABECERO Y LA LISTA
const eliminarIngreso = (id)=> {
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}

const eliminarEgreso = (id)=> {
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
}

//ESTA FUNCION ME PERMITE AGREGAR UN NUEVO EGRESO O INGRESO AL LISTADO 
const agregarDato = ()=> {
    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];

    if(descripcion.value !== '' && valor.value !== ''){
        if(tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarIngresos();
        }else if(tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarEgresos();
        }
    }
}