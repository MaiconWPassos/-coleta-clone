import React from 'react'
import { StatusBar } from 'react-native'
import { Container, ContainerLogo, Logo, ContainerButtons,Buttons, Button } from './styles'

export default function Home(props) {
    return (
        <Container>
            <StatusBar backgroundColor="#f1f1f1" barStyle="dark-content" />
            {/* Aqui define um conatiner com uma imagem dentro  */}
            <ContainerLogo>
                <Logo source={require('../../assets/icon.png')} />
            </ContainerLogo>

            {/* Aqui escrevmos os botoes */}
            <ContainerButtons horizontal={true}>
                <Buttons>
                    <Button>
                        
                    </Button>
                    <Button>

                    </Button>
                </Buttons>
            </ContainerButtons>

        </Container>

    )
}
