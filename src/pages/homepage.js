import Image from "next/image";
import signupPic from "../../public/signupPic.svg";
import lojaLyLogo from "../../public/lojaLyLogo.jpg";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 bg-gray-900 flex flex-col justify-center items-center space-y-2">
        <button className="inline-block w-300 py-4 px-8 leading-none bg-primary hover:bg-secondary font-semibold rounded shadow">Bater ponto</button>
      </div>
    </div>
  );
}
