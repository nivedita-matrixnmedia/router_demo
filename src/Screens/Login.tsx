import { useState } from "react";
import Header from "../Components/Header";
import vaultifyLogo from "../assets/Logo.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!emailError && email && password) {
        let userList = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
        console.log(userList, email, password);
        if (userList.length > 0) {
            let findIndex = userList.findIndex((item) => {
                console.log(item.email === email , item.password === password);
                return (item.email === email && item.password === password)
            });
            console.log(findIndex);
            if (findIndex === -1) {
                showToast("User not found!", "error");
                return;
            }
            console.log(userList[findIndex]);
            localStorage.setItem('userData', JSON.stringify(userList[findIndex]));
            localStorage.setItem('token', '1234');
            navigate("/home");
        }
        else {
            return;
        }
    } else {
        if (!password) {
        }
        if (!email && !emailError) {
        }
    }
};

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "100px",
      }}
    >
      <Header title={"Welcome to Login Screen"} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "50px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
        <input
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          placeholder="Please Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "15px",
            width: 300,
            borderRadius: 5,
            border: "1px solid gray",
          }}
        />
        <input
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          type="password"
          placeholder="Please Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "15px",
            width: 300,
            borderRadius: 5,
            border: "1px solid gray",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <button
            style={{
              borderRadius: "3px",
              backgroundColor: "#c8417b",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              width: 350,
              height: 40,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
