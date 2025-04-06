'use client';

import Image from 'next/image';

const cardData = [
  {
    title: 'Renting',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    image: 'https://i.postimg.cc/Y9Lqq9Hm/welcome1.jpg',
  },
  {
    title: 'Buying',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    image: 'https://i.postimg.cc/m2yZrJ0V/welcome2.jpg',
  },
  {
    title: 'Selling',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    image: 'https://i.postimg.cc/Vvc1fWg3/welcome3.jpg',
  },
];

export default function Welcome() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#f9f9f9]">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
          E-Realstate
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-5 sm:p-6"
            >
              <div className="w-full h-52 sm:h-56 lg:h-64 relative mb-5">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
