import { useState } from "react";
import EmployeePage from "./components/EmployeePage";
import Homepage from "./components/Homepage";

export default function App() {
  const [currentEmployeeID, setCurrentEmployeeID] = useState<number>(1);

  return (
    <div className="flex h-screen cursor-default items-center justify-center">
      <div className="flex w-[800px] border border-black">
        <Homepage setEmployee={setCurrentEmployeeID} />
        <EmployeePage currentEmployee={currentEmployeeID} />
      </div>
    </div>
  );
}
