import GoogleLogin from 'react-google-login';
import './App.css';

function App() {


    const responseGoogle = (respuesta)=>{
        console.log(respuesta);
        console.log(respuesta.profileObj);
    }
  return (
    <div className="App">

      <GoogleLogin
          clientId="635287808901-kj2duqrbbt7888lr4j5b9vfouil10b4g.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
      />

    </div>
  );
}

export default App;
