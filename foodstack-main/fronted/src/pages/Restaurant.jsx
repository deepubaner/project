import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Restaurant() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/restaurants/${id}`)
      .then(res => setRestaurant(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!restaurant) return <p>Loading...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{restaurant.name}</h1>
      <img src={restaurant.image} alt={restaurant.name} style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '10px' }} />
      <p>{restaurant.description}</p>
      <p>⭐ {restaurant.rating}</p>
      <p>Type: {restaurant.type}</p>
      <p>Price: ₹{restaurant.price}</p>
       
    </div>
  );
}
