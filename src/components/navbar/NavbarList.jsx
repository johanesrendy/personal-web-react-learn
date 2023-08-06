function NavbarList() {
  const navbarID = [
    {
      id: 1,
      navID: "home",
      name: "Home",
    },
    {
      id: 2,
      navID: "about-me",
      name: "About Me",
    },
    {
      id: 3,
      navID: "skills",
      name: "Skills",
    },
    {
      id: 4,
      navID: "experience",
      name: "Experience",
    },
    {
      id: 5,
      navID: "project",
      name: "Project",
    },
    {
      id: 6,
      navID: "contact",
      name: "Contact",
    },
  ];

  return navbarID.map((e) => (
    <li>
      <a href={`#${e.navID}`} key={e.id} className="hover:text-red-500">
        {e.name}
      </a>
    </li>
  ));
}
export default NavbarList;
