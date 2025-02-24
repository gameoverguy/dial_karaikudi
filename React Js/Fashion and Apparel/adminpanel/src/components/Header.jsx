const Header = () => {
  return (
    <div>
      <div className="w-full bg-amber-300 flex py-6 px-8">
        <div>My Shop</div>
        <div className="ms-auto">
          <ul className="flex gap-4">
            <li className="navlink">POS</li>
            <li className="navlink">Date</li>
            <li className="navlink">Notifications</li>
            <li className="navlink">Admin</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
