import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            8,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          500,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.99,.98,.99,.99)",    // Easing on enter/exit.
}

const test = () => {
  return (
<div>
  <h2 className=" sr-only">Steps</h2>

  <div className="h-[100rem] after:mt-4 after:block after:h-1 after:w-[72rem] ml-40 after:rounded-lg after:bg-gray-200">
    <ol className="grid grid-cols-4 text-sm font-medium text-gray-500">
      <li className="relative flex justify-start text-blue-600">
        <span className="absolute -bottom-[1.75rem] start-0 rounded-full bg-blue-600 text-white">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </span>

        <span className="hidden sm:block">
                
                  <div className="bg-purple-200 p-6 -ml-32 w-80 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-600 mb-2">1. Profile Assessment</h3>
                    <p className="text-gray-600">
                      Submit basic details for profile evaluation.
                    </p>
                  </div></span>

        <svg
          className="size-6 sm:hidden"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
          />
        </svg>
      </li>

      <li className="relative flex justify-center text-blue-600">
        <span
          className="absolute -bottom-[1.75rem] left-1/2 -translate-x-1/2 rounded-full bg-blue-600 text-white"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </span>

        <span className="hidden sm:block"> <div className="bg-purple-200 w-80 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-600 mb-2">2. Application</h3>
                    <p className="text-white">
                      Fill out scholarship form and submit supporting essay.
                    </p>
                  </div> </span>

        <svg
          className="mx-auto size-6 sm:hidden"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </li>

      <li className="relative flex justify-end">
        <span className="absolute -bottom-[1.75rem] end-0 rounded-full bg-gray-600 text-white">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </span>

        <span className="hidden sm:block"> <div className="bg-purple-200 -mr-40 w-80 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-700 mb-2">3. Document Submission</h3>
                    <p className="text-gray-700">
                      Selected candidates interviewed by scholarship committee.
                    </p>
                  </div> </span>

        <svg
          className="size-6 sm:hidden"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      </li>
    </ol>
  </div>
</div>
  )
}

export default test;