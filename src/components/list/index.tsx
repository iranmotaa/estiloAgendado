import { View, Text} from 'react-native';
import { useState, useEffect } from 'react'
import { RestaurantItem } from './item'

export interface SaloonProps{
  id: string;
  name: string;
  image: string;
}

export function RestaurantVerticalList() {
  const [saloon, setSaloon] = useState<SaloonProps[]>([])

  useEffect(() => {
    async function getHair() {
      const response = await fetch("http://10.1.1.245:3000/saloon");
      const data = await response.json();
      setSaloon(data);
    }

    getHair();
  }, [])


 return (
   <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
    {saloon.map( item => (
      <RestaurantItem item={item} key={item.id}/>
    ))}
   </View>
  );
}