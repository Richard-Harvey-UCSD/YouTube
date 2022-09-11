import { useContext } from 'react';
import { Text } from 'react-native';

import FontSizeContext from './FontSizeContext';

function PageTwo() {
  const size = useContext(FontSizeContext);

  return (
    <Text style={{ fontSize: size }}>
      Second page content
    </Text>
  );
}

export default PageTwo;