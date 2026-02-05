let amigo = {nome: 'Felipe', sexo: 'M', peso: 95.6, engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg.`)