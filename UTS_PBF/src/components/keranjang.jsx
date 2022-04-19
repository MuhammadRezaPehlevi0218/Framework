import React from 'react';
import formatUangIndo from './formatUang';
import Button from 'react-bootstrap/Button';
const Keranjang = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.idProduk}</td>
      <td>{props.nama}</td>
      <td>{formatUangIndo(props.harga)}</td>
      <td>{props.qty}</td>
      <td>{formatUangIndo(props.subTotal)}</td>
    </tr>
  );
};

export default Keranjang;
