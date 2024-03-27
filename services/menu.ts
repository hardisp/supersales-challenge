export interface MenuProps {
  link?: string;
  label?: string;
}
export function getMenu(data: any): MenuProps[] | null | undefined {
  if (!data) {
    return null;
  }
  return [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Features",
      link: "/features",
    },
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Pricing",
      link: "/pricing",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];
}
