import { Employee } from "@/types/Employee";

export default function EmployeeListItem({ photo, name, position }: Employee) {
  return (
    <div className="flex h-20 w-full border-x border-b">
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
