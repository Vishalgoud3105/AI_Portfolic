import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div
      className="min-h-screen relative bg-gray-900 text-white p-8 flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/data-stream-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-0" />
      
      <div className="relative z-10 max-w-xl w-full">
        <h2 className="text-4xl font-bold mb-6 text-cyan-400 drop-shadow-md">Contact</h2>
        <ContactForm />
      </div>
    </div>
  );
}
