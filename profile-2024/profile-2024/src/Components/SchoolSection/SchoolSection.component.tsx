export default function SchoolSection() {
  return (
    <div id="school" className="bg-stone-900 isolate relative">
      <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(80%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[10deg] bg-gradient-to-tr from-[#06B6D4] to-[#9089fc] opacity-30 sm:left-[calc(80%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="grid grid-cols-12 sm:pb-64">
        <div className="text-center pt-32 col-span-12 md:col-span-6 lg:px-32">
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-6xl font-family-chalkduster">
            EDUCATION 
          </h1>
          <p className="mt-12 text-lg leading-8 text-gray-200 px-4">
            IPN, Ciudad de México — Ing. En Informática
            <br/>
            (Ago 2012 - Dec 2016)
          </p>
          <p className="mt-12 text-lg leading-8 text-gray-200 px-4">
            Graduated from one of best universities in México, the Unidad Profesional Interdisciplinary de Ingeniería Ciencia Sociales y Administrativas (UPIICSA)
          </p>
        </div>
        <div className="text-center pt-16 pb-16 col-span-12 md:col-span-6 mx-auto justify-center content-center">
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-6xl font-family-chalkduster">
            Language 
          </h1>
          <p className="mt-12 text-lg leading-8 text-gray-200 px-4">
            Spanish - Native speaker
          </p>
          <p className="text-lg leading-8 text-gray-200 px-4">
            English - B2
          </p>
        </div>
      </div>
    </div>
  );
}
