import {useQuery} from "@tanstack/react-query";
import {getExpenses} from "../../api/service/expense-service";
import {useCallback} from "react";

export function Expenses() {
    const query = useQuery(['expenses'], () => getExpenses());
    const refetch = useCallback(() => {
        query.refetch()
    }, [query])

    return (
        <>
            Data: {JSON.stringify(query.data) || ""}
            {query.isFetching && <h3>Loading...</h3>}
            <button onClick={refetch}>
                Load Expenses
            </button>
        </>
    );
}
