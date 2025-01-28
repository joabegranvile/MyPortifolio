import CommonHeader from "@/components/custom/CommonHeader";
import CommonNavigator from "@/components/custom/CommonNavigator";
import { NavigationMenuList } from "@radix-ui/react-navigation-menu";
import { JSX } from "react";
export default function Home(): JSX.Element {
  return (
    <>
    <div>
      <CommonNavigator />
      <CommonHeader />
    </div>
    </>
  );
}
