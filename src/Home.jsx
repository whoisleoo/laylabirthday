import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Particles from "./components/Particles";

const Home = () => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate("/convite");
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center gap-8 p-8 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.05}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div
        className={`absolute inset-0 bg-white transition-opacity duration-2000 pointer-events-none ${
          isTransitioning ? "opacity-100 z-50" : "opacity-0 z-0"
        }`}
      ></div>

      <div
        className="absolute top-0 left-0 w-full h-20 bg-no-repeat bg-contain bg-center z-10"
        style={{ backgroundImage: "url(/nav.png)" }}
      ></div>

      <div className="text-center space-y-3 z-20">
        <h1
          className="text-4xl md:text-5xl font-bold text-white tracking-wide"
          style={{ fontFamily: "Birthday3" }}
        >
          Você foi convidado!
        </h1>
        <p className="text-gray-400 text-lg">
          Clique no cartão para ver os detalhes
        </p>
      </div>

      <div className="flex items-center justify-center z-20">
        <img
          src="/cartao.png"
          alt="Convite Layla 15 anos"
          onClick={handleClick}
          className={`max-w-sm w-full cursor-pointer object-contain rounded-lg shadow-2xl animate-floating transition-all duration-5000 ease-in-out ${
            isTransitioning ? "scale-[3] opacity-0" : "hover:scale-110"
          }`}
        />
      </div>

      <div className="z-20">
        <h1 className="text-gray-500">developed with 💖 by leo</h1>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-20 bg-no-repeat bg-contain bg-center z-10"
        style={{ backgroundImage: "url(/footer.png)" }}
      ></div>
    </div>
  );
};

export default Home;
