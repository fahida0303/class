import { query } from 'express';
import process from 'process';
const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

function calculo(randomCountNambers){
    const sum = {};
    for(let i = 0; i < randomCountNambers; i++){
        const numRandom = random(1,1000);
        if(sum[numRandom]){
            sum[numRandom] = sum[numRandom] + 1;
        }
        else{
            sum[numRandom] = 1;
        }
    }
    return sum;
}

process.on('message', (query) => {
    const objetoQuery = JSON.parse(query);
    const { cant } = objetoQuery;

    if(!+cant){
        const randomNumbers = calculo(100000000)
        process.send(JSON.stringify(randomNumbers))
        console.log("no se ingreso");
    }
    else{
        const randomNumbers = calculo(cant)
        process.send(JSON.stringify(randomNumbers));
        console.log('se ingreso corecctamente');
    }
})

