import Searchbar from "./searchbar";
import Weather from "./weather";

export default function Weatherwidget() {
  return (
    <div className="flex flex-col items-center justify-center bg-black/15 backdrop-blur-lg rounded-2xl shadow-2xl p-8">
      <div className="text-3xl font-bold text-white">How is the Weather ?</div>
      <div>
        <Searchbar />
      </div>

      <div>
        <Weather />
      </div>
    </div>
  );
}
