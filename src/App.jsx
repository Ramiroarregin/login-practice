import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("profesor");
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(loggedIn)

  const validAccount = {
    email: "ramiro.arregin95@gmail.com",
    password: "Hola123",
  };

  function onChangeEmail(value) {
    setEmail(value);
  }

  function onChangePassword(value) {
    setPassword(value);
  }

  function onChangeType(value){
    setType(value)
    console.log(value)  }

  function onSubmit(e) {
    e.preventDefault();
    if (email === validAccount.email && password === validAccount.password) {
      //en caso de ser correcto //
      setLoggedIn(true)
      alert(`Bienvenido ${type}!!!`)
    } else {
      setLoggedIn(false)
      alert("email o contraseña incorrecta");
    }
  }

  return (
    <>

    { (loggedIn===false)? (
    <div id="login-page">
      <h1 className="login-title">Stax Food Admin Login</h1>
      <div className="login-card">
        <h2 className="login-subtitle">
          Please fill in your unique admin login details below
        </h2>
        <form className="login-form">
          <label className="login-label" for="email">
            Email address:
          </label>
          <input
            onChange={function (e) {
              onChangeEmail(e.target.value);
            }}
            className="login-input"
            type="text"
            id="email"
          />
          <label className="login-label" for="password">
            Password
          </label>
          <input
            onChange={function (e) {
              onChangePassword(e.target.value);
            }}
            className="login-input"
            type="password"
            id="password"
          />
          <label className="login-label" for="type">Tipo</label>

          <select
          onChange={function(e) {
            onChangeType(e.target.value);
          }
        }
          
          value={type}

          className="login-input" name="tipo" id="tipo">
            <option value="profesor">Profesor</option>
            <option value="alumno">Alumno</option>
          </select>
          <button
            onClick={function (e) {
              onSubmit(e);
            }}
            className="login-submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
    ):
    <div id="welcome"></div>
    }
  </>
  );
}

export default App;
