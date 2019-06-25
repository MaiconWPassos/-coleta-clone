import React, { useEffect } from 'react';

import { autentica } from '../../services/auth'

import Loader from '../../components/Loader'

export default function AuthLoading(props) {
    
    async function verificaUser() {
        
        const verifica = await autentica();
        // Se encontrar o token abre app se nao abre tela de login
        props.navigation.navigate(verifica ? 'App' : 'Auth');
    }

    useEffect(() => { verificaUser() }, [] );


    return(
        <Loader />
    )

}