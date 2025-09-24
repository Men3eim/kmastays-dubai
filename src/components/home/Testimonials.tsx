import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'Managing Director, Global Finance Corp',
      content: 'KMASTAYS provided exceptional corporate housing for our Dubai expansion team. The location in DIFC was perfect, and the service was impeccable.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Michael Chen',
      position: 'Regional Director, Tech Solutions Ltd',
      content: 'Outstanding accommodation for our 6-month project. The team appreciated the luxury amenities and proximity to our Business Bay office.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Emma Williams',
      position: 'VP Operations, International Banking',
      content: 'The corporate billing process was seamless, and our executives loved the Downtown Dubai location. Highly recommend for business relocations.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-brand-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            What Our Corporate Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading international companies for their Dubai accommodation needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-10">
                <Quote className="h-8 w-8 sm:h-12 sm:w-12 text-brand-primary" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed italic text-sm sm:text-base">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-brand-primary text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Logos */}
        <div className="mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-gray-200">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg font-semibold text-brand-primary mb-4">
              Trusted by Leading Companies
            </h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 opacity-60 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300">
            <div className="bg-gray-200 h-10 w-20 sm:h-12 sm:w-24 rounded flex items-center justify-center text-xs font-bold text-gray-500">
              LOGO 1
            </div>
            <div className="bg-gray-200 h-10 w-20 sm:h-12 sm:w-24 rounded flex items-center justify-center text-xs font-bold text-gray-500">
              LOGO 2
            </div>
            <div className="bg-gray-200 h-10 w-20 sm:h-12 sm:w-24 rounded flex items-center justify-center text-xs font-bold text-gray-500">
              LOGO 3
            </div>
            <div className="bg-gray-200 h-10 w-20 sm:h-12 sm:w-24 rounded flex items-center justify-center text-xs font-bold text-gray-500">
              LOGO 4
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;