import React, { useState, useEffect } from 'react'
import { StatusBar } from 'react-native'
import theme from '../../config/theme'
import { Container, Input, Logo, Button, ButtonText } from './style'

import api, { geraJSON } from '../../services/api';
import { setUserToken, setNomeUser } from '../../services/auth';




export default function Login(props) {

    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');



    async function handleLogin() {
        let json = geraJSON({
            DES_NOME: usuario,
            DES_SENHA: senha
        });


        // let { status, data } = await api.post('/user/login', json) 

        // if(status === 200){
        //     if(data.success){
        //         let { results: { token, dados} } = data
        //         setNomeUser(dados.DES_NOME)
        //         setUserToken(token);

        //         props.navigation.navigate('App')
        //     }else{

        //         alert(data.message);
        //     }
        // }else{

        //     alert('Erro ao se conectar no servidor.');
        // }


        setUserToken(json);

        props.navigation.navigate('App')


    }


    return (
        <Container>
            <StatusBar backgroundColor={theme.primary} barStyle="light-content" />
            <Logo source={require('../../assets/icon.png')} resizeMode="contain" />
            <Input
                placeholder="Nome de usuário"
                value={usuario}
                onChangeText={text => setUsuario(text)}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input
                placeholder="Senha"
                value={senha}
                onChangeText={text => setSenha(text)}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
            />

            <Button onPress={handleLogin}>
                <ButtonText>Entrar</ButtonText>
            </Button>

        </Container>
    )
}
