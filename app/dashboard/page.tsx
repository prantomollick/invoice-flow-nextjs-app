import { requireUser } from "../utils/hooks";

export default async function DashboardPage() {
    const session = await requireUser();
    return (
        <div className="h-screen w-screen flex items-center justify-center px-4">
            <h1 className="text-2xl">Dashboard</h1>
        </div>
    );
}
