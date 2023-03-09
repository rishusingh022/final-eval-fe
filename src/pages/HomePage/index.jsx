import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import {
  FormField,
  AddButton,
  FormNameCard,
  SideNavigator,
} from '../../components';
function HomePage() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, []);
  return (
    <div>
      <SideNavigator />
    </div>
  );
}

export default HomePage;
