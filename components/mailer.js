export default function Mailer({ children, className, subject = "Contact" }) {
  return (
    <a
      className={className}
      href={`mailto:data.insertion@beta.gouv.fr?subject=[Question flux] ${subject}`}
    >
      {children}
    </a>
  );
}
