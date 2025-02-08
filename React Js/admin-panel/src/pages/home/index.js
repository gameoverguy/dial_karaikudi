import Login from "../../components/login/login";
import Registration from "../../components/registration/registration";
import "./home.css";

export default function Home() {
  return (
    <div className="mainbox">
      <div className="login">
        <Login />
      </div>
      <div className="registration">
        <Registration />
      </div>
    </div>
  );
}
