import ProfileDetails from "./ProfileDetails";
import ProfileImage from "./ProfileImage";
import './App.css';

function App() {
  return (
    <div className="root-div">
      <div className="card">
        <ProfileImage />
        <ProfileDetails />
      </div>
    </div>
  );
};

export default App;