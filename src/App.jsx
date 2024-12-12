import "./App.css";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import Navbar from "./components/navbar/navbar";
import Todo from "./components/todo/todo";



function App() {
  return (
    <>
      <Navbar />
      {/* <Login /> */}
      <Todo />
      <Footer />
    </>
  );
}

export default App;
