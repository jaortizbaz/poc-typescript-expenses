import {expenses} from "./mock-expenses";

export interface ExpenseDTO {
    expenseDate: string,
    description: string,
    category: string,
    amount: string,
    discount: string,
    total: string
}

export function fetchExpenses(): ExpenseDTO[] {
    if (expenses) {
        return expenses;
    } else {
        throw Error("Wrong data URL. Please set a valid URL in the environment variable DB_URL.")
    }
}
