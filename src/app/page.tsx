import Header from '@/components/Header';
import About from '@/components/About';
import Projects from '@/components/Projects';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from '@/components/Contact';
export default function Home() {
  return (
    <main id="start">
      <Header />
      <div>
        <About />
        <Projects />
      </div>
      <Contact />
      <ToastContainer />
    </main>
  );
}
