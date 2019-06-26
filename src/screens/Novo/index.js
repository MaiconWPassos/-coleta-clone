import React from 'react'
import { useNavigation } from 'react-navigation-hooks'

import { StatusBar } from 'react-native'
import { Container, BoxNavegacao, Titulo } from './styles'
import Header from '../../components/HeaderReturn'
import theme from '../../config/theme'

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';




export default function index() {
    var { navigate } = useNavigation();
    StatusBar.setBarStyle('light-content', true)
    StatusBar.setBackgroundColor(theme.primaryTransparence)

    var opcoesMenu = [
        {
            name: 'Produto',
            icon: 'toolbox-outline',
            click: function () {
                navigate('Produtos')
            }
        },
        {
            name: 'Lista',
            icon: 'playlist-check',
            click: function () {
            }
        },
        {
            name: 'Pesquisa',
            icon: 'briefcase-search',
            click: function () {
                alert('hello')
            }
        },
        {
            name: 'Inventario',
            icon: 'check-decagram',
            click: function () {
            }
        },
        {
            name: 'Recebimento',
            icon: 'cart-outline',
            click: function () {
            }
        },
    ]

    function renderOpcoesMenu({ name, icon, click }, index) {
        return (
            <BoxNavegacao
                key={`${name}-${index}`}
                onPress={click}
            >
                <Icon name={icon} size={40} color={theme.textColorPrimary} />
                <Titulo>{name}</Titulo>
            </BoxNavegacao>
        )
    }

    return (
        <Container>
            <Header title="Novo" />
            <Container>
                {opcoesMenu.map(renderOpcoesMenu)}
            </Container>
        </Container>
    )
}


