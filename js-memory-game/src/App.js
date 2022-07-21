import './App.scss';
import Card from "./components/card/Card";
import qaList from './qa.json';

function App() {
  return (
    <div className="App">
        <p>Click Card to Flip</p>
        <ul className="cards">
            {
                qaList.map((qa, i) => {
                    return <Card
                        key={i}
                        q={qa.q}
                        a={qa.a}
                        i={i}
                    />
                })
            }
        </ul>
    </div>
  );
}

export default App;
