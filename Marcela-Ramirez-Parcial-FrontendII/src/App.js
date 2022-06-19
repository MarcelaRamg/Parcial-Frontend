import { useState } from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";

function App() {
  const [total, setTotal] = useState(0);

  const contadorCompras = () => {
    setTotal(total + 1);
  };

  return (
    <div className="App">
      <Cabecera total={total} />
      <Listado contador={contadorCompras} />
    </div>
  );
}

export default App;
