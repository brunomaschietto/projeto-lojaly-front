import Image from "next/image";
import signupPic from "../../public/signupPic.svg";
import lojaLyLogo from "../../public/lojaLyLogo.jpg";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Admin() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 bg-gray-900">
        <div className="flex h-full justify-center items-center">
          <Image
            src={signupPic}
            alt="Login Logo"
            width={"400"}
            height={"400"}
          />
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
              Entrar como Administrador
            </h2>
          </div>
          <div className="mt-6">
            <form action="">
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="apperance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Senha"
                  className="apperance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <button type="button" onClick={() => router.push('/adminHomePage')} className="inline-block w-full py-4 px-8 leading-none bg-primary hover:bg-secondary font-semibold rounded shadow">
                  Entrar
                </button>
              </div>
              <div className="mb-4">
                <p>Não é administrador?</p>
                <p>
                  <Link href="/" className="text-primary">
                    Entre como funcionário
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
