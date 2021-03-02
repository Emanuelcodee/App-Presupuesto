//ARREGLOS DE INGRESOS & EGRESOS
const ingresos = [
    new Ingreso ('Salario', 2000),
    new Ingreso ('Venta coche', 1500),
];

const egresos = [
    new Egreso ('Renta Departamento', 900),
    new Egreso ('Comida', 4000)
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

let cargarCabecero = ()=> {
    let presupuestoTotal = totalIngresos() - totalIngresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    document.getElementById('presupuesto').innerHTML = presupuestoTotal;
    document.getElementById('porcentaje').innerHTML = porcentajeEgreso;
    document.getElementById('ingresos').innerHTML = totalIngresos();
    document.getElementById('egresos').innerHTML = totalEngresos();
}
