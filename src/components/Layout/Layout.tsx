import { FC, PropsWithChildren } from "react";
import s from "./Layout.module.css";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={s.root}>
      <div className={s.container}>{children}</div>
    </div>
  );
};
