import MeImage from "../../assets/avatar.jpg";

export default function AboutMeSection() {
  return (
    <div id="about-me" className="bg-stone-900 isolate relative">
      <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(80%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[10deg] bg-gradient-to-tr from-[#06B6D4] to-[#9089fc] opacity-30 sm:left-[calc(80%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="grid grid-cols-12">
        <div className="text-center py-32 col-span-12 md:col-span-6 lg:px-32">
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-6xl font-family-chalkduster">
            About me
          </h1>
          <p className="mt-12 text-lg leading-8 text-gray-200 px-4">
            Hi, I'm Jonathan, but everyone calls me John. I've been a web developer for 7 years.
          </p>
          <p className="text-lg leading-8 text-gray-200 px-4">
            I love web development, When I was a kid, my favorite activity was playing video games. 
            I was interested in knowing how a video game was built and how it worked on a computer, 
            so in high school I chose to study computer science for my life.
          </p>
          <p className="text-lg leading-8 text-gray-200 px-4">
            Since then, computer science has been a great love of mine.
          </p>
        </div>
        <div className="text-center col-span-12 md:col-span-6 mx-auto justify-center content-center photo-me-container px-4">
          <img className="object-contain h-300 w-96 photo-me" src={MeImage} />
          <span>John</span>
        </div>
      </div>
    </div>
  );
}
