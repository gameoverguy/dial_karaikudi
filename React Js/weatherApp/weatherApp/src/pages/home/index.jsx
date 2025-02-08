import Login from "../../components/login/login";
import Registration from "../../components/registration/registration";

export default function Home() {
  return (
    <div className="flex gap-12 items-center justify-center w-full h-auto py-32">
      <Login />
      <Registration />
    </div>
  );
}
