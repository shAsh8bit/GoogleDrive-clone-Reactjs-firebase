import "./App.css";
import Navbar from "./components/navbar";
import SideBar from "./components/sidebar";
import FilesList from "./components/filesList/FilesList";
import DriveLogo from "./images/Google_Drive_logo.png";
import { auth, provider } from "./firebase";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();
  const handleLogin = () => {
    if (!user) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
          console.log(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (user) {
      auth
        .signOut()
        .then(() => {
          setUser(null);
        })
        .catch((err) => alert(err.message));
    }
  };

  return (
    <div className="app">{
      user ?(
      <div>
        <Navbar userPhoto={user.photoURL} />

        <div className="app_mainbox">
          <SideBar userId={user.uid}/>

          <FilesList userId={user.uid}/>
        </div>
      </div>
      ):(<div className='app__login'>
              <img src={DriveLogo} alt="" />
              <button onClick={handleLogin}>Log in to Google Drive</button>
            </div>)}
    </div>
  );
}

export default App;
