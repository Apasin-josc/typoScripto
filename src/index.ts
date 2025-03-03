/* CSV Writer Class Mini Project */

import { appendFileSync } from "fs";

interface Payment {
  to: string;
  id: number;
  amount: number;
  notes: string;
}

type PaymentColums = ("id" | "amount" | "to" | "notes")[];

class CSVWriter {
  constructor(private columns: PaymentColums) {
    this.csv = this.columns.join("");
  }

  private csv: string;

  save(filename: string): void {
    appendFileSync(filename, this.csv);
    this.csv = "\n";
    console.log(`file saved as ${filename}`);
  }

  addRows(values: Payment[]): void {
    let rows = values.map((v) => this.formateRow(v));
    this.csv += rows.join("\n");

    console.log(this.csv);
  }

  private formateRow(p: Payment): string {
    return this.columns.map((col) => p[col]).join(",");
  }
}

const writer = new CSVWriter(["id", "amount", "to", "notes"]);

writer.addRows([
  { id: 1, amount: 100, to: "Sarah", notes: "Lunch" },
  { id: 2, amount: 200, to: "John", notes: "Dinner" },
  { id: 3, amount: 300, to: "Jane", notes: "Breakfast" },
]);

writer.save("./data/payments.csv");
