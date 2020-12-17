import React, { memo, useState } from "react";
import {
  View,
  TextInput,
  Image,
  Button,
  Platform,
  KeyboardAvoidingView
} from "react-native";



const  JoinScreen = ({ navigation }) => {
  
  const [username, setUsername] = useState("");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        resizeMode="contain"
        style={{ flex: 1 }}
        source={require("../assets/telegram-icon.png")}
      />
      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <TextInput
          onChangeText={text => setUsername(text)}
          value={username}
          style={{ fontSize: 30, textAlign: "center" }}
          placeholder="Enter username"
        />
        <Button title="Join Telegram" 
        onPress={() => {navigation.navigate('Intento')}} />
      </View>
    </View>
  );
}
export default memo(JoinScreen)