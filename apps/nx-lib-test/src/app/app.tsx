// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { SomeFeLib } from '@nx-lib-test/some-fe-lib/SomeComp';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="nx-lib-test" />
      <SomeFeLib />
    </div>
  );
}

export default App;
