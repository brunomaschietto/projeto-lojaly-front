import Image from "next/image";
import { useRouter } from "next/router";
import lojaLyLogo from "../../public/lojaLyLogo.jpg";

export default function AdminHome() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 bg-gray-900 flex flex-col justify-center items-center space-y-8">
        <button className="inline-block w-300 py-4 px-8 leading-none bg-primary hover:bg-secondary font-semibold rounded shadow">
          Bater ponto
        </button>
        <div className="flex flex-col w-500 h-200 bg-white font-semibold leading-lg text-3xl">
          Lista de funcionários cadastrados
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          <div className="flex flex-col items-center">
            <Image
              src={lojaLyLogo}
              alt="LojaLy Logo"
              width={"100"}
              height={"100"}
            />
            <h2 className="mt-6 text-3xl font-semibold text-primary">
              Cadastre aqui os novos funcionários
            </h2>
          </div>
          <div className="mt-6">
            <form action="">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Nome"
                  className="apperance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="apperance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Cargo"
                  className="apperance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="number"
                  placeholder="Idade"
                  className="apperance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Nome do Gestor"
                  className="apperance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4 space-y-4">
                <button
                  className="inline-block w-full py-4 px-8 leading-none bg-primary hover:bg-secondary font-semibold rounded shadow"
                  type="button"
                  onClick={() => router.push("/homepage")}
                >
                  Cadastrar
                </button>
                <button
                  className="inline-block w-full py-4 px-8 leading-none bg-red-500 hover:bg-secondary font-semibold rounded shadow"
                  type="button"
                  onClick={() => router.push("/")}
                >
                  Deslogar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
