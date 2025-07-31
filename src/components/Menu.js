import React from 'react';
import { Link } from 'react-router-dom';
import coffeeMenu from '../data/coffeeData';

function Menu() {
  return (
    <div className="container">
      <h2 className="text-center text-white mb-4">Our Menu</h2>
      <div className="row">
        {coffeeMenu.map((coffee) => (
          <div className="col-md-4 mb-4" key={coffee.id}>
            <div className="card bg-dark text-white">
              <img src={coffee.image} className="card-img-top" alt={coffee.name} />
              <div className="card-body">
                <h5 className="card-title">{coffee.name}</h5>
                <p className="card-text">${coffee.price}</p>
                <Link to={`/coffee/${coffee.id}`} className="btn btn-primary">View Details</Link>
                <Link to={`/order`} className="btn btn-secondary ms-2">Add to Cart</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;