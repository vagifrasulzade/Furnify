import { User } from 'lucide-react';

export default function ProfileHeader() {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-8">
      <div className="flex items-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
          <User className="w-8 h-8 text-white" />
        </div>
        <div className="ml-4">
          <h1 className="text-2xl font-bold text-white">My Profile</h1>
          <p className="text-orange-100">Manage your account information</p>
        </div>
      </div>
    </div>
  );
}
