import React from 'react';

import Wrapper from './components/Layout/Wrapper';
import UseState from './hooks/useState/UseState';
import UseRef from './hooks/useRef/UseRef';
import UseEffect from './hooks/useEffect/UseEffect';

function App() {
  return (
    <Wrapper>
      <UseState />
      <UseRef />
      <UseEffect />
    </Wrapper>
  );
}

export default App;
