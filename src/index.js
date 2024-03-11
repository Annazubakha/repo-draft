import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App.jsx';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   // <BrowserRouter basename="/repo-draft">
//   //   <PersistGate loading={null}>
//   <>
//     <App />
//     <ToastContainer autoClose={2000} />
//   </>
//   //   </PersistGate>
//   // </BrowserRouter>
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/repo-draft">
    <App />
    <ToastContainer autoClose={2000} />
  </BrowserRouter>
);
