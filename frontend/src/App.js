
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/Landingpage";
import { BrowserRouter , Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen/profileScreen";
import AdminComponent from "./screens/LandingPage/AdminComponent";
import AllUsers from "./adminuser/AllUsers";


const App = () => (
  <BrowserRouter>
  <Header/>
  <main>
    <Route path ="/" component={LandingPage} exact />
    <Route path ="/login" component={LoginScreen} exact />
    <Route path ="/register" component={RegisterScreen} exact />
    <Route path ="/profile" component={ProfileScreen} exact />
    <Route path="/admin" component={AdminComponent}/>
    <Route path="/admin/users" component={AllUsers}/>
    
  </main>
  <Footer/>
  </BrowserRouter>

  
  );


export default App;
