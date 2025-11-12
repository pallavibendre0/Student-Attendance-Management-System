function Profile(props) {
  return (
    <div>
      <div>
        <h1>Student Info</h1>
      </div>
      <div className="student-record">
        <label>Name: </label>
        <h3>{props.name}</h3>
        <label>Age: </label>
        <h3>{props.age}</h3>
      </div>
    </div>
  );
}
export default Profile;
