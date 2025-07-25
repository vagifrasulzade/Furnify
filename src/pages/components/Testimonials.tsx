import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import Image from '../../assets/Image/Living Room.jpg';



export default function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000); 

        return () => clearInterval(interval); 
    }, []);
    const goToSlide = (index: number) => {
        setCurrentTestimonial(index);
    };

    return (
        <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">What are they saying?</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4 animate-fade-in">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold mb-1">{testimonials[currentTestimonial].name}</h4>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 ">
                        {testimonials[currentTestimonial].text}
                    </p>
                  </div>
                </div>
              </div>
                <div className="mt-6 flex space-x-2">
                    {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-primary' : 'bg-gray-500 hover:bg-gray-600'}`}
                    />
                    ))}
                </div>
            </div>

            <div className="relative">
              <img
                src={Image}
                alt="Living Room"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
       
    );
}