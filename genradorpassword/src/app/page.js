"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(28);
  const [easyToSay, setEasyToSay] = useState(true);
  const [easyToRead, setEasyToRead] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  function generatePassword() {
    const charset = [];
    if (includeUppercase) charset.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (includeLowercase) charset.push("abcdefghijklmnopqrstuvwxyz");
    if (includeNumbers) charset.push("0123456789");
    if (includeSymbols) charset.push("!@#$%^&*()_+}{[]|;:,.<>?");

    if (charset.length === 0) return "";

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomCharsetIndex = Math.floor(Math.random() * charset.length);
      const selectedCharset = charset[randomCharsetIndex];
      const randomIndex = Math.floor(Math.random() * selectedCharset.length);
      newPassword += selectedCharset[randomIndex];
    }

    return newPassword;
  }


  
  function handleButtonClick(newLength) {
    setLength(newLength);
  }

  useEffect(() => {
    setIsClient(true);
    setPassword(generatePassword());
  }, []);

  useEffect(() => {
    setPassword(generatePassword());
  }, [
    length,
    easyToSay,
    easyToRead,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  ]);

  const styleButt = 'bg-blue-800 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h2 className="text-balance text-3xl">Generador de contraseñas</h2>
      </div>

      <div className="mb-32 flex flex-col items-center">
        <label htmlFor="passwordLength" className="mb-2">
          Longitud de la contraseña:
        </label>
        <div className="flex w-96 justify-between py-2">
          <button className={`btn ${styleButt}` } onClick={() => handleButtonClick(8)}>8</button>
          <button className={`btn ${styleButt}`} onClick={() => handleButtonClick(12)}>12</button>
          <button className={`btn ${styleButt}`} onClick={() => handleButtonClick(16)}>16</button>
          <button className={`btn ${styleButt}`} onClick={() => handleButtonClick(24)}>24</button>
          <button className={`btn ${styleButt}`} onClick={() => handleButtonClick(32)}>32</button>
        </div>
        <div className="flex flex-col items-start mb-4 py-2">
          <label className="py-2">
            <input
              type="checkbox"
              checked={easyToSay}
              onChange={() => setEasyToSay(!easyToSay)}
              className="mr-1"
            />
            Fácil de decir
          </label>
          <label className="py-2">
            <input
              type="checkbox"
              checked={easyToRead}
              onChange={() => setEasyToRead(!easyToRead)}
              className="mr-1"
            />
            Fácil de leer
          </label>
          <label className="py-2">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
              className="mr-1"
            />
            Mayúsculas
          </label>
          <label className="py-2">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
              className="mr-1"
            />
            Minúsculas
          </label >
          <label className="py-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              className="mr-1"
            />
            Números
          </label>
          <label className="py-2">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
              className="mr-1"
            />
            Símbolos
          </label>
        </div>

        <div className="text-center mb-4">
          <h2 className="mb-3 text-2xl w-5/6 font-semibold">
            {isClient ? password : ""}
          </h2>
          <button
            className="bg-green-800 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            onClick={() => navigator.clipboard.writeText(password)}
          >
            Copiar
          </button>
        </div>
      </div>
    </main>
  );
}
