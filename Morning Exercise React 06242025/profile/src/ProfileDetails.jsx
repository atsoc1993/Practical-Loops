import ProfileLinks from "./ProfileLinks";

function ProfileDetails() {
  let profileName = 'Leo Costa';
  let profileDescription = 'Hello there, I\m Leo Costa, full-stack developer. I have a fascination with decentralized solutions and smart contract development; I also have experience with the MERN stack, Python & C#.';

  return (
    <div className="description-div">
      <h2>{profileName}</h2>
      <p>{profileDescription}</p>
      <ProfileLinks/>
    </div>
  );
};

export default ProfileDetails;