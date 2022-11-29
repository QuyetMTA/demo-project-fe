import './App.css';
import { ParentComponent } from '../../components/ParentComponent';
import { BrowserRouter } from 'react-router-dom';
import Login from '../Login/Login';

class App extends ParentComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
