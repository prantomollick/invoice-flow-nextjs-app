import { redirect } from "next/navigation";
import { auth } from "../utils/auth";

export default async function DashboardPage() {
    const session = await auth();

    if (!session || !session?.user) {
        redirect("/login");
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center px-4">
            <h1 className="text-2xl">Dashboard</h1>
        </div>
    );
}
