'use client';

import Image from 'next/image';

const lifestyles = {
  leftTop: {
    title: 'Apartment',
    properties: '17 PROPERTIES',
    image: 'https://i.postimg.cc/fbTymZm4/sven-brandsma-Gm-Ri-N7t-VW1w-unsplash.jpg',
  },
  leftBottom: [
    {
      title: 'Single Family Home',
      properties: '12 PROPERTIES',
      image: 'https://i.postimg.cc/dtP0nGrj/katja-rooke-77-JACsl-A8-G0-unsplash.jpg',
    },
    {
      title: 'Studio',
      properties: '7 PROPERTIES',
      image: 'https://i.postimg.cc/nc4hWM1b/stephen-olmo-f4-Yx-Cycya-AA-unsplash.jpg',
    },
  ],
  rightTop: [
    {
      title: 'Office',
      properties: '3 PROPERTIES',
      image: 'https://i.postimg.cc/QdDHNcMd/jonathan-borba-kjh70-RMHDco-unsplash.jpg',
    },
    {
      title: 'Shop',
      properties: '3 PROPERTIES',
      image: 'https://i.postimg.cc/4djxD9MZ/albero-furniture-bratislava-x-Ru-HNSq5r-D0-unsplash.jpg',
    },
  ],
  rightBottom: {
    title: 'Villa',
    properties: '10 PROPERTIES',
    image: 'https://i.postimg.cc/BnJnfsh8/lit-lamp-beside-leather-couch.jpg',
  },
};

const Card = ({
  title,
  properties,
  image,
}: {
  title: string;
  properties: string;
  image: string;
}) => (
  <div className="relative group overflow-hidden rounded-md h-full w-full">
    <Image
      src={image}
      alt={title}
      width={600}
      height={400}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all" />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
      <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
      <p className="text-xs md:text-sm mt-1">{properties}</p>
    </div>
  </div>
);

const Lifestyles = () => {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="title-header-text mb-4">
            Explore Lifestyles
          </h2>
          <p className="title-para-text mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Top: Apartment */}
            <div className="h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px]">
              <Card {...lifestyles.leftTop} />
            </div>

            {/* Bottom: Single Family + Studio */}
            <div className="flex flex-col sm:flex-row gap-6 h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px]">
              {lifestyles.leftBottom.map((item, idx) => (
                <div key={idx} className="w-full sm:w-1/2">
                  <Card {...item} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Top: Office + Shop */}
            <div className="flex flex-col sm:flex-row gap-6 h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px]">
              {lifestyles.rightTop.map((item, idx) => (
                <div key={idx} className="w-full sm:w-1/2">
                  <Card {...item} />
                </div>
              ))}
            </div>

            {/* Bottom: Villa */}
            <div className="h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px]">
              <Card {...lifestyles.rightBottom} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifestyles;
