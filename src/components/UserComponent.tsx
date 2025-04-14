import { View, Text, Image, Button, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import st from "../util/style";

interface UserData {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number | string; // sometimes string in APIs
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string | null;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

const UserComponent = () => {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showNext, setShowNext] = useState<boolean>(false);

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      const res = await fetch("https://randomuser.me/api/?results=100");
      setLoading(false);
      const data = await res.json();
      setUserData(data.results);
    };

    try {
      fetchdata();
    } catch (error) {
      setLoading(false);

      console.error("Error while fetching data=", error);
    }
  }, [showNext]);

  if (loading) {
    return <Text style={{ textAlign: "center" }}>Loading...</Text>;
  } else
    return (
      <View>
        <FlatList
          data={userData}
          keyExtractor={(item) =>item.login.uuid}
          renderItem={({item}) => {
            return (
              <View>
                <View style={st.cardStyle}>
                  <View style={{display:'flex',flexDirection:'row', gap:10}}>
                    <Image
                      source={{ uri: item?.picture.medium }}
                      style={{ width: 100, height: 100, borderRadius: 50 }}
                    />
                    <View>
                      <Text style={st.textStyle}>
                        {item?.name?.first} {item?.name?.last}
                      </Text>
                      {/* <Text style={st.textStyle}>Age: {item?.dob.age}</Text>
                      <Text style={st.textStyle}>DOB: {item?.dob.date}</Text>
                      <Text style={st.textStyle}>
                        Country: {item?.location.country}
                      </Text>
                      <Text style={st.textStyle}>
                        State: {item?.location.state}
                      </Text>
                      <Text style={st.textStyle}>
                        City: {item?.location.city}
                      </Text> */}
                      <Text style={{color:'gray',padding:10}}>{item?.email}</Text>
                      {/* <Text style={st.textStyle}>Phone: {item?.phone}</Text> */}
                    </View>
                  </View>
                </View>
                {/* <Button
                  title="Next"
                  onPress={() => setShowNext(!showNext)}
                ></Button> */}
              </View>
            );
          }}
        />
      </View>
    );
};

export default UserComponent;
