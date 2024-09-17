"use server"
import { config } from "@/config/constants";

const { WPCF7_TAG, WORDPRESS_CONTACT_FORM_URL } = config;
export const SendEmail = async (formData: FormData) => {
    try {
        formData.append("_wpcf7_unit_tag", WPCF7_TAG);
        const requestOptions = {
            method: "POST",
            body: formData,
        }
        const response = await fetch(
            WORDPRESS_CONTACT_FORM_URL,
            requestOptions,
        );
        const result = await response.json();

        return result;
    } catch (error) {
        return {
            status: "error",
            message: "Failed to send email",
        }
    }
};
