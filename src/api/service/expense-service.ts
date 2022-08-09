import {Expense} from "../../entities/Expense";
import {ExpenseDTO, fetchExpenses} from "../repository/expense-api";
import {convertExpenseDTO} from "../converter/convert-expense-DTO";

export async function getExpenses(): Promise<Expense[]> {
    const expensesList: ExpenseDTO[] = await fetchExpenses();
    const result = expensesList.flatMap(convertExpenseDTO);
    return result;
}
