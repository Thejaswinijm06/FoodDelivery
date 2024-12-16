import { Text, View } from "react-native";
import Head from '@/components/Head'
import Cambo from '@/components/Combo'
import Salad from '@/components/salad'
import Searchbar  from '@/components/searchbar'
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <ScrollView>
    <View style={Styles.Main}>
      <Head/>
      <Searchbar/>
     <Cambo/>
     <Salad/>
     

    </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  Main:{
    backgroundColor: 'white',
  }
})