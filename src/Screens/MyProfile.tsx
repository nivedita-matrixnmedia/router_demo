import { useEffect, useState } from "react";
import Header from "../Components/Header";
import profileimage from "../assets/ProfileIcon.png";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Profile() {
  const [profileData, setProfiledata] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const userid = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    console.log("id>>>>>", userid);
    try {
      const response = await axios.get(
        `http://ec2-13-233-128-152.ap-south-1.compute.amazonaws.com:5000/api/auth/profile/${userid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProfiledata(response.data?.profileData);
      console.log("GET Response:", response?.data);
    } catch (error) {
      console.error("GET Error:", error);
    }
  };

  const handelLogout = () => {
    localStorage?.removeItem("token");
    localStorage?.removeItem("userId");
    navigate('/login');
  };

  return (
    <div style={style.container}>
      <Header title="My Account" home />
      <div style={style.profileBox}>
        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <img
            src={profileData?.profilePic ?? profileimage}
            alt="Profile"
            style={style.image}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <h2 style={style.nameText}>{profileData?.name}</h2>
            <h3 style={style.emailText}>{profileData?.dob}</h3>
          </div>
        </div>
        <div
          style={style.buttonView}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <button style={style.button} onClick={handelLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

const style = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    // flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  profileBox: {
    display: "flex",
    alignItems: "flex-start",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    backgroundColor: "#f9f9f9",
    minWidth: "400px",
    padding: "25px 15px",
    flexDirection: "column",
  },
  image: {
    width: "90px",
    height: "auto",
    borderRadius: "50px",
    objectFit: "cover",
  },
  nameText: {
    color: "black",
    margin: 0,
    fontSize: "1.5rem",
  },
  emailText: {
    color: "gray",
    margin: 0,
    fontSize: "1rem",
  },
  buttonView: {
    display: "flex",
  },
  button: {
    borderRadius: 0,
    marginTop: 10,
  },
};
