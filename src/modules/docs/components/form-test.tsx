"use client";
import { SendEmail } from "../actions/contact-form.action";
import { useRef, useState } from "react";
const FormTest = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);

    const handleAction = async (formData: FormData) => {
        setLoading((prev) => !prev);
        console.log(loading);
        const send = await SendEmail(formData);
        console.log(send);
        formRef.current?.reset();
        setLoading((prev) => !prev);
    };
    return (
        <form
            action={handleAction}
            ref={formRef}
            className="flex flex-col gap-4 w-full"
        >
            <label htmlFor="your-name" className="flex flex-col gap-2">
                Somebody's name
                <input
                    id="your-name"
                    type="text"
                    className="rounded border px-3"
                    defaultValue={"Joan corona CCC"}
                    name="your-name"
                />
            </label>

            <label htmlFor="your-email" className="flex flex-col gap-2">
                Somebody's Email
                <input
                    id="your-email"
                    type="text"
                    defaultValue={"joan@minnekdigital.com"}
                    name="your-email"
                    className="rounded border px-3"
                />
            </label>

            <label htmlFor="your-subject" className="flex flex-col gap-2">
                Somebody's subject
                <input
                    id="your-subject"
                    type="text"
                    defaultValue={"This is a test BEGENER"}
                    name="your-subject"
                    className="rounded border px-3"
                />
            </label>

            <label htmlFor="your-message" className="flex flex-col gap-2">
                Somebody's message
                <input
                    id="your-message"
                    type="text"
                    defaultValue={"joan@minnekdigital.com"}
                    name="your-message"
                    className="rounded border px-3"
                />
            </label>

            <button
                type="submit"
                disabled={loading}
                className="bg-blue-500 text-white rounded px-4 py-2 hover:opacity-80 transition duration-200 disabled:opacity-50"
            >
                {loading ? "Sending..." : "Send"}
            </button>
        </form>
    );
};

export default FormTest;
