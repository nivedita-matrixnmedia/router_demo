import { Navigate } from "react-router-dom";

const NavigationHelper: React.FC = () => {
        const token = localStorage.getItem('token');
        return token ? <Navigate to="/home" /> : <Navigate to="/login" />;
};

export default NavigationHelper;
