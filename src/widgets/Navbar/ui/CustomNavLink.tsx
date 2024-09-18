import { NavLink, NavLinkProps } from "react-router-dom";

export const CustomNavLink = (props: NavLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) => `navlink ${isActive && "navlinkActive"}`}
      {...props}
    />
  );
};
