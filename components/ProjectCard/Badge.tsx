import {
  faBootstrap,
  faJava,
  faJs,
  faPython,
  faReact,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase, faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ctl from "@netlify/classnames-template-literals";

export const Badge = ({ children, tag }) => {
  const icons = new Proxy(
    {
      python: { icon: faPython, color: "blue" },
      bootstrap: { icon: faBootstrap, color: "sky" },
      "spotify api": { icon: faSpotify, color: "green" },
      java: { icon: faJava, color: "yellow" },
      javascript: { icon: faJs, color: "yellow" },
      react: { icon: faReact, color: "blue" },
      postgresql: { icon: faDatabase, color: "blue" },
      firebase: { icon: faFire, color: "orange" },
      svelte: { icon: faCode, color: "red" },
    },
    {
      // It lets you return default values for hashes
      get: (obj, prop) =>
        obj.hasOwnProperty(prop) ? obj[prop] : { icon: faCode, color: "gray" },
    }
  );

  const badgeClasses = ctl(`
    rounded-md
    text-xs
    px-1
    py-0.5
    m-0.5
    uppercase
    font-bold
    bg-${icons[tag].color}-200
    text-${icons[tag].color}-700
  `);

  return (
    <div className={badgeClasses}>
      <FontAwesomeIcon icon={icons[tag].icon} /> {children}
    </div>
  );
};
