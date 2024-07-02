import Image from 'next/image'


export function HowItWorks(){

  return(
<div className="relative bg-black text-white w-screen my-10 left-1/2 -translate-x-1/2">
  <div className=" h-full flex justify-center items-center">
  <div className="text-white py-16">
  <div className="container mx-auto">
    <h2 className="text-center text-4xl font-bold mb-12 uppercase">Jak to działa </h2>
    <div className="flex flex-col md:flex-row justify-around items-start space-y-12 md:space-y-0 md:space-x-6">
      <div className="flex flex-col items-center text-center max-w-xs">
        <div className="text-2xl mb-4">1</div>
        <div className="mb-4">
      <Image 
      src="/icons/search.png"
      alt="znajdz projekt icona"
      width={100}
      height={100}
      />
        </div>
        <h3 className="text-xl font-semibold mb-4 uppercase">Znajdz projekt</h3>
        <p className="text-white font-light ">
        Przeglądaj ponad 650 unikalnych kolekcji papeterii na Blees Full i dostosuj swoje idealne zaproszenia, save the dates, zaproszenia na zaręczyny i karty RSVP, aby pasowały do Twojego stylu i tematu.

          </p>
      </div>
      <div className="flex flex-col items-center text-center max-w-xs">
        <div className="text-2xl mb-4">2</div>
        <div className="mb-4">
        <Image 
      src="/icons/view-work.png"
      alt="personalizacja projektu icona"
      width={100}
      height={100}
      />
        </div>
        <h3 className="text-xl font-semibold mb-4 uppercase">Personalizacja projektu</h3>
        <p className="text-white font-light">
        Po spersonalizowaniu swojej papeterii i dokonaniu zakupu, projektant Bless Full przejrzy Twój projekt, aby upewnić się, że wygląda perfekcyjnie, i stworzy dla Ciebie próbkę do oceny przed drukowaniem. Ten krok gwarantuje, że Twoja papeteria wygląda dokładnie tak, jak sobie wymarzyłeś.

          </p>
      </div>
      <div className="flex flex-col items-center text-center max-w-xs">
        <div className="text-2xl mb-4">3</div>
        <div className="mb-4">
        <Image 
      src="/icons/ship.png"
      alt="drukowanie i wysyłka icona"
      width={100}
      height={100}
      />
        </div>
        <h3 className="text-xl font-semibold mb-4 uppercase">Drukowanie i wysyłka</h3>
        <p className="text-white font-light">
        Po zatwierdzeniu spersonalizowanego projektu papeterii, wydrukujemy Twoje zaproszenia i karty na wybranym przez Ciebie papierze premium i wyślemy je do Ciebie z darmowymi białymi kopertami w zestawie. Bless Full sprawia, że tworzenie pięknej i unikalnej papeterii jest proste.

          </p>
      </div>
    </div>
  </div>
</div>

  </div>
</div>
  )
}