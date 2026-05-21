import styles from "./post-body.module.css";
import { renderHTML } from "@/modules/common/utils/sanitize-html";

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={styles.content}>{renderHTML(content)}</div>
    </div>
  );
}
