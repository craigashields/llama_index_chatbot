import Header from './components/Header';
import Footer from './components/Footer';
import DocumentTools from './components/DocumentTools';
import IndexQuery from './components/IndexQuery';
import './style.scss';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='content'>
        <DocumentTools />
        <IndexQuery />
      </div>
      <Footer />
    </div>
  );
}

export default App;
