import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ButtonSection from './ButtonSection';
import Landing from './Landing';
import ColumnSection from './ColumnSection';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Landing />
        <ColumnSection />
        <ButtonSection />
        <Footer />

      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

