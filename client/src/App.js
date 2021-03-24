import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Event from './components/Event';

function App() {
  return (
    <Provider store={store}>
      <Event/>
    </Provider>
  );
}

export default App;
