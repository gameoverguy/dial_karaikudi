import { useEffect, useState, React } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function UserDashboard() {
  const { id } = useParams();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const tempuser = data.find((user) => user.id === id);
        setCurrentUser(tempuser);
      });
  }, [id]);

  if (!currentUser) {
    return <div>Loading...</div>; // Show a loading message until currentUser is found
  }

  return (
    <div>
      <h1>Welcome back {currentUser.name} </h1>
      <Link to="/">
        <button className="btn btn-warning">Back to Home</button>
      </Link>
    </div>
  );
}
