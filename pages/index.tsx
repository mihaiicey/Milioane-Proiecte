import type { NextPage } from "next";
import Link from "next/link";
const Home: NextPage = () => {
  return (
    <>
<div className="h-screen flex flex-col justify-center items-center">
  <h1 className="text-2xl  text-center font-extrabold md:w-1/3 w-full px-2 md:px-0 mb-3 text-blue-900">Discuții cu clienții și refuzurile: un ghid REVOLUTIONAR (pe bune) pentru a-ți păstra mintea sănătoasă și spiritul înalt!</h1>
  <p className="text-base text-center  md:w-1/3 w-full px-2 mb-6">Salut, știu prin ce emoții treci când discuți cu un client și ajungi la punctul decisiv. Bazat pe multe studii, am ajuns să descopăr metoda REVOLUȚIONARĂ prin care te poți recompensa sau să-ți RIDICI MORALUL LA CER în cazul în care te-a refuzat.</p>
  <div className="flex flex-col sm:flex-row justify-between items-center">
    <Link href="/milion" className="bg-green-500 text-white py-2 px-4 mb-4 sm:mr-2 sm:mb-0">Am prins un contract</Link>
    <Link href="/altu-sa-fie" className="bg-red-500 text-white py-2 px-4">Nu am prins contract</Link>
  </div>
  <Link href="/matza-de-coada" className="bg-pink-500 text-white py-2 px-4 mt-4">Am prins matza de coada</Link>
</div>
    </>
  );
};

export default Home;
