async function Operaciones(a:number, b:number){
    return Promise.resolve(a+b).then(() => undefined)
}


