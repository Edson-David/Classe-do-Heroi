class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    attack() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'um ataque desconhecido muito poderoso';
                break;
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

let hero = new Hero("Edson", 23, "mago")
hero.attack()

let hero1 = new Hero("Edson", 23, "guerreiro")
hero1.attack()

let hero2 = new Hero("Edson", 23, "monge")
hero2.attack()

let hero3 = new Hero("Edson", 23, "ninja")
hero3.attack()

let hero4 = new Hero("Edson", 23, "deus")
hero4.attack()