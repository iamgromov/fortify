import { ShopProvider } from '../services/ShopProvider';
import Header from '../layout/Header';
import Shop from '../layout/Shop';
import Footer from '../layout/Footer';

const App: React.FC = () => {
  return (
    <>
      <ShopProvider>
        <Header />
        <Shop />
        <Footer />
      </ShopProvider>
    </>
  );
};

export default App;
