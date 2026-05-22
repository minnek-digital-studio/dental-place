import { renderHTML } from "@/modules/common/utils/sanitize-html";

export const RichText = ({ html }: { html: string }) => <>{renderHTML(html)}</>;
