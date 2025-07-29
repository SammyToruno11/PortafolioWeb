import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-800 text-white">
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Hola, soy <span className="text-yellow-400">[Tu Nombre]</span></h1>
        <p className="text-xl">Bienvenido a mi portafolio web.</p>
      </div>
    </main>
  );
}
