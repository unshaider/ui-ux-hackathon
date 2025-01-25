import React from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.Co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    verified: true,
  },
  {
    id: 2,
    name: "Sarah M.",
    rating: 5,
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.Co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    verified: true,
  },
  {
    id: 3,
    name: "Alex K.",
    rating: 5,
    comment:
      "I really love that they align with my personal style while to be a challenge until I discovered Shop.Co. The range of clothes they offer bring out my individual style while suiting any occasion.",
    verified: true,
  },
  {
    id: 4,
    name: "James L.",
    rating: 5,
    comment:
      "They have some of the most unique fashion pieces, I've found to have stumbled upon Shop.Co. The selection of trendy clothes keeps me up to date with latest trends.",
    verified: true,
  },
  {
    id: 5,
    name: "Mooen",
    rating: 5,
    comment:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    verified: true,
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border">
    <div className="flex text-yellow-400 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
    </div>
    <div className="flex items-center gap-2 mb-4">
      <span className="font-medium text-xl">{testimonial.name}</span>
      {testimonial.verified && (
        <span className="text-green-100 bg-green-600 text-xs px-2 py-1 rounded-full">
          ✓
        </span>
      )}
    </div>
    <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
  </div>
);

const TestimonialsSlider = () => {
  return (
    <div className="w-full py-16">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold">OUR HAPPY CUSTOMERS</h2>
            <div className="flex items-center mr-12 mt-10 justify-center">
              <CarouselPrevious className="relative left-8 hover:bg-main" />
              <CarouselNext className="relative hover:bg-main" />
            </div>
          </div>

          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
