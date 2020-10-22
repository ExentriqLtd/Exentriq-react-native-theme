import { DefaultTheme } from '@react-navigation/native';
import React from 'react';
import PaperExample from './src/';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red',
    accent: 'yellow',
  },
};


const App: () => React$Node = () => {
  return (
    <>
      <PaperExample />
    </>
  );
};

export default App;
