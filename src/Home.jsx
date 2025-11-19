import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/convite");
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center gap-8 p-8 relative">
      {/* Background decorativo no topo */}
      <div
        className="absolute top-0 left-0 w-full h-20 bg-no-repeat bg-contain bg-center"
        style={{ backgroundImage: "url(/nav.png)" }}
      ></div>

      {/* Título */}
      <div className="text-center space-y-3 z-10">
        <h1
          className="text-4xl md:text-5xl font-bold text-white tracking-wide "
          style={{ fontFamily: "Birthday3" }}
        >
          Você foi convidado!
        </h1>
        <p className="text-gray-400 text-lg">
          Clique no cartão para ver os detalhes
        </p>
      </div>

      {/* Cartão */}
      <div className="flex items-center justify-center z-10">
        <img
          src="/cartao.png"
          alt="Convite Layla 15 anos"
          onClick={handleClick}
          className="max-w-sm w-full cursor-pointer object-contain rounded-lg shadow-2xl animate-floating hover:scale-110 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Background decorativo no rodapé */}
      <div
        className="absolute bottom-0 left-0 w-full h-20 bg-no-repeat bg-contain bg-center"
        style={{ backgroundImage: "url(/footer.png)" }}
      ></div>
    </div>
  );
};

export default Home;
