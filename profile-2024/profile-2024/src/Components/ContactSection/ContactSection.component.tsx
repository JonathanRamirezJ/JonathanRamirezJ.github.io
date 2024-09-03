import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen, faFilePdf } from '@fortawesome/free-regular-svg-icons';

// constants
import { LINK_LN, MAILTO} from '../../constants/texts';

// Assests
import Resume from "../../assets/Resume - Jonathan Israel Ramirez Jimenez .pdf";

export default function ContactSection() {
  return (
    <div id="contact" className="bg-stone-900 isolate relative">
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
        <div className="text-center col-span-12 md:col-span-12 lg:px-32">
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-6xl font-family-chalkduster">
            Contact 
          </h1>
          <p className="mt-12 text-lg leading-8 text-gray-200 px-4">
            Send me a message, I hope collaborate with you! 
          </p>
          <div className="text-center">
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href={LINK_LN} target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className='text-white mx-2 hover:text-sky-700' size="xl"/>
              </a>
              <a href={MAILTO} target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelopeOpen} className='text-white mx-2 hover:text-yellow-500' size="xl"/>
              </a>
            </div>
          </div>
          <p className="mt-12 text-lg leading-8 text-gray-200 px-4">
            Or download my resume for more information
          </p>
          <div className="text-center">
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href={Resume} target='_blank' rel="noreferrer" download className='text-white mx-2 hover:text-red-500'>
                <FontAwesomeIcon icon={faFilePdf} size="xl" className='mx-2'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
