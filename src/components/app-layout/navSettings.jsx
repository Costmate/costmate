//Navigation Icons
import { LuLayoutDashboard } from "react-icons/lu";
import { CgBowl } from "react-icons/cg";
import { IoCubeOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { TfiBarChart } from "react-icons/tfi";
import { CiDeliveryTruck } from "react-icons/ci";
import { LuGraduationCap } from "react-icons/lu";
import { GoGear } from "react-icons/go";
import { BsGraphUpArrow } from "react-icons/bs";

export const navSetting = [
  {
    path: '/dashboard',
    text: 'Dashboard',
    icon: <LuLayoutDashboard />
  },
  {
    path: '/recipes',
    text: 'Recipes',
    icon: <CgBowl />
  },
  {
    path: '/inventory',
    text: 'Inventory',
    icon: <IoCubeOutline />
  },
  {
    path: '/orders',
    text: 'Orders',
    icon: <IoCartOutline />
  },
  {
    path: '/analytics',
    text: 'Analytics',
    icon: <TfiBarChart />
  },
  {
    path: '/suppliers',
    text: 'Suppliers',
    icon: <CiDeliveryTruck />
  },
  {
    path: '/learn',
    text: 'Learn',
    icon: <LuGraduationCap />
  },
  {
    path: '/settings',
    text: 'Settings',
    icon: <GoGear />
  },
]

export function getIcon(searchText){
  return navSetting.find((item) => item.text.toLowerCase() == searchText.toLowerCase())?.icon || <BsGraphUpArrow />
}