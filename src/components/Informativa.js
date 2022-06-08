/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Empieza ya', href: '#' },
  { name: 'Novedades', href: '#' },
  { name: 'Contacto', href: '#' },
]

export default function Example() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Ac Solves</span>
                      <img
                        alt="Workflow"
                        className="h-8 w-auto sm:h-16"
                        src="data:image/jpeg;base64,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"
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  ))}
                  <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Iniciar Sesión
                  </a>
                </div>
              </nav>
            </div>

            <Transition
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
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="/login"
                    className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Iniciar Sesión
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">AC Solves</span>{' '}
                <span className="block text-indigo-600 xl:inline">Proyecto Parqueadero </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Este proyecto de parqueadero, permitira a los lojanos tener un servicio de calidad para obtener un parqueadero 
                de forma sencilla.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                     Mapa de Parqueaderos
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Ayuda
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://www.tecnogus.com.co/wp-content/uploads/2021/10/estacionamiento-1.jpg"
          alt=""
        />
      </div>
    </div>
  )
}
