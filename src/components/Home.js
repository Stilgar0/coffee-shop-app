import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container text-center text-white">
      <h1 className="display-1">Welcome to JavaGem</h1>
      <p className="lead">Your daily dose of coffee</p>
      <Link to="/menu" className="btn btn-primary btn-lg">View Menu</Link>
    </div>
  );
}

export default Home;
