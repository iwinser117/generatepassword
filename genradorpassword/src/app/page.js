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
  const [copied, setCopied] = useState(false);

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

  const styleButt = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-blue-600 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 transition-colors"

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <section className="w-full max-w-2xl">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Generador de contraseñas</h1>
          <p className="mt-2 text-sm text-white/70">Personaliza las opciones y copia tu contraseña segura.</p>
        </header>

        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 shadow-xl">
          <div className="mb-6">
            <label htmlFor="passwordLength" className="block text-sm font-medium text-white/80">
              Longitud de la contraseña
            </label>
            <div className="mt-3 grid grid-cols-5 gap-2 sm:gap-3">
              {[8, 12, 16, 24, 32].map((n) => (
                <button
                  key={n}
                  className={`${styleButt} ${length === n ? "bg-blue-700 ring-2 ring-blue-300" : ""}`}
                  onClick={() => handleButtonClick(n)}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <label className="inline-flex items-center gap-3 rounded-lg px-3 py-2 bg-white/5 ring-1 ring-white/10">
              <input
                type="checkbox"
                checked={easyToSay}
                onChange={() => setEasyToSay(!easyToSay)}
                className="h-4 w-4 rounded border-white/30 bg-transparent text-blue-600 focus:ring-blue-500"
              />
              <span>Fácil de decir</span>
            </label>
            <label className="inline-flex items-center gap-3 rounded-lg px-3 py-2 bg-white/5 ring-1 ring-white/10">
              <input
                type="checkbox"
                checked={easyToRead}
                onChange={() => setEasyToRead(!easyToRead)}
                className="h-4 w-4 rounded border-white/30 bg-transparent text-blue-600 focus:ring-blue-500"
              />
              <span>Fácil de leer</span>
            </label>
            <label className="inline-flex items-center gap-3 rounded-lg px-3 py-2 bg-white/5 ring-1 ring-white/10">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={() => setIncludeUppercase(!includeUppercase)}
                className="h-4 w-4 rounded border-white/30 bg-transparent text-blue-600 focus:ring-blue-500"
              />
              <span>Mayúsculas</span>
            </label>
            <label className="inline-flex items-center gap-3 rounded-lg px-3 py-2 bg-white/5 ring-1 ring-white/10">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={() => setIncludeLowercase(!includeLowercase)}
                className="h-4 w-4 rounded border-white/30 bg-transparent text-blue-600 focus:ring-blue-500"
              />
              <span>Minúsculas</span>
            </label>
            <label className="inline-flex items-center gap-3 rounded-lg px-3 py-2 bg-white/5 ring-1 ring-white/10">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
                className="h-4 w-4 rounded border-white/30 bg-transparent text-blue-600 focus:ring-blue-500"
              />
              <span>Números</span>
            </label>
            <label className="inline-flex items-center gap-3 rounded-lg px-3 py-2 bg-white/5 ring-1 ring-white/10">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(!includeSymbols)}
                className="h-4 w-4 rounded border-white/30 bg-transparent text-blue-600 focus:ring-blue-500"
              />
              <span>Símbolos</span>
            </label>
          </div>

          <div className="mt-6 text-center">
            <div className="rounded-xl bg-black/30 ring-1 ring-white/10 px-4 py-3">
              <h2 className="font-mono tracking-wider text-lg sm:text-xl break-all">
                {isClient ? password : ""}
              </h2>
            </div>
            <button
              className="mt-4 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-emerald-600 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 transition-colors"
              onClick={() => {
                navigator.clipboard.writeText(password);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
            >
              Copiar
            </button>
            <div
              className={`mt-3 text-sm ${copied ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
              aria-live="polite"
              role="status"
            >
              <span className="inline-flex items-center gap-2 rounded-md bg-emerald-600/20 text-emerald-200 px-3 py-1 ring-1 ring-emerald-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-7 9a.75.75 0 01-1.127.075l-4-4a.75.75 0 111.06-1.06l3.39 3.389 6.48-8.322a.75.75 0 011.054-.134z" clipRule="evenodd" />
                </svg>
                Copiado al portapapeles
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
