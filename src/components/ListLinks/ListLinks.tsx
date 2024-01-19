import { FC, PropsWithChildren } from "react";
import s from "./ListLinks.module.css";
import { texts } from "../../texts";
import { Project } from "./components/Project/Project";

export const ListLinks = () => {
  const links = texts.links;
  return (
    <div className={s.root}>
      <h2>Список выполненных проектов</h2>
      <ul className={s.listOfProjects}>
        {links.map((link) => (
          <Project
            title={link.title}
            src={link.src}
            description={link.description}
            logo={link.logo}
          />
        ))}
      </ul>
    </div>
  );
};
