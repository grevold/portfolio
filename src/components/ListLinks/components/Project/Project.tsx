import { useState } from "react";
import s from "./Project.module.css";

interface Props {
  title: string;
  src: string;
  description: string;
  logo?: string;
}

export function Project({ title, src, description, logo }: Props) {
  const [state, setState] = useState(false);
  const handleCLick = () => {
    setState((prevState) => !prevState);
  };
  return (
    <div className={s.root}>
      <div className={s.header_container}>
        <h1 className={s.title}>{title}</h1>
        {logo ? (
          <img
            className={s.logo}
            src={`${process.env.PUBLIC_URL}/logos/${logo}`}
          ></img>
        ) : (
          <div></div>
        )}
      </div>

      <div className={s.container}>
        <div
          className={state ? s.description_visible : s.description_unVisible}
        >
          <span className={s.text_description}>{description}</span>
        </div>
        <button className={s.full_description} onClick={handleCLick}>
          {state ? "Полное описание ▲" : "Полное описание ▼"}
        </button>

        <a href={src} className={s.link}>
          Посмотреть проект
        </a>
      </div>
    </div>
  );
}
