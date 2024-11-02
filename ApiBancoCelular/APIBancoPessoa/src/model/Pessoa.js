module.exports = class Pessoa{
    #codigo
    #nome
    #idade

    constructor() {
        this.#codigo = -1
        this.#nome = ""
        this.#idade=0
    }

    set codigo(c) {
        if (c <= 0) {
            throw 'Código deve ser maior que zero'
        }
        else {
            this.#codigo=c
        }
    }
    get codigo() {
        return this.#codigo
    }

    set nome(n) {
        if (n.length > 1) {
            this.#nome=n
        }
        else {
            throw "Nome deve ser maior"
        }
    }
    get nome() {
        return this.#nome
    }

    set idade(i) {
        if((i != undefined)&&(i>0))
            this.#idade = i
        else
            throw "Idade precisa ser dedinida e maior que zero"
    }
    get idade() {
        return this.#idade
    }
}