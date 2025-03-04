import { CSVWriter } from "./index";

interface Payment {
  to: string;
  id: number;
  amount: number;
  notes: string;
}

const paymentWriter = new CSVWriter<Payment>(["id", "amount", "to", "notes"]);

paymentWriter.addRows([
  { id: 1, amount: 100, to: "Sarah", notes: "Lunch" },
  { id: 2, amount: 200, to: "John", notes: "Dinner" },
  { id: 3, amount: 300, to: "Jane", notes: "Breakfast" },
]);

paymentWriter.save("./data/payments.csv");
