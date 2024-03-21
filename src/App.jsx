import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* enrutador */}
      <BrowserRouter>
        {/* //envuelve mis rutas */}
        <Routes>
          <Route path="/" element={<div>Estoy en la ruta raíz</div>} />{" "}
          {/* //aquella que quiero estructurar para dar una vista. //Tiene una ruta
          principal //path = "/" significa que es la ruta raíz */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
