const accountSid = 'AC747e92a6b88168a460bfeb4da7abde15';
const authToken = '66da0abb21fcf0aaf3d3aabff0e14f5a';

const twilio = require('twilio')
const client = twilio(accountSid, authToken);

client.messages.create({
      body: 'Hola soy un SMS desde Node.js!',
      from: '+13312416165',
      to: '+573045803900'
      
})
.then(message => console.log(message.sid))
.catch(console.log)