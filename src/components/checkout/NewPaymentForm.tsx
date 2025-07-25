import { useState } from 'react';

interface NewPaymentFormProps {
  onSave: (paymentData: {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    cardholderName: string;
    saveToProfile: boolean;
  }) => void;
  onCancel: () => void;
}

export default function NewPaymentForm({ onSave, onCancel }: NewPaymentFormProps) {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    saveToProfile: true
  });

  // Helper function to format card number
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  // Generate year options (2025-2030)
  const generateYearOptions = () => {
    const years = [];
    for (let year = 2025; year <= 2030; year++) {
      years.push(year.toString().slice(-2)); // Get last 2 digits
    }
    return years;
  };

  // Generate month options
  const generateMonthOptions = () => {
    const months = [];
    for (let month = 1; month <= 12; month++) {
      months.push(month.toString().padStart(2, '0'));
    }
    return months;
  };

  const handleSubmit = () => {
    // Validate card number (should be 16 digits)
    const cardDigits = formData.cardNumber.replace(/\s/g, '');
    if (!cardDigits || cardDigits.length !== 16 || !/^\d{16}$/.test(cardDigits)) {
      alert('Card number must be exactly 16 digits');
      return;
    }

    // Validate CVV (should be 3 digits)
    if (!formData.cvv || formData.cvv.length !== 3 || !/^\d{3}$/.test(formData.cvv)) {
      alert('CVV must be exactly 3 digits');
      return;
    }

    // Validate expiry date format (MM/YY)
    const expiryPattern = /^(0[1-9]|1[0-2])\/([2-3][0-9])$/;
    if (!formData.expiryDate || !expiryPattern.test(formData.expiryDate)) {
      alert('Expiry date must be in MM/YY format');
      return;
    }

    // Validate expiry date is not in the past
    const [month, year] = formData.expiryDate.split('/');
    const expiryDate = new Date(2000 + parseInt(year), parseInt(month) - 1);
    const now = new Date();
    if (expiryDate < now) {
      alert('Expiry date cannot be in the past');
      return;
    }

    if (!formData.cardholderName.trim()) {
      alert('Please enter cardholder name');
      return;
    }

    onSave(formData);
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 mt-4">
      <h3 className="font-medium text-gray-900 mb-4">Add New Payment Method</h3>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Card Number (16 digits)
          </label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            value={formData.cardNumber}
            onChange={(e) => {
              const formatted = formatCardNumber(e.target.value);
              if (formatted.replace(/\s/g, '').length <= 16) {
                setFormData({...formData, cardNumber: formatted});
              }
            }}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            maxLength={19} // 16 digits + 3 spaces
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cardholder Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            value={formData.cardholderName}
            onChange={(e) => setFormData({...formData, cardholderName: e.target.value})}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expiry Date (MM/YY)
            </label>
            <div className="flex space-x-2">
              <select
                value={formData.expiryDate.split('/')[0] || ''}
                onChange={(e) => {
                  const month = e.target.value;
                  const year = formData.expiryDate.split('/')[1] || '25';
                  setFormData({...formData, expiryDate: `${month}/${year}`});
                }}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">MM</option>
                {generateMonthOptions().map(month => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
              <span className="flex items-center text-gray-500">/</span>
              <select
                value={formData.expiryDate.split('/')[1] || ''}
                onChange={(e) => {
                  const year = e.target.value;
                  const month = formData.expiryDate.split('/')[0] || '01';
                  setFormData({...formData, expiryDate: `${month}/${year}`});
                }}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">YY</option>
                {generateYearOptions().map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              CVV (3 digits)
            </label>
            <input
              type="text"
              placeholder="123"
              value={formData.cvv}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                if (value.length <= 3) {
                  setFormData({...formData, cvv: value});
                }
              }}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              maxLength={3}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end space-x-3 mt-4">
        <button
          onClick={onCancel}
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
        >
          Save Payment Method
        </button>
      </div>
    </div>
  );
}
