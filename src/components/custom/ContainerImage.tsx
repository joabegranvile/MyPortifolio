  import { JSX } from "react";
  import { Card, CardContent } from "../ui/card";


  export default function ContainerImage(): JSX.Element {
    return (
      <>
      <div>
        <Card className="max-w-sm mx-auto">
          <CardContent className="flex justify-center">
          <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-900 blur-2xl"></div>
              <img
                src="/Joabe.png"
                alt="John Carter"
                className="relative w-120 h-120 rounded-full shadow-lg"
              />
            </div>
          </CardContent>
        </Card>
      </div>
      </>
    );
  }