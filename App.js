import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';


export default function App() {
  const films = [
    {
      id:1,
      name:'Lego Star Wars Terrifying Talk',
      img: require('./assets/image1.png'),
    },
    {
      id:2,
      name:'Lego Star Wars Terrifying Talk',
      img: require('./assets/image2.png'), 
    },
    {
      id:3,
      name:'Lego Star Wars Terrifying Talk',
      img: require('./assets/image3.png'),
    },
    {
      id:4,
      name:'Lego Star Wars Terrifying Talk',
      img: require('./assets/image4.png'),
    },
  ]
  return (
    <ScrollView  contentContainerStyle={styles.container}>
       <StatusBar style='dark'/>
      <Image source={require('./assets/logonew.png')} style={{ width: 200, height: 200 ,resizeMode:'contain',alignSelf:'center'}} />
      <Image source={require("./assets/hero.png")} style={{width:400 ,resizeMode:'contain'}} />
      <View >
        <Text style={{fontSize:20,fontWeight:'bold',marginTop:10}} >Brand</Text>
        <ScrollView horizontal={true} contentContainerStyle={styles.brand} >
          <View style={styles.bg}><Image source={require("./assets/logo1.png")} style={styles.logo}/></View>
          <View style={styles.bg} ><Image source={require("./assets/logo2.png")} style={styles.logo}/></View>
          <View style={styles.bg} ><Image source={require("./assets/logo3.png")} style={styles.logo}/></View>
          <View style={styles.bg} ><Image source={require("./assets/logo1.png")} style={styles.logo}/></View>

          <View style={styles.bg} ><Image source={require("./assets/logo2.png")} style={styles.logo}/></View>
        </ScrollView>
      </View>
      <View >
        <Image source={require("./assets/logonew.png")} style={{alignItems:'start'}} />
      </View>
    <ScrollView>


      {
        films.map((film)=>(
          <View key={film.id} style={styles.film}>
            <Image source={film.img} style={styles.image} />
            <Text style={{fontSize:16}} >{film.name}</Text>
          </View>
        ))
      }
      </ScrollView>
      

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    // alignItems: 'center',
    padding:10,
    // justifyContent: 'center',
   
  },
  brand:{
    // margin:30,
    // height:70,
    // alignItems:'stretch', 
    // marginBottom:30,
  },
  logo:{
    // height:100,
    // width:250,
    // marginRight:15,
    // justifyContent:'center',
    alignItems:'center',
  },
  bg:{
    backgroundColor:'#fff',
    borderRadius:20,
    padding:20,
   marginHorizontal:7,
   marginVertical:15,
  },
  film:{
    backgroundColor:'#fff',
    borderRadius:10,
    padding:10,
    margin:10,
  },
  image:{
    width:'100%', 
    borderRadius:10
  }
});
