import AppLayout from "../../components/AppLayout";
import {useQuery} from "urql";

const TodosQuery = `
  query {
    store {
      id
    }
  }
`;

export default function Dashboard() {
    const [result, reexecuteQuery] = useQuery({
        query: TodosQuery,
    });

    return <AppLayout title="Dashboard" currentPage="home">
        <p>{JSON.stringify(result.data)}</p>
    </AppLayout>
}