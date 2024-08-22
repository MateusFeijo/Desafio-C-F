// Escrevendo as classes de um jogo
//Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
//nome, idade e tipo
//além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:
//exibir a mensagem: ("o {tipo} atacou usando {ataque}")
//se mago -> no ataque exibir (usou magia)
//se guerreiro -> no ataque exibir (usou espada)
//se monge -> no ataque exibir (usou artes marciais)
//se ninja -> no ataque exibir (usou shuriken)
//Saida esperada. ex: mago atacou usando magia /  guerreiro atacou usando espada
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(ataque) {
        

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
            default:
                ataque = "as mãos"
        }
      console.log(`O ${this.tipo} atacou usando ${ataque}.`)
    }
}

let personagem = new Heroi("Rafaelo", 61, "guerreiro")
personagem.atacar()