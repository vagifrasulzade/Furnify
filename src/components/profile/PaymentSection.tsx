import { useState } from 'react';
import { CreditCard, Edit2, Save, X } from 'lucide-react';

interface PaymentInfo {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

interface PaymentSectionProps {
  paymentInfo: PaymentInfo;
  onSavePayment: (paymentInfo: PaymentInfo) => void;
  onError: (error: string) => void;
}

export default function PaymentSection({ paymentInfo, onSavePayment, onError }: PaymentSectionProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPayment, setEditedPayment] = useState(paymentInfo);

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

  const handleSave = () => {
    // Validate card number (should be 16 digits)
    const cardDigits = editedPayment.cardNumber.replace(/\s/g, '');
    if (cardDigits.length !== 16 || !/^\d{16}$/.test(cardDigits)) {
      onError('Card number must be exactly 16 digits');
      return;
    }

    // Validate CVV (should be 3 digits)
    if (editedPayment.cvv.length !== 3 || !/^\d{3}$/.test(editedPayment.cvv)) {
      onError('CVV must be exactly 3 digits');
      return;
    }

    // Validate expiry date format (MM/YY)
    const expiryPattern = /^(0[1-9]|1[0-2])\/([2-3][0-9])$/;
    if (!expiryPattern.test(editedPayment.expiryDate)) {
      onError('Expiry date must be in MM/YY format');
      return;
    }

    // Validate expiry date is not in the past
    const [month, year] = editedPayment.expiryDate.split('/');
    const expiryDate = new Date(2000 + parseInt(year), parseInt(month) - 1);
    const now = new Date();
    if (expiryDate < now) {
      onError('Expiry date cannot be in the past');
      return;
    }

    onSavePayment(editedPayment);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedPayment(paymentInfo);
    setIsEditing(false);
  };

  return (
    <div className="border-t pt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <CreditCard className="w-5 h-5" />
        Payment Information
      </h3>
      
      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Card Number (16 digits)
            </label>
            <input
              type="text"
              value={editedPayment.cardNumber}
              onChange={(e) => {
                const formatted = formatCardNumber(e.target.value);
                if (formatted.replace(/\s/g, '').length <= 16) {
                  setEditedPayment({...editedPayment, cardNumber: formatted});
                }
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="1234 5678 9012 3456"
              maxLength={19} // 16 digits + 3 spaces
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Card Holder Name
            </label>
            <input
              type="text"
              value={editedPayment.cardHolder}
              onChange={(e) => setEditedPayment({...editedPayment, cardHolder: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="John Doe"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expiry Date (MM/YY)
              </label>
              <div className="flex space-x-2">
                <select
                  value={editedPayment.expiryDate.split('/')[0] || ''}
                  onChange={(e) => {
                    const month = e.target.value;
                    const year = editedPayment.expiryDate.split('/')[1] || '25';
                    setEditedPayment({...editedPayment, expiryDate: `${month}/${year}`});
                  }}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">MM</option>
                  {generateMonthOptions().map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
                <span className="flex items-center text-gray-500">/</span>
                <select
                  value={editedPayment.expiryDate.split('/')[1] || ''}
                  onChange={(e) => {
                    const year = e.target.value;
                    const month = editedPayment.expiryDate.split('/')[0] || '01';
                    setEditedPayment({...editedPayment, expiryDate: `${month}/${year}`});
                  }}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
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
                value={editedPayment.cvv}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, '');
                  if (value.length <= 3) {
                    setEditedPayment({...editedPayment, cvv: value});
                  }
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="123"
                maxLength={3}
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2 pt-4">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Save Payment Info
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg">
            <div className="flex items-center">
              <CreditCard className="w-5 h-5 text-gray-400 mr-3" />
              <div>
                <p className="text-gray-900 font-medium">{paymentInfo.cardNumber}</p>
                <p className="text-sm text-gray-500">{paymentInfo.cardHolder}</p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 text-gray-400 hover:text-orange-600 transition-colors"
              title="Edit payment info"
            >
              <Edit2 className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 px-4 py-3 rounded-lg">
              <p className="text-sm text-gray-500">Expires</p>
              <p className="text-gray-900 font-medium">{paymentInfo.expiryDate}</p>
            </div>
            <div className="bg-gray-50 px-4 py-3 rounded-lg">
              <p className="text-sm text-gray-500">CVV</p>
              <p className="text-gray-900 font-medium">{paymentInfo.cvv}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
