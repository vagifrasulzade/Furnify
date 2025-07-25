import {Link} from 'react-router-dom';
export default function Contact() {
  return (
    <section className='py-16 bg-gray-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                    Contact us if you need anything,<br/>
                    we are ready to serve you
                    </h2>

                    <Link  to='/support'
                    className='inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors'>
                    Contact Us
                    </Link>
                </div>
            </div>
    </section>
  );
}
