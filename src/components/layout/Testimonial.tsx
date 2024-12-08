import { FaStar } from "react-icons/fa6";

const Testimonial = () => {
  // Testimonial Data
  const testimonials = [
    {
      name: "Sarah M. ✅",
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      stars: 5,
    },
    {
      name: "Alex K. ✅",
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      stars: 5,
    },
    {
      name: "James L. ✅",
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      stars: 5,
    },
  ];

  return (
    <section>
      {/* Testimonial Section */}
      <div className="mt-16 mb-32 px-5 md:px-[50px]">
        <h2 className="text-5xl font-bold mb-8">OUR HAPPY CUSTOMERS</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md h-60">
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 flex gap-[6px]">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <FaStar key={i} className="h-[22px] w-[22px]" />
                  ))}
                </span>
              </div>
              <h3 className="font-bold">{testimonial.name}</h3>
              <p className="text-gray-700 mt-2">
                &quot;{testimonial.text}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
