import renderer from 'react-test-renderer'
import App from '../App'
import {render} from '@testing-library/react-native'
import { get } from 'react-native/Libraries/Utilities/PixelRatio'


describe('Teste de Snapshoot', () => {
    it('Criação de snapshoot', () => {
        const inicial = renderer.create(<App/>).toJSON();
        expect(inicial).toMatchSnapshot();
    })
})

describe('Teste de Inicialização', () => {
    it('Verificando Inicialização dos Componentes', () => {
        const{getByText, getByTestId} = render(<App/>);

        const tituloApp = getByTestId('titulo');
        expect(tituloApp).toBeDefined();

        expect(getByTestId('campo')).toBeDefined();

        expect(getByTestId('botao')).toBeDefined();

        const botao = getByText('Calcular');
        expect(botao).toBeDefined();
    })
})
