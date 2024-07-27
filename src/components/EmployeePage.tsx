import EmployeeDetail from "./EmployeeDetail";
import Header from "./Header";
import data from "../data/mock_data";

export default function EmployeePage({
  currentEmployee,
}: {
  currentEmployee: number;
}) {
  return (
    <div className="h-full w-1/2">
      <Header>Employee</Header>
      {data.map((employee) => {
        if (employee.id === currentEmployee) {
          return (
            <EmployeeDetail
              key={employee.id}
              photo={employee.photo}
              name={employee.name}
              position={employee.position}
              callMobile={employee.callMobile}
              callOffice={employee.callOffice}
              sms={employee.sms}
              email={employee.email}
            />
          );
        }
      })}
    </div>
  );
}
