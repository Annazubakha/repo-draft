import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import { App } from 'components/App/App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/website-Anna-Zubakha">
    <App />
    <ToastContainer autoClose={2000} />
  </BrowserRouter>
);
