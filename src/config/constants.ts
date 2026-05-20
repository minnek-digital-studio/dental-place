export const config = {
    API_URL: process.env.WORDPRESS_API_URL || "",
    WORDPRESS_CONTACT_FORM_URL: process.env.WORDPRESS_CONTACT_FORM_URL || "",
    WPCF7_TAG: process.env.WPCF7_TAG || "",
    DYNAMIC_PAGE_GENERATION: process.env.DYNAMIC_PAGE_GENERATION === "true",
    WORDPRESS_MENU_SLUG: process.env.WORDPRESS_MENU_SLUG || "general-menu",
    WORDPRESS_MENU_ENABLED: process.env.WORDPRESS_MENU_ENABLED === "true",
};
