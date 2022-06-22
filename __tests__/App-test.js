import renderer from 'react-test-renderer'
import App from '../App'

describe('Teste de Snapshoot', () => {
    it('Criação de snapshoot', () => {
        const inicial = renderer.create(<App/>).toJSON();
        expect(inicial).toMatchSnapshot();
    })
})