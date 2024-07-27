import EmployeeList from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";

export default function Homepage() {
  return (
    <div className="h-full w-1/2">
      <Header>Employee Directory</Header>
      <SearchBar />
      <EmployeeList />
    </div>
  );
}
