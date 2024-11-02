module.exports = class PessoaDAO {

    //local = "http://localhost:3000/pessoa";
    local = "http://192.168.99.139:3000/pessoa";

    reg = { codigo: '', nome: '', idade: '' }

    preencher(obj) {
        this.reg.codigo = obj.codigo
        this.reg.nome = obj.nome
        this.reg.idade = obj.idade
    }

    async incluir(obj) {
        this.preencher(obj)
        let r = await fetch(this.local, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.reg),
        })
            .then(response => response.json())
            .then(data => {
                return (data)
            })
            .catch(erro => {
                return (erro)
            });
        return (r)
    }

    async alterar(obj) {
        this.preencher(obj)
        let r = await fetch(this.local, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.reg),
        })
            .then(response => response.json())
            .then(data => {
                return (data)
            })
            .catch(erro => {
                return (erro)
            });
        return (r)
    }

    async remover(obj) {
        this.preencher(obj)
        let r = await fetch(this.local, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.reg),
        })
            .then(response => response.json())
            .then(data => {
                return (data)
            })
            .catch(erro => {
                return (erro)
            });
        return (r)
    }

    async buscarCodigo(obj) {
        this.preencher(obj)
        let r = await fetch(this.local + "/" + this.reg.codigo, {
            method: 'GET',
            //headers,
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            .then(data => {
                return (data)
            })
            .catch(erro => {
                return (erro)
            });
        return (r)
    }

    async listar() {

        let r = await fetch(this.local, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            .then(data => {
                return (data)
            })
            .catch(erro => {
                return (erro)
            });
        return (r)
    }
}