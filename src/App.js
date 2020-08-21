import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import database from '@react-native-firebase/database';

export default function App(props) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    database()
      .ref('/users/123')
      .on('value', (snapshot) => {
        setUserData(snapshot.val());
      });
  });

  return (
    <View>
      <Text>Bom dia</Text>
      <Text>{userData.name}</Text>
      <Text>Anos: {userData.age}</Text>
    </View>
  );
}
