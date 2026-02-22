import { Route, Switch } from 'wouter';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OilChange from './pages/services/OilChange';
import BrakeRepair from './pages/services/BrakeRepair';
import EngineRepair from './pages/services/EngineRepair';
import Transmission from './pages/services/Transmission';
import ACRepair from './pages/services/ACRepair';
import Diagnostics from './pages/services/Diagnostics';
import TireService from './pages/services/TireService';
import Electrical from './pages/services/Electrical';
import Suspension from './pages/services/Suspension';
import PrePurchaseInspection from './pages/services/PrePurchaseInspection';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-arena-black text-white font-body">
      <ScrollToTop />
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/services/oil-change" component={OilChange} />
          <Route path="/services/brake-repair" component={BrakeRepair} />
          <Route path="/services/engine-repair" component={EngineRepair} />
          <Route path="/services/transmission" component={Transmission} />
          <Route path="/services/ac-repair" component={ACRepair} />
          <Route path="/services/diagnostics" component={Diagnostics} />
          <Route path="/services/tire-service" component={TireService} />
          <Route path="/services/electrical" component={Electrical} />
          <Route path="/services/suspension" component={Suspension} />
          <Route path="/services/pre-purchase-inspection" component={PrePurchaseInspection} />
          <Route>
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
              <h1 className="font-heading text-6xl font-bold text-arena-yellow mb-4">404</h1>
              <p className="text-gray-400 text-lg mb-8">Page not found</p>
              <a href="/" className="bg-arena-red text-white px-8 py-3 rounded-lg font-heading font-semibold hover:bg-arena-yellow hover:text-arena-black transition-all">
                GO HOME
              </a>
            </div>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}