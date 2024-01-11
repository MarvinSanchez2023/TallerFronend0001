import {BrowserRouter,Routes,Route} from 'react-router-dom';
import MascotasComponent from './Components/admin/MascotasComponent.js';
import './App.css';
import PrincipalComponent from './Components/principal/PrincipalComponent.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/mascotas' element={<MascotasComponent></MascotasComponent>}></Route>
        <Route path='/' element={<PrincipalComponent></PrincipalComponent>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
