let criaHeroi = {
    nome: "Pedro",
    idade: 39,
    tipo: {
        0: ["guerreiro","espada"],
        1: ["mago","magia"],
        2: ["monge","artes marciais"], 
        3: ["ninja","shuriken"],
        }
    }
criacaoPersonagem(criaHeroi)

function criacaoPersonagem (criaHeroi) {
        for(let index in criaHeroi.tipo) {
        let [tipoClasse,armaUsada] = criaHeroi.tipo[index]
        console.log(`"O" ${tipoClasse} "atacou usando" ${armaUsada}`)
    }
}