import { useState } from "react";
import EmployeeList from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";

export default function Homepage({
  setEmployee,
}: {
  setEmployee: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [search, setSearch] = useState<string>("");
  return (
    <div className="h-full w-1/2">
      <Header>Employee Directory</Header>
      <SearchBar setSearch={setSearch} />
      <EmployeeList setEmployee={setEmployee} search={search} />
    </div>
  );
}
