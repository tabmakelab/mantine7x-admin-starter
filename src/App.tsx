import '@mantine/core/styles.css';
import { MantineProvider, localStorageColorSchemeManager } from '@mantine/core';
import { useRoutes } from 'react-router-dom';
import { theme } from './theme';
import routes from './routers';
import './App.css';

const colorSchemeManager = localStorageColorSchemeManager({
  key: 'mantine-admin-starter-color-scheme',
});
export default function App() {
  const elements = useRoutes(routes);
  return (
    <MantineProvider
      theme={theme}
      colorSchemeManager={colorSchemeManager}
    >
      {elements}
    </MantineProvider>
  );
}
