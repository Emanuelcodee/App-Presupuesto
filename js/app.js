//ARREGLOS DE INGRESOS & EGRESOS
const ingresos = [
    new Ingreso ('Salario', 2000),
    new Ingreso ('Venta coche', 1500)
];

const egresos = [
    new Egreso ('Renta Departamento', 900),
    new Egreso ('Comida', 400)
];


let cargarApp = ()=> {
    cargarCabecero();
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
    return valor.toLocaleString('en-US', {style: 'currency', currency:'USD', minimumFractionDigits:2});
}

//FORMATO DE PORCENTAJE
const formatoPorcentaje = (valor)=> {
    return valor.toLocaleString('en-US', {style:'percent', minimumFractionDigits:2});
}
