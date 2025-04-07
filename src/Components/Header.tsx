import React from "react";
import vaultifyLogo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

interface HeaderProps {
  title?: string;
  lefticon?: React.ReactNode;
  login?: boolean;
  home?: boolean;
  register?: boolean;
  propfile?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  lefticon,
  login,
  home,
  register,
  propfile,
}) => {
  const token = localStorage.getItem("userId");
  return (
    <div style={styles.container}>
      {lefticon && (
        <div style={styles.leftIcon}>
          <img src={vaultifyLogo} alt="logo" style={styles.logo} />
        </div>
      )}

      <div style={styles.logoContainer}>
        {title && !lefticon && (
          <>
            <h3 style={styles.text}>{title}</h3>
            <img src={vaultifyLogo} alt="logo" style={styles.logo} />
          </>
        )}
      </div>
      {}
      <div style={styles.link}>
        {home && (
          <Link to="/home" style={{ textDecoration: "none" }}>
            <h4
              style={styles.linkText}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Home
            </h4>
          </Link>
        )}
        {login || token===null && (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <h4
              style={styles.linkText}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Login
            </h4>
          </Link>
        )}
        {register && (
          <Link to="/registraion" style={{ textDecoration: "none" }}>
            <h4
              style={styles.linkText}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Register
            </h4>
          </Link>
        )}
        {propfile && token && (
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <h4
              style={styles.linkText}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Profile
            </h4>
          </Link>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "55px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    zIndex: 1000,
    gap: 5,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  text: {
    color: "black",
    fontSize: "1rem",
    margin: 0,
  },
  logo: {
    width: "20px",
    height: "auto",
  },
  leftIcon: {
    position: "absolute",
    left: "10px",
  },
  link: {
    display: "flex",
    position: "fixed",
    right: 0,
    marginRight: 20,
    gap: 10,
  },
  linkText: {
    color: "black",
    fontSize: 12,
  },
};

export default Header;
