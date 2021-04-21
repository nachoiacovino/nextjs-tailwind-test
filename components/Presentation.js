/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'

// import logo from '../../images/logos/Logo1.svg'
const navigation = [
  { name: '¿Quiénes somos?', href: '#quienes' },
  //   { name: 'fsd', href: '#' },
  //   { name: 'Marketplace', href: '#' },
  //   { name: 'Company', href: '#' },
];

export function Presentation() {
  return (
    <Popover className="relative overflow-hidden bg-white dark:bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto font-sans max-w-7xl lg:h-screen">
            <div className="relative z-10 pb-8 bg-white dark:bg-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:h-full lg:pb-28 xl:pb-32">
              <svg
                className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 dark:text-black lg:block"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="#" alt="">
                        <span className="sr-only">Workflow</span>
                        {/* <svg
                            className='fill-current flex-no-shrink' 
                            version="1.0" width="100px" height="100px" viewBox="0 0 80 80"><path d="M43 2.3C30.2 6.6 21.9 13 13.9 24.4 8.4 32.2 3.6 43.7 1.4 54.8c-2.5 11.8-1.5 35.7 2 48.1 5.2 18.6 13.8 33.5 26.6 46.2 13.9 13.8 26.8 19.8 44.5 20.6 10.2.5 11.3.8 14.7 3.4 10.6 8.4 30.8 18.5 47.3 23.5 8.3 2.6 10.3 2.8 26 2.9 16.3 0 17.2-.1 22.5-2.6 6.3-3 11.3-7.7 14.1-13.1 3-5.9 2.7-20.7-.6-29.4-7.3-19.3-29.5-42.6-54.1-56.7l-7-4-1.2-10.1c-1.7-13.9-4.4-23.2-10.7-36.1-11.4-23.5-30.3-40.6-51-46-9-2.3-23.5-2-31.5.8zm29 6.2c12.7 3.4 26.4 12.8 36 24.8 10.2 12.8 19.5 35.4 21.2 51.9l.5 4.7-3.6-1.5C89.5 72.6 55.7 76 47 96.2c-1.9 4.5-2.2 6.4-1.8 14.2.3 6.1 1.2 11 2.7 14.8 3.3 8.6 11.4 20.3 20.4 29.6 7.8 7.9 7.9 8.2 5.1 8.2-4.8 0-13.5-2.7-21.4-6.7-5.8-2.9-9.7-5.9-17-13.3-12.8-12.8-19.9-25.4-25.2-44.8C6.9 87.6 6.6 61.8 9.3 52 18.4 19.2 44.4 1.2 72 8.5zm33.1 80.3c4.1 1.2 11.5 3.8 16.3 5.8l8.7 3.6-.7 6.2c-3.1 28.2-17.8 49.8-38.7 56.5-3.7 1.3-3.7 1.3-10.3-4.5-9.2-8.1-18.8-20.4-23.6-30.3-7.3-14.8-6.3-26.6 2.7-33.8 6.5-5.2 11.6-6.4 25.5-5.9 8.5.2 14.9 1 20.1 2.4zm42.5 19.8c15.9 10.4 30.9 25.3 39.1 38.7 16 26.4 6.7 45.8-22.2 45.9-4.9.1-11.8-.5-15.3-1.1-14.2-2.7-33.5-10.7-47.3-19.6l-7.2-4.7 6.4-3.1c11.9-5.9 23.2-18.8 29.2-33.3 2.5-6.2 5.2-16.5 6.2-24.7.4-3.3 1-4.5 1.8-4 .7.3 4.8 3 9.3 5.9z"/></svg> */}

                        {/* <svg width="81" height="20" ><defs><path id="a" d="M0 0h80.842v19.843H0z"/></defs><g  fill-rule="evenodd"><mask id="b" ><use/></mask><path d="M0 17.721c-.021 1.379.724 2.122 2.017 2.122 1.029 0 1.927-.174 1.905-1.159l-.066-5.71c-.021-1.05-.11-4.048-.175-6.323.81 1.838 1.928 4.288 4.206 8.86.46.832 1.118 1.225 2.038 1.225 1.073 0 1.534-.262 1.885-.896 2.43-4.813 3.701-7.308 4.578-9.145a453.075 453.075 0 00-.22 6.323l-.065 4.726c-.022 1.378.767 2.1 2.191 2.1 1.359 0 1.884-.372 1.884-1.16L20.047 2.1c0-1.356-.789-2.1-2.235-2.1-.942 0-1.687.11-2.037.81l-5.521 11.004L5.346 1.597C4.82.504 3.812.022 2.519.022 1.293.022.33.306.285 1.335L0 17.721zm25.26-.218c0 1.357.746 2.1 2.104 2.1h10.1c1.315 0 2.037-.722 2.037-2.035 0-.744-.22-1.225-.985-1.225h-9.05v-4.791h6.814c1.468 0 2.038-.744 2.038-2.078 0-.744-.24-1.16-.985-1.16h-7.866V3.413h7.953c1.314 0 2.037-.722 2.037-2.034 0-.744-.219-1.226-.985-1.226H26.444c-.723 0-1.183.438-1.183 1.182v16.168zm18.119-.81c0 .57.088 1.05.46 1.444.92 1.072 4.316 1.706 6.923 1.706 6.375 0 10.1-3.719 10.1-9.976 0-6.257-3.396-9.714-9.86-9.714h-6.44c-.723 0-1.183.438-1.183 1.182v15.358zm4.206-.788V3.413h3.287c3.987 0 6.002 2.166 6.002 6.454 0 4.09-2.213 6.498-5.849 6.498-1.402 0-2.542-.131-3.44-.46zm17.089-4.178c0 5.076 3.001 8.116 8.018 8.116 5.039 0 8.15-3.128 8.15-8.116V2.122c0-1.356-.745-2.1-2.104-2.1-1.094 0-1.796.306-1.796.897v10.808c0 2.931-1.49 4.638-4.03 4.638-2.542 0-4.032-1.707-4.032-4.638V2.122c0-1.356-.79-2.1-2.213-2.1-1.227 0-1.993.306-1.993.897v10.808z" /></g></svg> */}
                        {/* <svg 
                            viewBox="0 0 80 80"  
                            className="w-auto h-8 my-auto text-black fill-current dark:text-white" ><defs><path id="a" d="M0 0h80.842v19.843H0z"/></defs><g  ><path d="M0 17.721c-.021 1.379.724 2.122 2.017 2.122 1.029 0 1.927-.174 1.905-1.159l-.066-5.71c-.021-1.05-.11-4.048-.175-6.323.81 1.838 1.928 4.288 4.206 8.86.46.832 1.118 1.225 2.038 1.225 1.073 0 1.534-.262 1.885-.896 2.43-4.813 3.701-7.308 4.578-9.145a453.075 453.075 0 00-.22 6.323l-.065 4.726c-.022 1.378.767 2.1 2.191 2.1 1.359 0 1.884-.372 1.884-1.16L20.047 2.1c0-1.356-.789-2.1-2.235-2.1-.942 0-1.687.11-2.037.81l-5.521 11.004L5.346 1.597C4.82.504 3.812.022 2.519.022 1.293.022.33.306.285 1.335L0 17.721zm25.26-.218c0 1.357.746 2.1 2.104 2.1h10.1c1.315 0 2.037-.722 2.037-2.035 0-.744-.22-1.225-.985-1.225h-9.05v-4.791h6.814c1.468 0 2.038-.744 2.038-2.078 0-.744-.24-1.16-.985-1.16h-7.866V3.413h7.953c1.314 0 2.037-.722 2.037-2.034 0-.744-.219-1.226-.985-1.226H26.444c-.723 0-1.183.438-1.183 1.182v16.168zm18.119-.81c0 .57.088 1.05.46 1.444.92 1.072 4.316 1.706 6.923 1.706 6.375 0 10.1-3.719 10.1-9.976 0-6.257-3.396-9.714-9.86-9.714h-6.44c-.723 0-1.183.438-1.183 1.182v15.358zm4.206-.788V3.413h3.287c3.987 0 6.002 2.166 6.002 6.454 0 4.09-2.213 6.498-5.849 6.498-1.402 0-2.542-.131-3.44-.46zm17.089-4.178c0 5.076 3.001 8.116 8.018 8.116 5.039 0 8.15-3.128 8.15-8.116V2.122c0-1.356-.745-2.1-2.104-2.1-1.094 0-1.796.306-1.796.897v10.808c0 2.931-1.49 4.638-4.03 4.638-2.542 0-4.032-1.707-4.032-4.638V2.122c0-1.356-.79-2.1-2.213-2.1-1.227 0-1.993.306-1.993.897v10.808z"/></g></svg> */}
                        {/* <img
                          alt=''
                          className="w-auto h-full text-black fill-current sm:h-10"
                          src={logo}
                        /> */}
                      </a>
                      <div className="flex items-center -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="w-6 h-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="font-medium text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                    <a
                      href="/"
                      className="font-medium text-red-600 hover:text-indigo-500"
                    >
                      Contactar
                    </a>
                  </div>
                </nav>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
                >
                  <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                    <div className="flex items-center justify-between px-5 pt-4">
                      <div>
                        <img
                          className="w-auto h-8"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          alt=""
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close main menu</span>
                          <XIcon className="w-6 h-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="block w-full px-5 py-3 font-medium text-center text-indigo-600 bg-gray-50 hover:bg-gray-100"
                    >
                      Log in
                    </a>
                  </div>
                </Popover.Panel>
              </Transition>

              <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left from-green-400 to-blue-500">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline dark:text-white">
                      MEDU Publicidad
                    </span>{' '}
                    <span className="block text-transparent bg-clip-text bg-gradient-to-l from-meduBlue to-meduGreen xl:inline ">
                      trabajemos juntos
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua.
                  </p>
                  {/* <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="#"
                        className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        Get started
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#"
                        className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                      >
                        Live demo
                      </a>
                    </div>
                  </div> */}
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt=""
            />
          </div>
        </>
      )}
    </Popover>
  );
}
