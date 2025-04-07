import { Navigate } from "react-router-dom";

const NavigationHelper: React.FC = () => {
          const token = localStorage.getItem('token');
          console.log('checking token>>>>>>',token)
          return token ? <Navigate to="/profile" /> : <Navigate to="/login" />;
  // return <Navigate to="/registraion" />;
};

export default NavigationHelper;
