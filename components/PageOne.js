import { useContext } from 'react';
import { Text } from 'react-native';

import FontSizeContext from './FontSizeContext';

function PageOne() {
  const size = useContext(FontSizeContext);

  return (
    <Text style={{ fontSize: size }}>
      First page content
    </Text>
  );
}

export default PageOne;