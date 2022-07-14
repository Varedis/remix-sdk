import { useContext } from 'react';

import context from '../shared/context';

const getContext = () => {
  return useContext(context);
};

export default getContext;
