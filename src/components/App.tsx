import * as React from 'react';

export interface IAppProps {
  message: string;
}

const App = (props: IAppProps): JSX.Element => {
  return (<div>
    <h1>{props.message}</h1>
  </div>
  );
}

export default App;
