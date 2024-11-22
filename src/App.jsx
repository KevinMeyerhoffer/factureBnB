import React from 'react';
import { Provider } from 'react-redux'; // Import du Provider pour Redux
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './themes/theme'; // Importation du thème personnalisé
import AppRoutes from './routes/routes'; // Importation des routes
import store from './store/storeConfiguration'; // Import du store Redux

const App = () => {
  return (
    <Provider store={store}> {/* Fournir le store Redux à l'application */}
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Applique les styles globaux de Material UI */}
        <AppRoutes /> {/* Affiche les routes de l'application */}
      </ThemeProvider>
    </Provider>
  );
};

export default App;
