import Header from "../Components/Header";
import vaultifyLogo from "../assets/Logo.svg";
import arrow from "../assets/arrow-right-white.svg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Header title={"Welcome to Vaultify"} />
      <div style={{ flexDirection: "column" }}>
        <div>
          <img
            src={vaultifyLogo}
            alt="logo"
            style={{
              width: "155px",
              height: "auto",
            }}
          ></img>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <button
            onClick={() => navigate("/login")}
            style={{
              borderRadius: "8px",
              backgroundColor: "#c8417b",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              width: "100%",
              maxWidth: "200px",
              minWidth: "100px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Go to Login
            <img src={arrow} style={{ alignSelf: "center" }}></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
