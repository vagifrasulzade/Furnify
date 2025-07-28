import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  ProfileHeader,
  ProfileCompletion,
  AlertMessage,
  PersonalInfoSection,
  SecuritySection,
  PaymentSection,
  AddressSection,
  AccountActions,
  DeleteConfirmModal,
  type PaymentInfo,
  type AddressInfo
} from '@/types/profile';

export default function Profile() {
  const { currentUser, logout, updateUser } = useAuth();
  const navigate = useNavigate();
  
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: '•••• •••• •••• 1234',
    cardHolder: currentUser?.name || '',
    expiryDate: '12/25',
    cvv: '•••'
  });
  
  const [addressInfo, setAddressInfo] = useState<AddressInfo>({
    street: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States'
  });
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    if (currentUser?.email) {
      const paymentKey = `paymentInfo_${currentUser.email}`;
      const savedPaymentInfo = localStorage.getItem(paymentKey);
      if (savedPaymentInfo) {
        setPaymentInfo(JSON.parse(savedPaymentInfo));
      }

      const addressKey = `addressInfo_${currentUser.email}`;
      const savedAddressInfo = localStorage.getItem(addressKey);
      if (savedAddressInfo) {
        setAddressInfo(JSON.parse(savedAddressInfo));
      }
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      const profileData = {
        name: currentUser.name,
        email: currentUser.email,
        lastUpdated: new Date().toISOString()
      };
      localStorage.setItem(`profile_${currentUser.email}`, JSON.stringify(profileData));
    }
  }, [currentUser]);

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full mx-auto p-6">
          <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
            <p className="text-gray-600 mb-4">Please log in to view your profile.</p>
            <button
              onClick={() => navigate('/auth/login')}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleSaveName = (name: string) => {
    updateUser({ name });
    
    const profileKey = `profile_${currentUser?.email}`;
    const existingProfile = JSON.parse(localStorage.getItem(profileKey) || '{}');
    const updatedProfile = {
      ...existingProfile,
      name,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(profileKey, JSON.stringify(updatedProfile));
    
    setSuccess('Name updated and saved successfully!');
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleSaveEmail = (email: string) => {
    updateUser({ email });
    
    const profileKey = `profile_${currentUser?.email}`;
    const existingProfile = JSON.parse(localStorage.getItem(profileKey) || '{}');
    const updatedProfile = {
      ...existingProfile,
      email,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(profileKey, JSON.stringify(updatedProfile));
    
    setError('');
    setSuccess('Email updated and saved successfully!');
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleSavePassword = (currentPassword: string, newPassword: string, confirmPassword: string) => {
    if (currentPassword !== currentUser?.password) {
      setError('Current password is incorrect');
      return;
    }
    
    updateUser({ password: newPassword });
    
    const profileKey = `profile_${currentUser?.email}`;
    const existingProfile = JSON.parse(localStorage.getItem(profileKey) || '{}');
    const updatedProfile = {
      ...existingProfile,
      passwordLastChanged: new Date().toISOString(),
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(profileKey, JSON.stringify(updatedProfile));
    
    setError('');
    setSuccess('Password updated and saved successfully!');
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleSavePayment = (payment: PaymentInfo) => {
    const paymentKey = `paymentInfo_${currentUser?.email}`;
    localStorage.setItem(paymentKey, JSON.stringify(payment));

    const paymentMethodsKey = `paymentMethods_${currentUser?.email}`;
    const existingMethods = JSON.parse(localStorage.getItem(paymentMethodsKey) || '[]');
    
    const cardExists = existingMethods.find((method: any) => 
      method.cardNumber.slice(-4) === payment.cardNumber.slice(-4)
    );

    if (!cardExists) {
      const newMethod = {
        id: Date.now().toString(),
        type: 'card',
        cardNumber: payment.cardNumber,
        expiryDate: payment.expiryDate,
        cvv: payment.cvv,
        cardholderName: payment.cardHolder,
        isDefault: existingMethods.length === 0
      };
      existingMethods.push(newMethod);
      localStorage.setItem(paymentMethodsKey, JSON.stringify(existingMethods));
    }

    setPaymentInfo(payment);
    setError('');
    setSuccess('Payment information updated and saved successfully!');
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleSaveAddress = (address: AddressInfo) => {
    const addressKey = `addressInfo_${currentUser?.email}`;
    localStorage.setItem(addressKey, JSON.stringify(address));
    
    const addressesKey = `addresses_${currentUser?.email}`;
    const existingAddresses = JSON.parse(localStorage.getItem(addressesKey) || '[]');
    
    const addressExists = existingAddresses.find((addr: any) => 
      addr.street === address.street && 
      addr.city === address.city && 
      addr.zipCode === address.zipCode
    );

    if (!addressExists) {
      const newAddress = {
        id: Date.now().toString(),
        type: 'shipping',
        street: address.street,
        city: address.city,
        state: address.state,
        zipCode: address.zipCode,
        country: address.country,
        isDefault: existingAddresses.length === 0
      };
      existingAddresses.push(newAddress);
      localStorage.setItem(addressesKey, JSON.stringify(existingAddresses));

      const billingAddress = { ...newAddress, id: (Date.now() + 1).toString(), type: 'billing' };
      existingAddresses.push(billingAddress);
      localStorage.setItem(addressesKey, JSON.stringify(existingAddresses));
    }
    
    setAddressInfo(address);
    setError('');
    setSuccess('Address information updated and saved successfully!');
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleSaveAllData = () => {
    if (!currentUser?.email) return;

    const completeProfileData = {
      personal: {
        name: currentUser.name,
        email: currentUser.email
      },
      payment: paymentInfo,
      address: addressInfo,
      lastFullSave: new Date().toISOString(),
      version: '1.0'
    };

    localStorage.setItem(`completeProfile_${currentUser.email}`, JSON.stringify(completeProfileData));
    
    setSuccess('All profile data saved successfully!');
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleExportData = () => {
    if (!currentUser?.email) return;

    const exportData = {
      personal: {
        name: currentUser.name,
        email: currentUser.email
      },
      payment: {
        cardHolder: paymentInfo.cardHolder,
        cardNumber: paymentInfo.cardNumber,
        expiryDate: paymentInfo.expiryDate
      },
      address: addressInfo,
      exportDate: new Date().toISOString()
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `profile-data-${currentUser.email}-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setSuccess('Profile data exported successfully!');
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleDeleteAccount = () => {
    logout();
    navigate('/');
    localStorage.removeItem('users');
    localStorage.removeItem('currentUser');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const clearError = () => setError('');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg border overflow-hidden">
          <ProfileHeader />

          <div className="p-6">
            <ProfileCompletion
              userName={currentUser.name}
              userEmail={currentUser.email}
              hasPaymentInfo={paymentInfo.cardNumber !== '•••• •••• •••• 1234'}
              hasAddressInfo={addressInfo.street !== '123 Main Street'}
            />

            {success && <AlertMessage type="success" message={success} />}
            {error && <AlertMessage type="error" message={error} />}

            <div className="space-y-8">
              <PersonalInfoSection
                currentUser={currentUser}
                onSaveName={handleSaveName}
                onSaveEmail={handleSaveEmail}
                onError={setError}
              />

              <SecuritySection
                onSavePassword={handleSavePassword}
                onError={setError}
              />

              <PaymentSection
                paymentInfo={paymentInfo}
                onSavePayment={handleSavePayment}
                onError={setError}
              />

              <AddressSection
                addressInfo={addressInfo}
                onSaveAddress={handleSaveAddress}
                onError={setError}
              />

              <AccountActions
                onSaveAllData={handleSaveAllData}
                onExportData={handleExportData}
                onLogout={handleLogout}
                onDeleteAccount={() => setShowDeleteConfirm(true)}
              />
            </div>
          </div>
        </div>

        <DeleteConfirmModal
          isOpen={showDeleteConfirm}
          onConfirm={handleDeleteAccount}
          onCancel={() => setShowDeleteConfirm(false)}
        />
      </div>
    </div>
  );
}
