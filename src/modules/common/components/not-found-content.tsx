"use client";

import { Button } from "@ui/components/button";
import { Typography } from "@ui/components/typography";
import Link from "next/link";
import BrokenTooth from "./broken-tooth";

export default function NotFoundContent() {
    return (
        <div className="flex items-center justify-center px-4 py-20 min-h-[60vh]">
            <div className="max-w-md w-full text-center space-y-4">
                {/* Broken Tooth SVG */}
                <div className="flex justify-center">
                    <BrokenTooth severity="mild" className="w-32 h-32" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                    <Typography
                        as="h1"
                        className="text-4xl md:text-5xl font-bold text-dark-primary"
                    >
                        404
                    </Typography>
                    <Typography
                        as="h2"
                        className="text-2xl md:text-3xl font-semibold text-dark"
                    >
                        Página no encontrada
                    </Typography>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button variant="default" size="xl" asChild>
                        <Link href="/">Volver al inicio</Link>
                    </Button>
                    <Button
                        variant="outline"
                        size="xl"
                        className="font-bold w-max"
                        asChild
                    >
                        <Link href="/contact_us">Contáctanos</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
