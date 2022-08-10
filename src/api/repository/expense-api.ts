const EXPENSES_URL = process.env.REACT_APP_EXPENSES_URL;

export interface ExpenseDTO {
    expenseDate: string | null,
    description: string | null,
    category: string | null,
    amount: string | null,
    discount: string | null,
    total: string | null
}

function validateHeaders(headers: string) {
    const fields: string[] = headers.split(',');
    const expectedHeaders: string[] = ['expenseDate', 'description', 'category', 'amount', 'discount', 'total'];
    for(const expectedHeader of expectedHeaders) {
        if (fields.indexOf(expectedHeader) < 0) {
            throw Error (`Error reading the csv data. Header ${expectedHeader} missed.`);
        }
    }
}

function readContent(expense: string): ExpenseDTO {
    const fields: string[] = expense.split(',');
    return {
        expenseDate: fields[0],
        description: fields[1],
        category: fields[2],
        amount: fields[3],
        discount: fields[4],
        total: fields[5]
    }
}

function expenseCsvToDto(csvContent: string): ExpenseDTO[] {
    let firstLineRead: boolean = false;
    const expenses: ExpenseDTO[] = [];
    for (const line of csvContent.split('\r\n')) {
        if (firstLineRead) {
            const expense: ExpenseDTO = readContent(line);
            expenses.push(expense);
        } else {
            validateHeaders(line);
            firstLineRead = true;
        }
    }
    return expenses;
}

export function fetchExpenses(): Promise<ExpenseDTO[]> {
    if (EXPENSES_URL) {
        return fetch(EXPENSES_URL).then(response => response.text()).then(data =>{
            return expenseCsvToDto(data);
        });
    } else {
        throw Error("Wrong data URL. Please set a valid URL in the environment variable DB_URL.")
    }
}
