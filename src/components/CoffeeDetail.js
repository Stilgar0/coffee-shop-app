import React from 'react';
import { useParams } from 'react-router-dom';
import coffeeMenu from '../data/coffeeData';

function CoffeeDetail() {
  const { id } = useParams();
  const coffee = coffeeMenu.find((c) => c.id === parseInt(id));

  if (!coffee) {
    return <h2>Coffee not found!</h2>;
  }

  return (
    <div className="container text-white">
      <div className="row">
        <div className="col-md-6">
          <img src={coffee.image} alt={coffee.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{coffee.name}</h2>
          <p>{coffee.description}</p>
          <h3>${coffee.price}</h3>
          <Link to={`/order`} className="btn btn-primary">Add to Cart</Link>
        </div>
      </div>
    </div>
  );
}

export default CoffeeDetail;
