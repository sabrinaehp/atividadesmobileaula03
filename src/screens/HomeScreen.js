import { View, Text, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Ir para Detalhes" onPress={() => navigation.navigate('Details', {
        itemId: 50,
        otherParam: 'Outros parametros'
      }
      )}
      />
    </View>
  )
}

export default HomeScreen