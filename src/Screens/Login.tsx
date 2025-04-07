import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import Loader from "../assets/Loader.gif";

function Login() {
  const [loader, setLoader] = useState(false);

  //input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //error
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  //password
  const [showIcon, setShowIcon] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = true;

    setEmailError("");
    setPassError("");

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email");
      isValid = false;
    }

    if (!password) {
      setPassError("Password is required");
      isValid = false;
    }

    if (!isValid) return;
    setLoader(true);

    try {
      const response = await axios.post(
        "http://ec2-13-233-128-152.ap-south-1.compute.amazonaws.com:5000/api/auth/login",
        {
          email,
          password,
        }
      );
      setLoader(false);
      navigate("/home");
      localStorage.setItem("userId", response?.data?.user?._id);
      localStorage.setItem("token", response?.data?.token);
      console.log("✅ Registration Response:", response?.data);
      alert(`Registration Successful!\n\nMessage: ${response.data.msg}`);
    } catch (error) {
      setLoader(false);
      console.error("❌ Error during registration:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <Header home title="Vaultify" register />
      <div style={styles.formContainer}>
        <h3 style={styles.headerText}>Login to continue</h3>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>
              Email
            </label>
            <input
              type="text"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
            {emailError && <span style={styles.errorText}>{emailError}</span>}
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <div style={styles.passwordWrapper}>
              <input
                type={showIcon ? "text" : "password"}
                value={password}
                autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                required
              />
              <span
                onClick={() => setShowIcon(!showIcon)}
                style={styles.eyeIcon}
              >
                {showIcon ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {passError && <span style={styles.errorText}>{passError}</span>}
          </div>

          <button
            onClick={handleLogin}
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            disabled={loader}
          >
            {loader ? (
              <img src={Loader} style={{ height: 28, width: 28 }}></img>
            ) : (
              "Sumbit"
            )}
          </button>
        </form>
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
    top: 25,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    backgroundColor: "#f9f9f9",
    minWidth: "400px",
    padding: "30px 20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "100%",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  },
  label: {
    color: "#333",
    fontSize: 14,
    marginBottom: "5px",
  },
  passwordWrapper: {
    position: "relative",
    width: "100%",
  },
  input: {
    backgroundColor: "#fff",
    color: "#000",
    padding: "10px 12px",
    paddingRight: "40px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    width: "100%",
    boxSizing: "border-box",
  },
  eyeIcon: {
    position: "absolute",
    top: "50%",
    right: "12px",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: "#999",
    fontSize: "18px",
  },
  button: {
    backgroundColor: "black",
    color: "#fff",
    cursor: "pointer",
    fontSize: "1rem",
    width: "100%",
    padding: "10px",
    border: "none",
    transition: "all 0.3s ease",
    textAlign: "center",
    borderRadius: "0",
  },
  headerText: {
    color: "black",
    marginBottom: "20px",
    textAlign: "center",
  },
  text: {
    color: "black",
    fontSize: 12,
  },
  errorText: {
    color: "red",
    fontSize: 11,
  },
  footer: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    height: "60px",
    backgroundColor: "#f1f1f1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "1px solid #ddd",
    flexDirection:'column'
  },
  link: {
    margin: "0 10px",
    fontSize: "13px",
    color: "#000",
    textDecoration: "none",
  },
};

export default Login;
