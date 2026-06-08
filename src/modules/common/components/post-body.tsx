import styles from "./post-body.module.css";
import { RichText } from "@/modules/common/components/rich-text";

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={styles.content}><RichText html={content} /></div>
    </div>
  );
}
