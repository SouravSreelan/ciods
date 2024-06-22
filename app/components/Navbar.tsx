"use client";
import React, { useState } from "react";
import { menuItems } from "../constants/index";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function Nav() {
  const [active, setActive] = useState("Home");

  return (
    <Navbar className="" disableAnimation isBordered>
      <NavbarContent className="sm:hidden text-black" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit text-black">CIODS</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 md:gap-12 mr-6"
        justify="center"
      >
        <NavbarBrand>
          <p className="font-bold text-inherit text-black lg:mr-48 2xl:ml-2">
            CIODS
          </p>
        </NavbarBrand>
        {menuItems.map((nav, index) => (
          <NavbarItem key={nav.id}>
            <Link
              className={`text-white  ${
                active === nav.title ? "text-primary" : "text-black"
              }`}
              onClick={() => setActive(nav.title)}
              aria-current="page"
              href={`#${nav.id}`}
            >
              {nav.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="bg-black">
        {menuItems.map((nav, index) => (
          <NavbarMenuItem key={nav.id}>
            <Link
              className={`w-full text-white ${
                active === nav.title ? "text-primary" : "text-white"
              }`}
              onClick={() => setActive(nav.title)}
              href={`#${nav.id}`}
              size="lg"
            >
              {nav.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
