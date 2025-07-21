import Navbar from './navbar';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="relative font-roboto">
      <Navbar />

      <section
        className="w-full h-[500px] bg-cover bg-center relative pt-32"
        style={{
          backgroundImage: "url('/background/image-inspiration-palette.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4 pt-8">
          <h1 className="text-5xl md:text-7xl font-raleway font-black drop-shadow-xl text-stroke">
            Trouvez votre formation
          </h1>
          <h2 className="text-3xl md:text-5xl mt-4 drop-shadow font-raleway font-black text-stroke">
            Développez vos compétences avec IT-Training
          </h2>

          <SearchBar />
        </div>
      </section>
    </header>
  );
}
