import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TouchableOpacity, FlatList, Alert, TextInput, StyleSheet, Button, ScrollView, Text, View } from 'react-native';

import Pessoa from './src/model/Pessoa';
import PessoaDAO from './src/controller/PessoaDAO';

export default function App() {
    const [codigo, setCodigo] = useState(0)
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState(0)
    const [peso, setPeso] = useState(0.0)
    const [posicao, setPosicao] = useState(0)
    const [saida, setSaida] = useState("")
    const [listaDados, setListaDados] = useState("");


    function incluir() {
        const obj = new Pessoa()
        const dao = new PessoaDAO()
        let s = ""
        try {
            obj.codigo = parseInt(codigo)
            obj.nome = String(nome)
            obj.idade = parseInt(idade)
            obj.peso = parseFloat(peso)
            s = dao.incluir(obj)
            Alert.alert("Incluido com sucesso. ");
        }
        catch (erro) {
            //Alert.alert(" Erro: " + erro)
            setSaida("Erro: " + erro)
        }
    }
    function remover() {
        const obj = new Pessoa()
        const dao = new PessoaDAO()
        let s = ""
        try {
            obj.codigo = parseInt(codigo)
            s = dao.remover(obj)
            Alert.alert("Removido com sucesso, " + s);
        }
        catch (erro) {
            //Alert.alert(" Erro: " + erro)
            setSaida("Erro: " + erro)
        }

    }
    function alterar() {
        const obj = new Pessoa()
        const dao = new PessoaDAO()
        let s = ""
        try {
            obj.codigo = parseInt(codigo)
            obj.nome = nome
            obj.idade = parseInt(idade)
            obj.peso = parseFloat(peso)
            s = dao.alterar(obj)
            Alert.alert("Alterado com sucesso, " + s);
        }
        catch (erro) {
            //Alert.alert(" Erro: " + erro)
            setSaida("Erro: " + erro)
        }
    }
    async function listar() {
        const dao = new PessoaDAO()
        const obj = new Pessoa()
        let lista = await dao.listar()
        //obj.codigo=2
        //let s = await dao.buscarCodigo(obj)
        //setSaida("rodou o listar: "+s)
        setListaDados(lista)

        let s = ""
        for (i = 0; i < lista.length; i++) {
            s = s + lista[i].codigo + " " + lista[i].nome + " " + lista[i].idade + " "+lista[i].peso+"\n"
        }
        setSaida(s)
    }

    async function buscarCodigo() {
        const dao = new PessoaDAO()
        const obj = new Pessoa()
        if (String(codigo).length > 0) {
            obj.codigo = codigo
            let r = await dao.buscarCodigo(obj)
            if ((r != null) && (r != undefined)) {
                setCodigo(r.codigo)
                setNome(r.nome)
                setIdade(r.idade)
                setPeso(r.peso)
            } else {
                setCodigo(0)
                setNome("")
                setIdade(0)
                setPeso(0)

            }
        }
    }

    async function mostrar(pessoa) {
        setCodigo(pessoa.codigo.toString());
        setNome(pessoa.nome);
        setIdade(pessoa.idade.toString());
        setPeso(pessoa.peso.toString());
    }


    return (
        <View style={styles.container}>
            <Text  ></Text>
            <Text  ></Text>
            <View style={styles.linha}>
                <Text  >Código</Text>
                <TextInput style={styles.entrada} value={codigo} onChangeText={setCodigo}
                    keyboardType='numeric' />
            </View>
            <Text  >Nome</Text>
            <TextInput style={{ fontSize: 15, borderWidth: 1, width: 300 }} value={nome} onChangeText={setNome} />
            <Text  >Idade</Text>
            <TextInput style={styles.entrada} value={idade} onChangeText={setIdade}
                keyboardType='numeric' />
            <Text  >Peso</Text>
            <TextInput style={styles.entrada} value={peso} onChangeText={setPeso}
                keyboardType='numeric' />
            <Text  >Posição</Text>
            <TextInput style={styles.entrada} value={posicao} onChangeText={setPosicao}
                keyboardType='numeric' />
            <View style={styles.linha}>
                <Button style={{ fontSize: 5 }} title='Incluir' onPress={incluir} />
                <Text>    </Text>
                <Button style={{ fontSize: 5 }} title='Remover' onPress={remover} />
                <Text>    </Text>
                <Button style={{ fontSize: 5 }} title='Alterar' onPress={alterar} />
            </View>
            <View style={styles.linha}>
                <Button style={{ fontSize: 5 }} title='Listar' onPress={listar} />
                <Text>    </Text>
                <Button style={{ fontSize: 5 }} title='Buscar Código' onPress={buscarCodigo} />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={listaDados}
                    renderItem={({ item }) =>
                        <TouchableOpacity >
                            {/* <Text style={styles.item} onPress={function () { mostrar(item) }}> */}
                            <Text style={styles.item} onPress={() => mostrar(item)}>
                                {item.codigo}    {item.nome}      {item.idade}    {item.peso}
                            </Text>
                        </TouchableOpacity>
                    }
                />
                {/*<Text style={styles.saida} >{saida}</Text> */}
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'cyan',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linha: {
        flexDirection: 'row',
        fontSize: 10,
    },
    entrada: {
        fontSize: 15,
        borderWidth: 1,
        width: 100,
        backgroundColor: 'green',
        textAlign: 'center',
    },
    saida: {
        fontSize: 30,
        backgroundColor: 'magenta',
        color: 'yellow',
        textAlign: 'center',
    },
    item: {
        fontSize: 24,
        backgroundColor: 'cyan',

    },

});
