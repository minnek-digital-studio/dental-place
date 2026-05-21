"use client";

import { Button } from "@ui/components/button";
import { Typography } from "@ui/components/typography";
import { useEffect } from "react";
import BrokenTooth from "./broken-tooth";
import Link from "next/link";

interface ErrorContentProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function ErrorContent({ error, reset }: ErrorContentProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex items-center justify-center px-4 py-20 min-h-[60vh]">
            <div className="max-w-md w-full text-center space-y-4">
                {/* Broken Tooth SVG */}
                <div className="flex justify-center">
                    <BrokenTooth severity="mild" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                    <Typography
                        as="h1"
                        className="text-4xl md:text-5xl font-bold text-dark-primary"
                    >
                        500
                    </Typography>
                    <Typography
                        as="h2"
                        className="text-2xl md:text-3xl font-semibold text-dark"
                    >
                        Algo salió mal
                    </Typography>
                    <Typography
                        as="p"
                        className="text-base md:text-lg text-muted-foreground"
                    >
                        Nuestros servidores tuvieron un problema inesperado. No
                        te preocupes, nuestro equipo técnico ya está trabajando
                        en ello.
                    </Typography>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button variant="default" size="xl" onClick={reset}>
                        Intentar de nuevo
                    </Button>
                    <Button variant="outline" size="xl" asChild>
                        <Link href="/">Volver al inicio</Link>
                    </Button>
                </div>

                {/* Error info (only in development) */}
                {process.env.NODE_ENV === "development" && error?.message && (
                    <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-200">
                        <Typography
                            as="p"
                            className="text-xs text-red-700 text-left"
                        >
                            <strong>Error:</strong> {error.message}
                        </Typography>
                    </div>
                )}
            </div>
        </div>
    );
}
