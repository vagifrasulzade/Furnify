import {Link} from 'react-router-dom';
import Logo from '../assets/logo.png';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
       <footer className="bg-secondary text-white py-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             <div>
               <img src={Logo} alt="Furnify Logo" className="h-16 mb-4" />
               <p className="text-gray-300 ">
                 Creating beautiful and functional spaces for modern living.
               </p>

               <div className="flex items-center space-x-4 mt-4">
                 <a href="https://www.facebook.com/" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                   <Facebook className="w-5 h-5" />
                 </a>
                 <a href="https://x.com/" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                   <Twitter className="w-5 h-5" />
                 </a>
                 <a href="https://www.instagram.com/" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                   <Instagram className="w-5 h-5" />
                 </a>
                 <a href="https://www.linkedin.com/" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                   <Linkedin className="w-5 h-5" />
                 </a>
               </div>
             </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-400">123 Furniture St, Design City, DC 12345</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <a href="mailto:info@furnify.com" className="text-gray-400 hover:text-white transition-colors">
                  info@furnify.com
                  </a>
                </li>
              </ul>
            </div>
             
             <div>
               <h4 className="text-lg font-semibold mb-4">Support</h4>
               <ul className="space-y-2 text-gray-400">
                 <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                 <li><Link to="/support" className="hover:text-white transition-colors">Contact Us</Link></li>
                 <li><Link to="/returns" className="hover:text-white transition-colors">Returns</Link></li>
               </ul>
             </div>
             
             
             
             <div>
               <h4 className="text-lg font-semibold mb-4">Terms and Conditions</h4>
               <ul className="space-y-2 text-gray-400">
                 <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                 <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping Policy</Link></li>
                 <li><Link to="/warranty" className="hover:text-white transition-colors">Warranty</Link></li>
               </ul>
             </div>
           </div>
           
           <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
             <div className='flex flex-col md:flex-row items-center justify-between'>
              <p className='text-gray-400 mb-4 md:mb-0'>&copy; 2025 Furnify. All Rights Reserved.</p>
              <div className="flex items-center justify-center space-x-6">
                <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </Link>
              </div>
             </div>
           </div>
         </div>
       </footer>   
  );
}
export default Footer;