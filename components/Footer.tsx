export default function Footer() {
  return (
    <footer className="mt-16 text-center text-sm text-gray-500">
      <div className="container">
        <div className="py-8 rounded-2xl" style={{background:'linear-gradient(90deg, rgba(255,138,163,0.08), rgba(217,70,239,0.06))'}}>
          © {new Date().getFullYear()} Ola Ayad — Made with ❤
        </div>
      </div>
    </footer>
  );
}
