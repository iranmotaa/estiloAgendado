import { Text, View, ScrollView} from "react-native";
import Constants from 'expo-constants'

import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from '../components/section'
import { TrendingHair } from "../components/trending";
import { Saloon } from "../components/saloon";
import { RestaurantVerticalList } from '../components/list'


const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView 
      style={{ flex: 1 }} 
      className="bg-slate-200" 
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header/>

        <Banner/>

        <Search/>
      </View>

      <Section
        name="Cortes em Alta"
        label="Veja mais"
        action={ () => console.log("CLICOU NO CORTES EM ALTA")}
        size="text-2xl"
      />
      <TrendingHair/>

      <Section
        name="Famosos no EstiloAgendado"
        label="Veja todos"
        action={ () => console.log("CLICOU NO Famosos")}
        size="text-xl"
      />

      <Saloon/>

      <Section
        name="Salões"
        label="Veja todos"
        action={ () => console.log("CLICOU NO Salões")}
        size="text-xl"
      />

      <RestaurantVerticalList/>

    </ScrollView>
  );
}
