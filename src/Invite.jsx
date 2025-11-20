import { useState, useEffect } from "react";

const Invite = () => {
  const targetDate = new Date("2025-12-21T17:00:00").getTime();
  const [countDown, setCountDown] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(targetDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const getReturnValues = (countDown) => {
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getReturnValues(countDown);

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4">
      <div
        className="w-full max-w-2xl min-h-screen bg-white flex flex-col items-center justify-start gap-6 px-8 pb-20 relative overflow-hidden"
        style={{ paddingTop: "300px" }}
      >
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            backgroundImage: "url(/background.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <h1
          className="text-6xl font-bold text-black z-10"
          style={{ fontFamily: "Birthday3" }}
        >
          Layla
        </h1>

        <div className="text-center z-10">
          <p
            className="text-5xl font text-red-800"
            style={{ fontFamily: "Birthday" }}
          >
            Birthday
          </p>
        </div>

        <div className="w-full h-px bg-red-800 z-10"></div>

        <p
          className="text-lg text-gray-600 font-bold tracking-wide z-10"
          style={{ fontFamily: "Cronde" }}
        >
          Faltam
        </p>

        <div className="flex gap-4 text-center z-10">
          <div className="flex flex-col items-center">
            <span
              className="text-4xl font-bold text-red-800"
              style={{ fontFamily: "Cronde" }}
            >
              {String(days).padStart(2, "0")}
            </span>
            <span
              className="text-sm text-gray-600"
              style={{ fontFamily: "Cronde" }}
            >
              dias
            </span>
          </div>
          <span className="text-4xl font-bold text-red-800">:</span>
          <div className="flex flex-col items-center">
            <span
              className="text-4xl font-bold text-red-800"
              style={{ fontFamily: "Cronde" }}
            >
              {String(hours).padStart(2, "0")}
            </span>
            <span
              className="text-sm text-gray-600"
              style={{ fontFamily: "Cronde" }}
            >
              horas
            </span>
          </div>
          <span className="text-4xl font-bold text-red-800">:</span>
          <div className="flex flex-col items-center">
            <span
              className="text-4xl font-bold text-red-800"
              style={{ fontFamily: "Cronde" }}
            >
              {String(minutes).padStart(2, "0")}
            </span>
            <span
              className="text-sm text-gray-600"
              style={{ fontFamily: "Cronde" }}
            >
              minutos
            </span>
          </div>
          <span className="text-4xl font-bold text-red-800">:</span>
          <div className="flex flex-col items-center">
            <span
              className="text-4xl font-bold text-red-800"
              style={{ fontFamily: "Cronde" }}
            >
              {String(seconds).padStart(2, "0")}
            </span>
            <span
              className="text-sm text-gray-600"
              style={{ fontFamily: "Cronde" }}
            >
              segundos
            </span>
          </div>
        </div>

        <div className="w-full h-px bg-red-800 z-10"></div>

        <div className="text-center space-y-4 z-10">
          <div>
            <p className="text-md text-red-800 uppercase font-bold">Data</p>
            <p
              className="text-2xl font-semibold text-black"
              style={{ fontFamily: "Cronde" }}
            >
              21 de Dezembro
            </p>
          </div>

          <div>
            <p className="text-md text-red-800 uppercase font-bold">Horário</p>
            <p
              className="text-2xl font-semibold text-black"
              style={{ fontFamily: "Cronde" }}
            >
              17:00 horas
            </p>
          </div>

          <div>
            <p className="text-md text-red-800 uppercase font-bold">Local</p>
            <p
              className="text-2xl font-semibold text-black"
              style={{ fontFamily: "Cronde" }}
            >
              Escritório Gastro Bar
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-red-800 z-10"></div>

        <p
          className="text-center text-gray-600 text-xl italic z-10"
          style={{ fontFamily: "padrao" }}
        >
          Sua presença é muito importante para mim!
        </p>
      </div>
    </div>
  );
};

export default Invite;
