import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div>
      <div>This is a contact us page</div>
      <Link to="/">
        <button className="btn btn-warning">Back to Home</button>
      </Link>
    </div>
  );
}
