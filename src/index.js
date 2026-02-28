/*let criaHeroi = {
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
    */

class criaHeroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
}

    atacar() {
        let ataque
        switch (this.tipo) {
            case "mago":
                ataque = "magia"
                break

            case "guerreiro":
                ataque = "espada"
                break

            case "monge":
                ataque = "artes marciais"
                break

            case "ninja":
                ataque = "shuriken"
                break
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }
}

let heroi = new criaHeroi("Pedro",39,"guerreiro")
heroi.atacar()