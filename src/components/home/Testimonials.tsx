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
    <section className="py-20 bg-brand-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            What Our Corporate Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading international companies for their Dubai accommodation needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-12 w-12 text-brand-primary" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-brand-primary">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Logos */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-brand-primary mb-4">
              Trusted by Leading Companies
            </h3>
          </div>
          <div className="flex justify-center items-center space-x-12 opacity-60 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300">
            <div className="bg-gray-200 h-12 w-24 rounded flex items-center justify-center text-xs font-bold text-gray-500">
              LOGO 1
            </div>
            <div className="bg-gray-200 h-12 w-24 rounded flex items-center justify-center text-xs font-bold text-gray-500">
              LOGO 2
            </div>
            <div className="bg-gray-200 h-12 w-24 rounded flex items-center justify-center text-xs font-bold text-gray-500">
              LOGO 3
            </div>
            <div className="bg-gray-200 h-12 w-24 rounded flex items-center justify-center text-xs font-bold text-gray-500">
              LOGO 4
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;