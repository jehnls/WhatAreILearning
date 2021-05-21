const EventEmitter = require('events');

const myEE = new EventEmitter();


myEE.on("Enter", (eventoDoUsuario)=>{
  console.log(`O usuario selecionou a tecla: ${eventoDoUsuario}`)
})

myEE.on("Shift", (eventoDoUsuario)=>{
  console.log(`O usuario selecionou a tecla: ${eventoDoUsuario}`)
})


myEE.emit("Shift", "Shift"); 
myEE.emit("Enter", "Enter");

/* 
#EventEmitter
- Hoje apreni que é possível manipuar evendo com EventEmitter.

- [ EE.on] :  Com a função .on é possível montar o tipo de evento que deseja
fazer, passando como parametro o nome do evento e uma callback
para executar algo.

- [ EE.emit] : Aprendi que com a função .emit, é possível chamar essa função, 
com assinatura no parâmetro, (<o nome de evento>, <e o dado que deseja passa 
para o callback>)

Obs: Exite mais funções para brincar com EventEmitter, tenho que estudar mais lá na documentação 

*/