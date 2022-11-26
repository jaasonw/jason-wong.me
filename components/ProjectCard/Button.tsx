import ctl from "@netlify/classnames-template-literals";

export const Button = ({ children, href }) => {
  const buttonClasses = ctl(`
    border
    border-neutral-500
    bg-transparent
    text-neutral-500
    font-semibold
    hover:text-neutral-600
    py-2
    px-4
    hover:bg-neutral-900
    rounded
  `);

  return (
    <a className={buttonClasses} href={href}>
      {children}
    </a>
  );
};
