import { useSession } from "next-auth/react";
import useSWR from 'swr';
import SignIn from "../../components/ui/SignIn";

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Dashboard() {
    const { data: session } = useSession();
    const { data, error } = useSWR('/api/servers?fields=icon%20name&manageable=1', fetcher);
    // do stuff with the data
    if (session) {
        return (
            <p>
                Wooo! Authentication has worked.
            </p>
        );
    } else {
        return (<>
            <SignIn />
        </>);
    }
}
