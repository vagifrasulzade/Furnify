import {Link} from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Background from '@/assets/Image/background.jpg'
export default function Hero() {
  return (
  <section className='relative bg-gradient-to-r from-gray-100 to-gray-200 py-20'
        style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
                <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
                  Offer products to make your <br/>
                  interior <span className='text-primary'>Minimalist.</span>
              </h1>

                <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
                  we have helped more than 1000+ people to give<br/> 
                  perfect comfort to the interior of their home
                </p>

                <Link
                  to='/products/all'
                  className='inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors'
                >
                  See Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                
            </div>
        </div>

        <div className='absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full'></div>
        <div className='absolute bottom-10 right-10 w-16 h-16 bg-primary/20 rounded-full'></div>
    </section>
  );
}

