const fs = require("fs");

class Archivo {
    constructor(file) {
        this.file = file;
    }


    

    async guardarAsinc(producto) {
        try {
            const data = await fs.promises.readFile(this.file);
            const json = JSON.parse(data.toString("utf-8"));
            json.push({
                ...producto,
                id: json.length
            });
            try {
                await fs.promises.writeFile(this.file, JSON.stringify(json,null, '\t'))
            } catch (err) {
                throw new Error(err)
            }

        } catch (err) {
            console.log([]);
            try {
                await fs.promises.writeFile(this.file, JSON.stringify([{
                    ...producto,
                    id: 0
                }]))
            } catch (err) {
              //  throw new Error(err);
            }
        }
    }

    guardar(producto) {
        if (this.exist()) {
            fs.promises.readFile(this.file).then(data => {
                const json = JSON.parse(data.toString("utf-8"));
                json.push({
                    ...producto,
                    id: json.length
                });
                fs.promises
                    .writeFile(this.file, JSON.stringify(json,null, '\t'))
                    .then(_ => {
                        console.log('Agregado con exito...');
                    });
            })
        } else {
            fs.promises
                .writeFile(this.file, JSON.stringify([{...producto, id: 0}]))
                .then(data => {
                    console.log('success...');
                });
        }
    }
    exist() {
        return fs.existsSync(this.file);
    }
}

fs.unlinkSync("./18228422.jpg");

let myFile = new Archivo('./producto.json',null, '\t');
myFile.guardarAsinc({
    title: 'Escuadra',                                                                                                                                 
    price: 123.45,                                                                                                                                     
    thumbnail: '/Users/fahidariosdelahoz/Documents/curso/Archivo/18228422.jpg', 
});

