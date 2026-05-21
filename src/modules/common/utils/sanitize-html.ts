import type { ReactNode } from "react";
import DOMPurify from "isomorphic-dompurify";
import parse from "html-react-parser";

/**
 * Convert an HTML string from a trusted CMS (WordPress) into React nodes.
 *
 * This is the safe replacement for `dangerouslySetInnerHTML`:
 *  1. DOMPurify strips `<script>`, inline event handlers and `javascript:` URLs
 *     so a compromised editor cannot inject XSS.
 *  2. `html-react-parser` builds an actual React element tree instead of
 *     injecting raw HTML, so React owns the DOM and `react/no-danger` style
 *     warnings disappear.
 *
 * Render the result as children of the wrapping element, for example:
 *
 * ```tsx
 * <Typography as="p">{renderHTML(content)}</Typography>
 * ```
 *
 * Returns an empty string when the input is empty/nullish so the caller can
 * still render the element without a runtime guard.
 */
export const renderHTML = (dirty?: string | null): ReactNode => {
    if (!dirty) return "";
    return parse(DOMPurify.sanitize(dirty));
};
