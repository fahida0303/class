const  faker  = require('faker');


faker.locale = "es";

exports.get = ()=>({
nombre:faker.name.title(),   
producto:faker.commerce.productName(),
precio:faker.commerce.price(),
imagen:faker.random.image()


})