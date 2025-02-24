import Navlink from "./reusable/leftPanelLink";

const LeftPanel = () => {
  const navLinkData = [
    { label: "Home", isAccordian: false, subNavLinks: [] },
    {
      label: "User Management",
      isAccordian: true,
      subNavLinks: ["users", "admins"],
    },
    { label: "Contacts", isAccordian: false, subNavLinks: [] },
    { label: "Products", isAccordian: false, subNavLinks: [] },
    { label: "Purchases", isAccordian: false, subNavLinks: [] },
    { label: "Sell", isAccordian: false, subNavLinks: [] },
    { label: "Reports", isAccordian: false, subNavLinks: [] },
    { label: "Settings", isAccordian: false, subNavLinks: [] },
  ];

  return (
    <div className="w-[20%] bg-gray-200 px-4 py-6 h-screen">
      <div className="flex flex-col gap-4">
        {navLinkData.map((item, i) => (
          <Navlink
            key={i}
            label={item.label}
            isAccordian={item.isAccordian}
            subNavLinks={item.subNavLinks}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftPanel;
