import { Clock4, Mail, Phone } from 'lucide-react';
import { useState, type ChangeEvent, type FormEvent } from 'react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FAQ = {
  question: string;
  answer: string;
};

export default function Support() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const faqs: FAQ[] = [
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business days.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for all items in original condition. Return shipping is free for defective items.',
    },
    {
      question: 'Do you offer assembly services?',
      answer: 'Yes, we offer professional assembly services for an additional fee. This can be selected during checkout.',
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order ships, you will receive a tracking number via email. You can also check your order status in your account.',
    },
    {
      question: 'Do you offer financing options?',
      answer: 'Yes, we partner with several financing companies to offer flexible payment plans. Options are available at checkout.',
    },
  ];

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help! Find answers to common questions or get in touch with our support team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-lg">
                <h3 className="font-semibold">Message Sent!</h3>
                <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="shipping">Shipping Question</option>
                    <option value="return">Return/Exchange</option>
                    <option value="product">Product Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full h-12 btn-primary bg-orange-500 hover:bg-orange-600 text-white  border-transparent rounded-md px-4 py-2 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Other Ways to Reach Us</h3>
               <div className="space-y-2">
                <ul className="space-y-3">
                    <li className="flex items-center space-x-3 text-gray-600">
                        <Phone className="w-4 h-4 text-orange-500" />
                        <a href="tel:+1234567890" className="flex items-center text-gray-600">
                          +1 (234) 567-890
                        </a>
                    </li>
                    <li className="flex items-center space-x-3 text-gray-600">
                        <Mail className="w-4 h-4 text-orange-500" />
                        <a href="mailto:info@furnify.com" className="flex items-center text-gray-600">
                        info@furnify.com
                        </a>
                    </li>
                    <li className="flex items-center space-x-3 text-gray-600">
                        <Clock4 className="w-4 h-4 text-orange-500" />
                        <span className="text-gray-600">Mon-Fri: 9 AM - 6 PM</span>
                    </li>
                </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


