/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon } from '@heroicons/react/outline'

/* import { meduIcons2 } from './meduIcons' */

const features = [
  {
    name: 'Cursos en Línea',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },
  {
    name: 'Cirugías en Video',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },
  {
    name: 'Pláticas Médicas',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },
  {
    name: 'Artículos Académicos',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },
  {
    name: 'Casos Clínicos',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },
  {
    name: 'Podcast',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },
];

export function FeatureSection() {
  return (
    <div className="py-16 font-sans bg-white dark:bg-black lg:py-40">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold tracking-wide uppercase text-meduBlue">
            Patrocinios
          </h2>
          <p className="mt-2 mb-0 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
            Una mejor forma de educar
          </p>
          <p className="max-w-2xl mt-4 mb-0 text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-gradient-to-br from-red-400 to-blue-500">
                    <feature.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <p className="mb-0 ml-16 text-lg font-medium leading-6 text-gray-900 dark:text-gray-200">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
