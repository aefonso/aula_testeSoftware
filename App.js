
import { Text, View, TextInput, Button  } from 'react-native';


export default () => {
  return (
    <View>
      <Text testID='titulo'> Digite um número</Text>
      <TextInput  testID='campo' placeholder="Digite aqui"/>
      <Button testID='botao' title='Calcular'/>
    </View>
  )
}