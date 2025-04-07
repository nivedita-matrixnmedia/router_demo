import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import home from "../assets/home.webp";

function Home() {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <Header title="Dashboard" register home propfile/>
      <div>
        <h2 style={styles.textHeader}>Welcome to Vaultify</h2>
        <h4 style={styles.textHeader}>
          "Vaultify is your secure digital companion, designed to simplify and
          safeguard your online experience. From managing credentials to
          accessing personalized dashboards, we bring everything you need into
          one streamlined platform. Seamless, secure, and built for you."
        </h4>
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
};

export default Home;
