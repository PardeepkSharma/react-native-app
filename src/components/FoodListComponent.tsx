import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
interface FoodListTypes {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
}
const FoodListComponent = () => {
  const [dataList, setDataList] = useState<FoodListTypes[] | []>();
  const [loading,setLoading]=useState<boolean>(false)

  useEffect(() => {
    const fetchdata = async () => {
        setLoading(true)
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
      );
      setLoading(false)
      const data = await res.json();
      setDataList(data.meals);
    };

    try {
      fetchdata();
    } catch (error) {
      setLoading(false)

      console.error("Error while fetching data=", error);
    }
  }, []);

  return (
    <View>
        {loading ?  <Text style={{textAlign:'center'}}>Loading...</Text> :
    <View>
      <Text style={{textAlign:'center',fontWeight:'bold'}}>Food List</Text>

      <FlatList
        data={dataList}
        keyExtractor={(item) => item.idMeal}
        renderItem={({item}) => {
          return (
            <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
              <Image
                source={{ uri: item.strMealThumb }}
                style={{ width: 150, height: 150,margin:5 }}
              />
              <Text>{item.strMeal}</Text>
            </View>
          );
        }}
      />
    </View>}
    </View>

  );
}


export default FoodListComponent;
