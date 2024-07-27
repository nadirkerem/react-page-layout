import { Employee } from "@/types/Employee";

export default function EmployeeDetail({
  photo,
  name,
  position,
  callOffice,
  callMobile,
  sms,
  email,
}: Employee) {
  return (
    <div className="m-4 rounded-md border">
      <div className="flex h-36 items-center">
        <div className="h-full">
          <img className="h-full p-1" src={photo} alt={name} />
        </div>
        <div>
          <div className="px-1 pt-1">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-xl font-light">{position}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-y p-4">
        <div>
          <h3 className="font-bold">Call Office</h3>
          <p className="text-sm font-light">{callOffice}</p>
        </div>
        <i className="fa-solid fa-angle-right text-2xl text-gray-500"></i>
      </div>

      <div className="flex items-center justify-between border-b p-4">
        <div>
          <h3 className="font-bold">Call Mobile</h3>
          <p className="text-sm font-light">{callMobile}</p>
        </div>
        <i className="fa-solid fa-angle-right text-2xl text-gray-500"></i>
      </div>

      <div className="flex items-center justify-between border-b p-4">
        <div>
          <h3 className="font-bold">SMS</h3>
          <p className="text-sm font-light">{sms}</p>
        </div>
        <i className="fa-solid fa-angle-right text-2xl text-gray-500"></i>
      </div>

      <div className="flex items-center justify-between p-4">
        <div>
          <h3 className="font-bold">Email</h3>
          <p className="text-sm font-light">{email}</p>
        </div>
        <i className="fa-solid fa-angle-right text-2xl text-gray-500"></i>
      </div>
    </div>
  );
}
