import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "../utils/auth";
import { SubmitButton } from "../components/SubmitButton";
import { requireUser } from "../utils/hooks";
import { redirect } from "next/navigation";

export default async function LoginPage() {
    const session = await requireUser();
    if (session?.user) {
        redirect("/dashboard");
    }

    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center px-4">
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription>
                            Enter your credentials to login into your account
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form
                            action={async (formData) => {
                                "use server";
                                await signIn("nodemailer", formData);
                            }}
                            className="flex flex-col gap-y-4"
                        >
                            <div className="flex flex-col gap-y-2">
                                <Label>Email</Label>
                                <Input
                                    placeholder="hello@hello.com"
                                    name="email"
                                    type="email"
                                    required
                                />
                            </div>
                            <SubmitButton />
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
