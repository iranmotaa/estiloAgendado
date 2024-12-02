import { View, Pressable, Image } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
  return (
    <View className="w-full h-36 md:h-60 rounded-2xl mt-5 mb-4">
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        <Pressable
          className="w-full h-36 md:h-60 rounded-2xl"
          key="1"
          onPress={() => console.log("CLICOU NO BANNER 1")}
        >
          <Image
            source={require("../../assets/banner-1.jpg")}
            className="w-full h-36 md:h-60 rounded-2xl"
          />
        </Pressable>

        <Pressable
          className="w-full h-36 md:h-60 rounded-2xl"
          key="2"
          onPress={() => console.log("CLICOU NO BANNER 2")}
        >
          <Image
            source={require("../../assets/banner-2.jpg")}
            className="w-full h-36 md:h-60 rounded-2xl"
          />
        </Pressable>

        <Pressable
          className="w-full h-36 md:h-60 rounded-2xl"
          key="3"
          onPress={() => console.log("CLICOU NO BANNER 3")}
        >
          <Image
            source={require("../../assets/banner-3.jpg")}
            className="w-full h-36 md:h-60 rounded-2xl"
          />
        </Pressable>

        <Pressable
          className="w-full h-36 md:h-60 rounded-2xl"
          key="4"
          onPress={() => console.log("CLICOU NO BANNER 4")}
        >
          <Image
            source={require("../../assets/banner-4.jpg")}
            className="w-full h-36 md:h-60 rounded-2xl"
          />
        </Pressable>

      </PagerView>
    </View>
  );
}
