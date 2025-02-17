import Link from "next/link";

export default function ClientsPage() {
    const clients = [
        { id : 'max', name: 'Maximillan'},
        { id : 'vaish', name: 'Vaishali'},
        { id : 'sharmi', name: 'Sharmila'},
    ]
    return (<div>
        <h1>The Clients Page</h1>
        <ul>
            {clients.map(client => <li key={client.id}>
                <Link href={`/clients/${client.id}`}>{client.name}</Link>
            </li>)}
        </ul>
    </div>);
}