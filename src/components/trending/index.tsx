import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { CardHorizontalFood } from "./food";

export interface FoodProps {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  saloonId: string;
}

export function TrendingHair() {
  const [hair, setHair] = useState<FoodProps[]>([]);

  useEffect(() => {
    async function getHair() {
      const response = await fetch("http://10.1.1.245:3000/hair");
      const data = await response.json();
      setHair(data);
    }

    getHair();
  }, []);

  return (
    <FlatList
      data={hair}
      renderItem={({ item }) => <CardHorizontalFood food={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
