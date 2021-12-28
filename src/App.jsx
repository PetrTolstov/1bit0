import logo from './img/logo.svg';
import './styles/App.css';
import Header from "./routers/header/Header";
import Main from "./routers/main/Main";

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}


