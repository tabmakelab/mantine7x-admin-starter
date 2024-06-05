import ReactDOM from 'react-dom/client';
import App from './App';
import CustomRouter from './routers/CustomRouter';
import history from './routers/history';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CustomRouter history={history}>
    <App />
  </CustomRouter>
);
