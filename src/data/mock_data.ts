import photo1 from "../assets/images/anon-1.jpg";
import photo2 from "../assets/images/anon-2.jpg";
import photo3 from "../assets/images/anon-3.jpg";
import photo4 from "../assets/images/anon-4.jpg";
import photo5 from "../assets/images/anon-5.jpg";
import photo6 from "../assets/images/anon-6.jpg";

import { Employee } from "@/types/Employee";

const data: Employee[] = [
  {
    id: 1,
    name: "Nicolas Turner",
    photo: photo1,
    position: "Software Engineer",
    callOffice: "825-650-7029",
    callMobile: "983-360-3441",
    sms: "908-507-9716",
    email: "nturner@php.net",
  },
  {
    id: 2,
    name: "Emma Wormald",
    photo: photo2,
    position: "Geological Engineer",
    callOffice: "595-982-5022",
    callMobile: "572-619-5653",
    sms: "763-443-7783",
    email: "ewormald1@youku.com",
  },
  {
    id: 3,
    name: "Rico Pacheco",
    photo: photo3,
    position: "Cost Accountant",
    callOffice: "782-975-6500",
    callMobile: "181-802-6561",
    sms: "330-644-8960",
    email: "rpacheco@opera.com",
  },
  {
    id: 4,
    name: "Albert Montgomery",
    photo: photo4,
    position: "Internal Auditor",
    callOffice: "865-275-8585",
    callMobile: "134-381-1455",
    sms: "451-800-6669",
    email: "albmontgomery@umn.edu",
  },
  {
    id: 5,
    name: "Carissa Villanueva",
    photo: photo5,
    position: "Registered Nurse",
    callOffice: "376-782-8447",
    callMobile: "332-344-5113",
    sms: "567-770-5698",
    email: "cvillanueva@twitpic.com",
  },
  {
    id: 6,
    name: "Emilia Jaume",
    photo: photo6,
    position: "Pharmacist",
    callOffice: "757-819-4319",
    callMobile: "827-341-8640",
    sms: "152-363-8547",
    email: "ejaume5@nsw.gov.au",
  },
];

export default data;
