import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function Toggle() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className=" flex flex-col items-center justify-center">
      <Switch checked={isEnabled} onChange={setIsEnabled}>
        <span className="bg-white rounded shadow mb-4 p-2 h-8 w-12 flex">
          <span
            className={`block h-full w-1/2 rounded transition duration-300 ease-in-out transform ${
              isEnabled ? "bg-blue-500 translate-x-full" : "bg-gray-400"
            }`}
          ></span>
        </span>
        <p className="text-white"></p>
      </Switch>
    </div>
  );
}
