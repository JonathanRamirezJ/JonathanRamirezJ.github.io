import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons';

// constants
import { LINK_GIT_HUB, LINK_LN, LINK_CODEPEN} from '../../constants/texts';

export default function HeaderSection() {
  return (
    <div id="header" className="bg-stone-900 h-screen">
      <div className="relative isolate px-6 pt-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(80%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[10deg] bg-gradient-to-tr from-[#06B6D4] to-[#9089fc] opacity-30 sm:left-[calc(80%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center typewriter">
            <h1 className="text-4xl font-medium tracking-tight text-white sm:text-6xl">
              Jonathan Ramírez
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              I'm Web Developer
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href={LINK_GIT_HUB} target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faGithubAlt} className='text-white mx-2 hover:text-black' size="xl" />
              </a>
              <a href={LINK_LN} target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className='text-white mx-2 hover:text-sky-700' size="xl"/>
              </a>
              <a href={LINK_CODEPEN} target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faCodepen} className='text-white mx-2 hover:text-green-500' size="xl"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
