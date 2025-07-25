import { useState } from 'react';
import { User, Mail, Edit2, Save, X } from 'lucide-react';

interface PersonalInfoProps {
  currentUser: {
    name: string;
    email: string;
  };
  onSaveName: (name: string) => void;
  onSaveEmail: (email: string) => void;
  onError: (error: string) => void;
}

export default function PersonalInfoSection({
  currentUser,
  onSaveName,
  onSaveEmail,
  onError
}: PersonalInfoProps) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [editedName, setEditedName] = useState(currentUser.name);
  const [editedEmail, setEditedEmail] = useState(currentUser.email);

  const handleSaveName = () => {
    if (editedName.trim()) {
      onSaveName(editedName.trim());
      setIsEditingName(false);
    }
  };

  const handleSaveEmail = () => {
    if (editedEmail.trim()) {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(editedEmail.trim())) {
        onError('Please enter a valid email address');
        return;
      }
      onSaveEmail(editedEmail.trim());
      setIsEditingEmail(false);
    }
  };

  const handleCancelName = () => {
    setEditedName(currentUser.name);
    setIsEditingName(false);
  };

  const handleCancelEmail = () => {
    setEditedEmail(currentUser.email);
    setIsEditingEmail(false);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <User className="w-5 h-5" />
        Personal Information
      </h3>
      
      {/* Name */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        {isEditingName ? (
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your full name"
            />
            <button
              onClick={handleSaveName}
              className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              title="Save"
            >
              <Save className="w-4 h-4" />
            </button>
            <button
              onClick={handleCancelName}
              className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              title="Cancel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg">
            <div className="flex items-center">
              <User className="w-5 h-5 text-gray-400 mr-3" />
              <span className="text-gray-900 font-medium">{currentUser.name}</span>
            </div>
            <button
              onClick={() => setIsEditingName(true)}
              className="p-2 text-gray-400 hover:text-orange-600 transition-colors"
              title="Edit name"
            >
              <Edit2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Email */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        {isEditingEmail ? (
          <div className="flex items-center space-x-2">
            <input
              type="email"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your email"
            />
            <button
              onClick={handleSaveEmail}
              className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              title="Save"
            >
              <Save className="w-4 h-4" />
            </button>
            <button
              onClick={handleCancelEmail}
              className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              title="Cancel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-gray-400 mr-3" />
              <span className="text-gray-900 font-medium">{currentUser.email}</span>
            </div>
            <button
              onClick={() => setIsEditingEmail(true)}
              className="p-2 text-gray-400 hover:text-orange-600 transition-colors"
              title="Edit email"
            >
              <Edit2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
