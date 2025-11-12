import "./App.css";
import Profile from "./Profile";

function App() {
  const student1 = {
    name: "Akash",
    age: 28,
  };

  const student2 = {
    name: "Pallavi",
    age: 22,
  };
  const student3 = {
    name: "Neha",
    age: 25,
  };

  return (
    <>
      <Profile {...student1} />
      <Profile {...student2} />
      <Profile {...student3} />
    </>
  );
}

export default App;
