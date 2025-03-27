import React from "react";

const Header: React.FC = ({title}) => {
    return (
        <div style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center',
            backgroundColor: '#c8417b', 
            position: 'fixed',
            top: 0,
            left:0,
            right:0,
            width: '100%',
            height: '55px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            zIndex: 1000
        }}>
           {title}
        </div>
    );
};

export default Header;
