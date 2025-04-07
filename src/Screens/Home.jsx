import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import home from "../assets/home.webp";

function Home() {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <Header title="Dashboard" register home propfile />
      <div>
        <h2 style={styles.textHeader}>Welcome to Vaultify</h2>
        <h4 style={styles.textHeader}>
          "Vaultify is your secure digital companion, designed to simplify and
          safeguard your online experience. From managing credentials to
          accessing personalized dashboards, we bring everything you need into
          one streamlined platform. Seamless, secure, and built for you."
        </h4>
      </div>
      <div style={styles.footer}>
        <p style={styles.text}>
          © {new Date().getFullYear()} Vaultify. All rights reserved.
        </p>
        <div style={{marginBottom:10}}>
          <a href="https://admin.vaultify.club/" style={styles.link}>
            Contact Us
          </a>
          <a href="https://admin.vaultify.club/" style={styles.link}>
            Privacy and policy
          </a>
          <a href="https://admin.vaultify.club/" style={styles.link}>
            About Us
          </a>
        </div>
      </div>
    </div>
  );
}
const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${home})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    color: "white",
  },
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    height: "60px",
    backgroundColor: "#f1f1f1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "1px solid #ddd",
    zIndex: 1000,
    flexDirection:'row'
  },
  text: {
    color: "black",
    fontSize: 12,
  },
  link: {
    margin: "0 10px",
    fontSize: "13px",
    color: "#000",
    textDecoration: "none",
  },
};

export default Home;
