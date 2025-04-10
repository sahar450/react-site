import { useRoutes } from "react-router-dom";
import routes from './Routes';
import './App.css';
import Header from './Camponent/Header';
import Footer from './Camponent/Footer/Footer';

function App() {
  const router = useRoutes(routes);

  return (
    <>


      <Header />
      {router}

      <Footer />


    </>
  );
}

export default App;
