import { useRouter } from "next/router";

export default function SelectedClientProjectPage() {
    const router = useRouter();
    console.log(router.query);
    return (
        <div>
            <h1>The Project Page for a specific Project for a selected client</h1>
        </div>
    );
}