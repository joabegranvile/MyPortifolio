import { JSX } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import ContainerImage from "./ContainerImage";


export default function CommonHeader(): JSX.Element {
  return (
    <div>
      <div className="h-20"></div>
      <Card>
        <CardContent>
          <div className="flex flex-col lg:flex-row items-center justify-around gap-8">
          <div className="max-w-lg">
            <div className="w-12 h-1 bg-gray-400 mb-4"></div>
            <h1 className="text-7xl font-bold mb-4 w-full">Prazer em conhecer você, <br />
              <span>Eu sou o Joabe</span>
            </h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error rerum aliquam numquam laborum, ducimus voluptate mollitia harum accusamus, earum ipsam consequuntur praesentium dolores culpa nam exercitationem accusantium, iusto cupiditate debitis.
            </p>
          </div>
          <ContainerImage />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}