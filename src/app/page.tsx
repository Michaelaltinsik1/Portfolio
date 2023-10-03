import Header from '@/components/Header';
import About from '@/components/About';
export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="p-4">
        <About />
      </div>
    </main>
  );
}
