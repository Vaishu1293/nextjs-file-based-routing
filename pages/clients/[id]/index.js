import { useRouter } from "next/router";

export default function ClientProjectsPage() {
    const router = useRouter();
    function loadProjectHandler() {
        router.push({
            pathname: '/clients/[id]/[projectid]',
            query: {id: 'max', clientprojectid: 'A'}
        });
    }
    return (
        <div>
            <h1>The Client Project Page</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
}