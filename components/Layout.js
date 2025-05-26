import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div
      className="min-h-screen text-cyan-300 font-sans"
      style={{
        backgroundImage: "url('/images/neural-circuit-bg.jpg')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-black bg-opacity-80 min-h-screen">
        <Navbar />
        <main className="px-4 py-6 sm:px-8 md:px-12">{children}</main>
      </div>
    </div>
  );
}
