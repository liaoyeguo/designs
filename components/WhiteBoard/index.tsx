import { FC, CSSProperties } from "react";
import styles from "./index.module.css";
interface Props {
  background?: CSSProperties["background"];
}
const WhiteBoard: FC<Props> = (props) => {
  const { background, children } = props;

  return (
    <div
      className={styles.wrapper}
      style={{
        background,
      }}
    >
      {children}
    </div>
  );
};

export default WhiteBoard;
