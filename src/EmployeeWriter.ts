import { CSVWriter } from "./index";

interface Employee {
  id: number;
  name: string;
  role: string;
  salary: number;
}

const employeeWriter = new CSVWriter<Employee>([
  "id",
  "name",
  "role",
  "salary",
]);

employeeWriter.addRows([
  { id: 1, name: "omar", salary: 500000, role: "developer" },
  { id: 2, name: "ali", salary: 600000, role: "developer" },
]);

employeeWriter.save("./data/employees.csv");
