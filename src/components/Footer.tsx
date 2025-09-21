const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-primary-foreground/70 text-sm">
          © {currentYear} Green Bay Hmong Alliance Church. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;