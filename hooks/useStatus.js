import { useDebugValue, useState } from 'react';

const useStatus = () => {
  const [pending, setPending] = useState(true);

  useDebugValue(pending ? 'Pending is true' : 'Pending is false');

  return [pending, setPending];
};

export default useStatus;