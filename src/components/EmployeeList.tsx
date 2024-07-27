import EmployeeListItem from "./EmployeeListItem";
import data from "../data/mock_data";
import { Employee } from "@/types/Employee";

export default function EmployeeList() {
  return (
    <div>
      {data.map((employee: Employee) => (
        <EmployeeListItem
          key={employee.id}
          photo={employee.photo}
          name={employee.name}
          position={employee.position}
        />
      ))}
    </div>
  );
}
