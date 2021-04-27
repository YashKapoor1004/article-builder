import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar';
import ArticleHome from './ArticleHome/ArticleHome';
import ArticleBuilder from './ArticleBuilder/ArticleBuilder';
import ArticleDetails from './ArticleDetails/ArticleDetails';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ArticleDetails/>
    </div>
  );
}

export default App;
