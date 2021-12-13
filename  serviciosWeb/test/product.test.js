const axios = require('axios');
const assert = require('assert');
const { isTypeSystemDefinitionNode } = require('graphql');


const URL = 'http://localhost:4000';
const productId = null;
describe('corriendo tes de productos', ()=>{
    it.skip('get deberia retornar todos los  productos  existe', async ()=>{
        const response = await axios.get(`${URL}/products/list_products`)

        assert.deepEqual(response.status, 200);
        assert.deepEqual(Array.isArray(response.data), true);
    });
});


describe('corriendo tes de productos', ()=>{
    it('post guardamos los nuevos productos', async ()=>{
        const response = await axios.post(`${URL}/products/new_products`, {
            producto: "libro",
            stock: 24,
            categoria: "er"
        });

        assert.deepEqual(response.status, 200);
        assert.deepEqual(Number.isInteger(response.data.id), true);
        assert.deepEqual(response.data.producto, "libro");
        assert.deepEqual(response.data.stock, 24);
        assert.deepEqual(response.data.categoria, "er");

    });
});

describe('corriendo tes de productos', ()=>{
    it('put de productos', async ()=>{
        const response = await axios.put(`${URL}/products/changes_prod/${productId}`, {
            id: productId,
            producto: "puerta",
            stock: 14,
            categoria: "er"
        })

        assert.deepEqual(response.status, 200);
        assert.deepEqual(response.data.id, productId);
        assert.deepEqual(response.data.producto, "puerta");
        assert.deepEqual(response.data.stock, 14);
        assert.deepEqual(response.data.categoria, "er");

    });
});

describe('corriendo tes de productos', ()=>{
    it('put de productos', async ()=>{
        const response = await axios.borar(`${URL}/products/delete/${productId}`)

        assert.deepEqual(response.status, 200);
        assert.deepEqual(response.data.id, productId);

    });
});