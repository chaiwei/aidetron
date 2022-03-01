import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';

import icon from '../../assets/icon.svg';
import BasicLayout from './layouts/BasicLayout';
import './App.less';

import About from './components/HelloWorld';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>test</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
        <BasicLayout>
            <Switch>
                <Route path="/" component={Hello} />
                <Route path="/view" component={About} />
            </Switch>
        </BasicLayout>
    </Router>
  );
}
