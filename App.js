import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput ,Image, Button } from 'react-native';
 
export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={{width:350,height:60,backgroundColor: 'white', justifyContent:'center'}}>
        <Text style={{fontSize: 20,fontWeight: 'bold',color: 'black',textAlign: 'center'}}>Lovely Deer</Text>
      </View>
      <Image style={styles.image}source={require('./assets/download.png')}></Image>      
      <Text style={styles.red}>Hello World</Text>
      <View>
      <TextInput style={{height: 40, borderColor: 'gray', 
       marginBottom: 15,borderWidth: 5, width: 250,backgroundColor:'white'}}
       placeholder='Email'
       autoCapitalize='none'></TextInput>
      <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 5, width: 250,backgroundColor:'white'}}
       placeholder='Username'
       autoCapitalize='none'></TextInput>
      </View>
      <StatusBar style="auto" />
    
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ee82ee',
    alignItems:'flex-start',
    justifyContent:'space-around',
    flexDirection:'column',
  },
  bigblue: {
    color: '#ff00ff',
    fontWeight: 'bold',
    fontsize: 20,
  },
  red: {
    color: '#0000cd',
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 70,
  },
  image:
  {
  width: 350,
  height: 350,
  borderRadius: 18,
  }
});
