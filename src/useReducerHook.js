import { useReducer } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

function UseReducerHook() {
  const initialState = { count: 0 };

  // LAZY INITIALIZATION
  const initialCount = 0;
  const init = (initialCount) => {
    return { count: initialCount };
  };

  const reducer = (state, action) => {
    console.log('state: ', state);
    console.log('action: ', action);
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      case 'reset':
        return initialState;

      // LAZY
      // return init(action.payload);
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // LAZY
  // const [state, dispatch] = useReducer(reducer, initialCount, init);

  return (
    <>
      <Text style={{ fontSize: 50 }}>{state.count}</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => dispatch({ type: 'increment' })}>
          <Text style={{ fontSize: 50, marginRight: 20 }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch({ type: 'decrement' })}>
          <Text style={{ fontSize: 50 }}>-</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => dispatch({ type: 'reset' })}>
      {/* LAZY */}
      {/* <TouchableOpacity onPress={() => dispatch({ type: 'reset', payload: initialCount })}> */}
        <Text style={{ fontSize: 30 }}>reset</Text>
      </TouchableOpacity>
    </>
  );
}

export default UseReducerHook;