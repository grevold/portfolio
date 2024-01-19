import s from "./Greeting.module.css";
import { EmailIcon } from "./components/icons/EmailIcon";
import { PhoneIcon } from "./components/icons/PhoneIcon";
import { TelegramIcon } from "./components/icons/TelegramIcon";

export function Greeting() {
  return (
    <div className={s.root}>
      <img
        className={s.avatar_container}
        src={`${process.env.PUBLIC_URL}/avatar.png`}
      />
      <div className={s.bio}>
        <h2>Алексей Гревцов</h2>
        <span>Frontend-разработчик</span>
        <div className={s.contacts}>
          <div className={s.contact}>
            <TelegramIcon />
            <a href="https://t.me/Grevalold" className={s.title}>
              @Grevalold
            </a>
          </div>
          <div className={s.contact}>
            <EmailIcon />
            <span className={s.title}>grevold@yandex.ru</span>
          </div>
          <div className={s.contact}>
            <PhoneIcon />
            <a href="tel:+79518131863" className={s.title}>
              +7 (951) 813-18-63
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
