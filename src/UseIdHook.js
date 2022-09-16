import { View, Text, FlatList } from 'react-native';
import React, { useId } from 'react';

const UseIdHook = () => {
  const employees = [
    {
      id: useId(),
      name: 'John',
      title: 'CEO'
    },
    {
      id: useId(),
      name: 'Sarah',
      title: 'CFO'
    },
    {
      id: useId(),
      name: 'Conner',
      title: 'CTO'
    },
    {
      id: useId(),
      name: 'Terminator',
      title: 'CIO'
    },
  ];

  const id1 = useId();
  const id2 = useId();

  const Item = ({ title }) => (
    <View>
      <Text style={{ fontSize: 20 }}>Title: {title.title}</Text>
      <Text style={{ fontSize: 20 }}>Name: {title.name}</Text>
      <Text style={{ fontSize: 20, marginBottom: 20}}>ID: {title.id}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item} />
  );


  return (
    <View style={{ flex: 0.5, marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>id 1: {id1}</Text>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>id 2: {id2}</Text>
      <Text style={{ fontSize: 40, marginBottom: 20 }}>Employees</Text>

      <FlatList
        style={{ flex: 1 }}
        data={employees}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default UseIdHook;