import axios from 'axios';


// Make a request for a user with a given ID
axios.get(`/products/list_products/${id.value}`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

axios.post('/products/new_products', (req)=>{
    const prodct = req.boddy;
    data: JSON.stringify({
         prodct
    })
}).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
 
 

axios.put(`/products/changes_prod/${id.value}`, (req) =>{
  const prodct = req.body;
    data: JSON.stringify({
        prodct
    })
}).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
 
 


axios.get(`/products/delete/${id.value}`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });