// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSignup = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    if (email && password) {
      localStorage.setItem(email, JSON.stringify({ name, password }));
      alert("Account created! Please sign in.");
      setIsSignUpActive(false);
    } else alert("Please fill all fields");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const userData = JSON.parse(localStorage.getItem(email));
    if (userData && userData.password === password) {
      alert("Login successful!");
      navigate("/home"); // navigate instead of window.location.href
    } else alert("Invalid email or password");
  };

  const skipLogin = () => {
    navigate("/home"); // Navigate directly to main app
  };

  return (
    <>
      {/* Background video (optional) */}
      <video autoPlay muted loop id="bgVideo">
        <source src="/videoplayback (1).mp4" type="video/mp4" />
      </video>
      <div className="video-overlay" />

      {/* Skip Button */}
      <button
        onClick={skipLogin}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          background: "#e23744",
          color: "#fff",
          border: "none",
          padding: "8px 16px",
          borderRadius: "20px",
          cursor: "pointer",
          zIndex: 10
        }}
      >
        Skip →
      </button>

      {/* Main Container */}
      <div className={`container ${isSignUpActive ? "right-panel-active" : ""}`}>
        {/* Sign Up */}
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignup}>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
            </div>
            <span>or use your email for registration</span>
            <input name="name"     placeholder="Name"     onChange={handleChange} />
            <input name="email"    placeholder="Email"    onChange={handleChange} />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* Sign In */}
        <div className="form-container sign-in-container">
          <form onSubmit={handleLogin}>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
            </div>
            <span>or use your account</span>
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} />
            <button type="submit">Sign In</button>
          </form>
        </div>

        {/* Overlay */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" onClick={() => setIsSignUpActive(false)}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" onClick={() => setIsSignUpActive(true)}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Internal CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
        *{box-sizing:border-box}
        body{font-family:'Montserrat',sans-serif;background:#f6f5f7;margin:0;justify-content:center;align-items:center;display:flex;height:100vh;width:100vw;overflow:hidden}
        h1{font-weight:bold;margin:0}
        span{font-size:12px}
        a{color:#0e263d;font-size:14px;text-decoration:none;margin:15px 0}
        .container{background:#fff;border-radius:10px;box-shadow:0 14px 28px rgba(0,0,0,.2),0 10px 10px rgba(0,0,0,.2);position:relative;overflow:hidden;width:768px;max-width:100%;min-height:480px;margin:60px auto;}
        .form-container{position:absolute;top:0;height:100%;transition:all .6s ease-in-out;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:0 50px;}
        .sign-in-container{left:0;width:50%;z-index:2}
        .sign-up-container{left:0;width:50%;z-index:1;opacity:0}
        .form-container input{background:#eee;border:none;padding:12px 15px;margin:8px 0;width:100%;}
        button{border-radius:20px;border:1px solid #008ecf;background:#008ecf;color:#fff;font-size:12px;font-weight:bold;padding:12px 45px;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:transform 80ms ease-in;}
        button.ghost{background:transparent;border-color:#fff}
        button:active{transform:scale(.95)}
        .social-container{margin:20px 0}
        .social-container a{border:1px solid #008ecf;border-radius:50%;display:inline-flex;justify-content:center;align-items:center;margin:0 5px;height:40px;width:40px;}
        .overlay-container{position:absolute;top:0;left:50%;width:50%;height:100%;overflow:hidden;transition:transform .6s ease-in-out;z-index:100;}
        .overlay{background:linear-gradient(to right,#008ecf,#008ecf) no-repeat center/cover;color:#fff;position:relative;left:-100%;height:100%;width:200%;transform:translateY(0);transition:transform .6s ease-in-out;}
        .overlay-panel{position:absolute;top:0;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 40px;height:100%;width:50%;text-align:center;transition:transform .6s ease-in-out;}
        .overlay-left{transform:translateY(-20%)}
        .overlay-right{right:0}
        .container.right-panel-active .sign-in-container{transform:translateY(100%)}
        .container.right-panel-active .overlay-container{transform:translateX(-100%)}
        .container.right-panel-active .sign-up-container{transform:translateX(100%);opacity:1;z-index:5}
        .container.right-panel-active .overlay{transform:translateX(50%)}
        .container.right-panel-active .overlay-left{transform:translateY(0)}
        .container.right-panel-active .overlay-right{transform:translateY(20%)}
        #bgVideo{position:fixed;top:0;left:0;min-width:100%;min-height:100%;object-fit:cover;z-index:-2}
        .video-overlay{position:fixed;top:0;left:0;height:100vh;width:100vw;background:rgba(0,0,0,0.4);z-index:-1}
      `}</style>
    </>
  );
}
