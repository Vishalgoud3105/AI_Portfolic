import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-around sm:flex-col sm:items-center">
      <Link href="/">
        <a
          className={`text-cyan-400 hover:text-white hover:shadow-lg hover:shadow-cyan-400 transition duration-300 ${router.pathname === '/' ? 'font-bold text-white' : ''}`}
          aria-label="Go to Home page"
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={`text-cyan-400 hover:text-white hover:shadow-lg hover:shadow-cyan-400 transition duration-300 ${router.pathname === '/about' ? 'font-bold text-white' : ''}`}
          aria-label="Go to About page"
        >
          About
        </a>
      </Link>
      <Link href="/projects">
        <a
          className={`text-cyan-400 hover:text-white hover:shadow-lg hover:shadow-cyan-400 transition duration-300 ${router.pathname === '/projects' ? 'font-bold text-white' : ''}`}
          aria-label="Go to Projects page"
        >
          Projects
        </a>
      </Link>
      <Link href="/experience">
        <a
          className={`text-cyan-400 hover:text-white hover:shadow-lg hover:shadow-cyan-400 transition duration-300 ${router.pathname === '/experience' ? 'font-bold text-white' : ''}`}
          aria-label="Go to Experience page"
        >
          Experience
        </a>
      </Link>
      <Link href="/skills">
        <a
          className={`text-cyan-400 hover:text-white hover:shadow-lg hover:shadow-cyan-400 transition duration-300 ${router.pathname === '/skills' ? 'font-bold text-white' : ''}`}
          aria-label="Go to Skills page"
        >
          Skills
        </a>
      </Link>
      <Link href="/resume">
        <a
          className={`text-cyan-400 hover:text-white hover:shadow-lg hover:shadow-cyan-400 transition duration-300 ${router.pathname === '/resume' ? 'font-bold text-white' : ''}`}
          aria-label="Go to Resume page"
        >
          Resume
        </a>
      </Link>
      <Link href="/contact">
        <a
          className={`text-cyan-400 hover:text-white hover:shadow-lg hover:shadow-cyan-400 transition duration-300 ${router.pathname === '/contact' ? 'font-bold text-white' : ''}`}
          aria-label="Go to Contact page"
        >
          Contact
        </a>
      </Link>
    </nav>
  );
}
