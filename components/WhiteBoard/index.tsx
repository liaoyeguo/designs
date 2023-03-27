import { FC, CSSProperties } from "react";
import styles from "./index.module.css";
interface Props {
  background?: CSSProperties["background"];
  full?: boolean;
}
const WhiteBoard: FC<Props> = (props) => {
  const { background, children, full } = props;

  return (
    <div
      className={styles.wrapper}
      style={{
        padding: full ? 0 : undefined,
        background,
      }}
    >
      {children}
    </div>
  );
};

export default WhiteBoard;
