import React from "react";

const Cabecera = ({ total }) => {
  return (
    <header>
      <h1>Carrito de Compras</h1>
      <p>
        Cantidad de productos:<span>{total}</span>
      </p>
    </header>
  );
};

export default Cabecera;
