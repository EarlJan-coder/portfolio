export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t-4 border-border-black bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono font-bold">
          © {new Date().getFullYear()} EARL DESIGN. ALL RIGHTS RESERVED.
        </p>
        <p className="font-mono text-muted-gray">
          BUILT WITH <span className="text-hot-pink font-bold">NEXT.JS</span> + <span className="text-electric-blue font-bold">TAILWIND</span>
        </p>
      </div>
    </footer>
  );
};
