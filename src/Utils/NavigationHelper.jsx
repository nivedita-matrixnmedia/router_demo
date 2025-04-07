import { Navigate } from "react-router-dom";

const NavigationHelper = () => {
          const token = localStorage.getItem('token');
          console.log('checking token>>>>>>',token)
          return token ? <Navigate to="/profile" /> : <Navigate to="/login" />;
};

export default NavigationHelper;
