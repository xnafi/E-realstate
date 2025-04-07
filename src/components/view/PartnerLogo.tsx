import Image from "next/image";

const partnerLogos = [
  { src: "https://i.postimg.cc/7hpmdwSb/wild-ridge-logo.png", alt: "Wildridge" },
  { src: "https://i.postimg.cc/Vkw3kWbv/hillstrom.jpg", alt: "Hillstrom Real Estate" },
  { src: "https://i.postimg.cc/PrWR9vFj/horizonhomes.png", alt: "Horizon Homes" },
  { src: "https://i.postimg.cc/QdN0z4TQ/real-estate-company.jpg", alt: "Home Real Estate" },
  { src: "https://i.postimg.cc/ZnkwDJ8n/Charles-Bentley-CHSA.png", alt: "Charles Bentley" },
];

const PartnerLogo = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center grayscale hover:grayscale-0 transition duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={100}
                className="object-contain h-20 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogo;
