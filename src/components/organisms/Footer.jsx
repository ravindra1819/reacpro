const Footer = ({year}) => {
  return (
    <footer className="bg-gray-200 text-center py-4 text-sm text-gray-600 border-t mt-10">
      &copy; {year} ShopSmart. All rights reserved.
    </footer>
  );
};

export default Footer;