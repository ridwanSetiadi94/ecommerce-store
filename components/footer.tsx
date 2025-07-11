function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          ©{currentYear} ProjectStore
        </p>
      </div>
    </div>
  );
}

export default Footer;
