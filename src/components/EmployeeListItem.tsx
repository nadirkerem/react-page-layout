import { Employee } from "@/types/Employee";

export default function EmployeeListItem({
  id,
  photo,
  name,
  position,
  setEmployee,
}: Employee & { setEmployee: React.Dispatch<React.SetStateAction<number>> }) {
  return (
    <div
      className="flex h-20 w-full cursor-pointer border-x border-b"
      onClick={() => setEmployee(id!)}
    >
      <div className="h-full">
        <img className="h-full" src={photo} alt={name} />
      </div>
      <div className="px-1 pt-1">
        <h2 className="font-bold">{name}</h2>
        <p className="text-sm font-light">{position}</p>
      </div>
    </div>
  );
}
