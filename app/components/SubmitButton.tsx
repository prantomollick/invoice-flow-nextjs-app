"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButton({}) {
    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <Button className="w-full" disabled>
                    <Loader2 className="size-4 mr-2 animate-spin" /> Please
                    wait...
                </Button>
            ) : (
                <Button type="submit" className="w-full">
                    Submit
                </Button>
            )}
        </>
    );
}
