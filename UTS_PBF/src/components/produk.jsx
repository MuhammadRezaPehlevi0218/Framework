import React from 'react';
import { Link } from 'react-router-dom';
import formatUangIndo from './formatUang';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Produk = (props) => {
  return (
    <Card>
      <Link to="/">
        <img
          src={props.gambar}
          className="card-img-top"
          alt="kulkas"
          width={200}
          height={180}
        />
      </Link>
      <Card.Body>
        <Card.Text> Nama : {props.nama}</Card.Text>
        <Card.Text> Harga : {formatUangIndo(props.harga)}</Card.Text>

        <Card.Text>
          Stok : {props.stok} <br />
        </Card.Text>
        <Button
          className="btn btn-primary"
          onClick={() => {
            props.beli(props);
          }}
        >
          Beli
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Produk;
