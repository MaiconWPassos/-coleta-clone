import React, { useState } from 'react'


// importa componente de scanner
import { BarCodeScanner } from 'expo-barcode-scanner';

// importa estilo da pagina
import { Container, ContainerButtons, Button, Titulo, Input, Label } from './styles'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

// importa configurações de tema de cores
import theme from '../../../config/theme'
// importa header
import Header from '../../../components/HeaderReturn';


export default function index() {
    // estados iniciais da aplicação
    const [focusCodbar, setFocusCodBar] = useState(false)
    const [scanned, setScanned] = useState(false);
    const [codBarra, setInputCodBarra] = useState('');
   

    // apos a leitura seta o o estado que por sua vez seta o input do codigo de barras
    function handleBarCodeScanned({ type, data }) {
        setInputCodBarra(data);
        setFocusCodBar(true)
        setScanned(false);
    }

    // funcao verifica o status do scanned se ele estiver true abre o scanner
    // se nao anre o formulario
    function renderBarcodeScan(status) {

        if (status)
            return (<BarCodeScanner
                onBarCodeScanned={handleBarCodeScanned}
                style={{ flex: 1, width: '100%', height: '100%', backgroundColor: theme.primary }}
            />)
        else
            return (
                <Container>
                    <Header title="Cadastro" />
                    <Label>Código de Barra</Label>
                    <Input
                        autoFocus={focusCodbar}
                        placeholder="Codigo de Barra"
                        value={codBarra}
                        onChangeText={text => setInputCodBarra(text)}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <ContainerButtons >
                        {/* busca */}
                        <Button>
                            <Icon name="search-web" size={30} color={theme.textColorPrimary} />
                            <Titulo>Busca</Titulo>
                        </Button>
                        {/* scan */}
                        <Button onPress={() => { setScanned(!scanned) }}>
                            <Icon name="barcode-scan" size={30} color={theme.textColorPrimary} />
                            <Titulo>Scanner</Titulo>
                        </Button>
                        <Button>
                            <Icon name="keyboard-outline" size={30} color={theme.textColorPrimary} />
                            <Titulo>Enter</Titulo>
                        </Button>
                    </ContainerButtons >
                </Container >
            )

    }


    return (
        <>
            {
                renderBarcodeScan(scanned)
            }
        </>
    )
}
