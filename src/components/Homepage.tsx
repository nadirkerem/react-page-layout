import EmployeeList from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";

export default function Homepage({
  setEmployee,
}: {
  setEmployee: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="h-full w-1/2">
      <Header>Employee Directory</Header>
      <SearchBar />
      <EmployeeList setEmployee={setEmployee} />
    </div>
  );
}
