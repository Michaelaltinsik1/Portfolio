import Header from '@/components/Header';
import About from '@/components/About';
import Projects from '@/components/Projects';
export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="">
        <About />
        <Projects />
      </div>
    </main>
  );
}
