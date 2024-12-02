import { FlatList } from 'react-native';
import { useEffect, useState  } from 'react'
import { RestaurantItem } from './horizontal'

export interface SaloonProps{
  id: string;
  name: string;
  image: string;
}

export function Saloon() {
  const [saloon, setSaloon] = useState<SaloonProps[]>([])

  useEffect(() => {
    async function getHair(){
      const response = await fetch("http://10.1.1.245:3000/saloon");
      const data = await response.json()
      setSaloon(data);
    }

    getHair();
  }, [])


 return (
  <FlatList
    data={saloon}
    renderItem={ ({ item }) => <RestaurantItem item={item} /> }
    horizontal={true}
    contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16}}
    showsHorizontalScrollIndicator={false}
  />
  );
}