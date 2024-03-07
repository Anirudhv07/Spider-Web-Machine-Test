import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

import { InformationCircleIcon, BellIcon } from "@heroicons/react/24/outline";

export function MyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      className="mx-auto max-w-screen-xl px-4 py-4 text-center backdrop-saturate-10 h-16 "
      style={{
        backgroundColor: "transparent",
        maxWidth: "none",
        borderRadius: 0,
        border: 0,
        boxShadow: "none",
      }}
    >
      <div className="flex flex-row gap-6 justify-center">
        <div className="navIcons flex flex-row gap-5 justify-center items-center">
          <InformationCircleIcon className="h-5 text-white " />
          <BellIcon className="h-5 text-white " />
            </div>
          <div className="flex items-center gap-3">
            <div>
              <p className="text-xs">Hi, <span className="text-blue-300">Muhammed Asad</span></p>
              <p className="text-xs text-gray-500 font-normal">welcome back!</p>
            </div>
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
            />
          </div>
      </div>
    </Navbar>
  );
}
