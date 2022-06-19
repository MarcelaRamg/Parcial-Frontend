import { useState } from "react";

const Item = ({ contador, nombre, descripcion, itemStock, imagen }) => {
  const [articulo, setArticulo] = useState(itemStock);
  const [comprarBtn, setcomprarBtn] = useState("COMPRAR");
  const [state, setState] = useState(false);
  const [cursor, setCursor] = useState("button");

  const comprar = () => {
    if (articulo > 1) {
      setArticulo((prevState) => prevState - 1);
      contador();
    } else {
      setcomprarBtn("Sin Stock");
      setArticulo("Agotado");
      setCursor("default");
      setState(true);
      contador();
    }
  };

  return (
    <div className="producto">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <h5>
        En Stock <span>{articulo}</span>
      </h5>
      <button onClick={() => comprar()} className={cursor} disabled={state}>
        {comprarBtn}
      </button>
    </div>
  );
};

export default Item;
