import React from 'react'
import { StatusBar } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'
import { logout } from '../../services/auth';
import theme from '../../config/theme'

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';


import {
    Scroll,
    NavegacaoContainer,
    BoxNavegacao,
    Titulo,
    ViewNavegacao,
    Container,
    ContainerLogo,
    Logo
} from './styles'


export default function Home(props) {
    var { navigate } = useNavigation();

    StatusBar.setBarStyle( 'dark-content',true)
    StatusBar.setBackgroundColor("#fff")


    var opcoesMenu = [
        {
            name: 'Novo',
            icon: 'menu',
            click: function () {
                navigate('Novo')
            }
        },
        {
            name: 'Config.',
            icon: 'cogs',
            click: function () {
            }
        },
        {
            name: 'Importar',
            icon: 'download',
            click: function () {
                alert('hello')
            }
        },
        {
            name: 'Exportar',
            icon: 'upload',
            click: function () {
            }
        },
        {
            name: 'Ajuda',
            icon: 'help-circle',
            click: function () {
            }
        },
        {
            name: 'Sair',
            icon: 'exit-to-app',
            click: function () {
                logout();
                navigate('AuthLoading')
            }
        }
    ]

    function renderOpcoesMenu({ name, icon, click}, index) {
        return (
            <BoxNavegacao key={`${name}-${index}`} onPress={click}>
                <Icon name={icon} size={40} color={theme.textColorPrimary} />
                <Titulo>{name}</Titulo>
            </BoxNavegacao>
        )
    }
    return (
        <Container>
            <ContainerLogo>
                {/* <StatusBar backgrounColor="#f1f1f1" barStyle="dark-content" /> */}

                <Logo source={require('../../assets/icon-nome.png')} />
            </ContainerLogo>
            <NavegacaoContainer>
                <Scroll
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <ViewNavegacao>
                        {opcoesMenu.map(renderOpcoesMenu)}
                    </ViewNavegacao>
                </Scroll>
            </NavegacaoContainer>
        </Container>
    )
}
