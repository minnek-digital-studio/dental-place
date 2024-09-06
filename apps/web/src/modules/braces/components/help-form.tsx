"use client";
import React from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "@minnek/ui/components/form";
import { Button } from "@minnek/ui/components/button";
import { type ButtonType } from "@/modules/common/types";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@minnek/ui/components/form";

import { Input, type InputProps } from "@minnek/ui/components/input";
import { Textarea, type TextareaProps } from "@minnek/ui/components/textarea";
import { cn } from "@minnek/ui/lib/utils";
import { SendEmail } from "@/modules/common/actions/contact-form.action";

const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().min(10).max(15),
    message: z.string().min(10).max(500),
});

export type FormType = z.infer<typeof formSchema>;

export type FormTypeKeys = keyof FormType;

export type FormField = {
    name: string;
    label: string;
    description: string;
    textarea?: boolean;
    input: InputProps & {
        name: FormTypeKeys;
        placeholder: string;
        sizes: InputProps["sizes"];
        variant: InputProps["variant"];
        className: string;
    };
};

export interface HelpFormProps extends React.HTMLAttributes<HTMLFormElement> {
    fields: FormField[];
    button: ButtonType;
}

const HelpForm = ({
    className,
    fields: formFields,
    button,
    ...props
}: HelpFormProps) => {
    const form = useForm<FormType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
            formData.append(key == "name" ? "your-name" : key, value);
        });
        const result = await SendEmail(formData);
        console.log(result);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={cn(
                    "grid grid-cols-2 gap-6 w-full font-noto-sans mt-12",
                    className,
                )}
                {...props}
            >
                {formFields.map((fieldForm, index) => (
                    <FormField
                        control={form.control}
                        name={fieldForm.name as FormTypeKeys}
                        key={`form-field-${index}`}
                        render={({ field }) => (
                            <FormItem
                                className={cn(
                                    "max-md:col-span-2",
                                    fieldForm.input.className,
                                )}
                            >
                                <FormLabel className="font-bold text-[#2F2E2E]">
                                    {fieldForm.label}
                                </FormLabel>
                                <FormControl>
                                    {!fieldForm?.textarea ? (
                                        <Input
                                            {...field}
                                            {...fieldForm.input}
                                        />
                                    ) : (
                                        <Textarea
                                            {...field}
                                            {...(fieldForm.input as TextareaProps)}
                                        />
                                    )}
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ))}
                <Button {...button}>{button.text}</Button>
            </form>
        </Form>
    );
};

export default HelpForm;
