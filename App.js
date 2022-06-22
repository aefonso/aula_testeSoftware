
import { Text, View, TextInput, Button  } from 'react-native';


export default () => {
  return (
    <View>
      <Text> Digite um número</Text>
      <TextInput placeholder="Digite aqui"/>
      <Button title='Calcular'/>
    </View>
  )
}