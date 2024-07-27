import EmployeeListItem from "./EmployeeListItem";
import data from "../data/mock_data";
import { Employee } from "@/types/Employee";

export default function EmployeeList({
  setEmployee,
  search,
}: {
  setEmployee: React.Dispatch<React.SetStateAction<number>>;
  search: string;
}) {
  return (
    <>
      {data
        .filter((employee) =>
          employee.name?.toLowerCase().includes(search.toLowerCase()),
        )
        .map((employee: Employee) => (
          <EmployeeListItem
            key={employee.id}
            id={employee.id}
            photo={employee.photo}
            name={employee.name}
            position={employee.position}
            setEmployee={setEmployee}
          />
        ))}
    </>
  );
}
