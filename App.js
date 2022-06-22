
import { Text, View, InputText, Button  } from 'react-native';


export default () => {
  return (
    <View>
      <Text> Digite um número</Text>
      <InputText placeholder="Digite aqui"/>
      <Button title='Calcular'/>
    </View>
  )
}