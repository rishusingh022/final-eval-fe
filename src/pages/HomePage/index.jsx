import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import { FormField, AddButton } from '../../components';
function HomePage() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, []);
  return (
    <div>
      <FormField />
      <AddButton />
    </div>
  );
}

export default HomePage;
