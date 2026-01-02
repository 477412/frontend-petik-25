const Profile = ({ Nama, Alamat, Umur }) => {
  return (
    <div>
      <h3>About me</h3>
      <ul>
        <li>Nama : {Nama}</li>
        <li>Alamat : {Alamat}</li>
        <li>Umur : {Umur}</li>
      </ul>
    </div>
  );
};

export default Profile;
