import {ExpenseDTO} from "../repository/expense-api";
import {Expense} from "../../entities/Expense";

export function convertExpenseDTO(dto: ExpenseDTO): Expense {
    return new Expense(dto || {});
}
