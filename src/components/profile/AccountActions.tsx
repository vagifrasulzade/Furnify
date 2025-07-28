import { Settings, Save, LogOut, Trash2 } from 'lucide-react';

interface AccountActionsProps {
  onSaveAllData: () => void;
  // onExportData: () => void;
  onLogout: () => void;
  onDeleteAccount: () => void;
}

export default function AccountActions({
  onSaveAllData,
  // onExportData,
  onLogout,
  onDeleteAccount
}: AccountActionsProps) {
  return (
    <div className="border-t pt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Settings className="w-5 h-5" />
        Account Actions
      </h3>
      <div className="space-y-3">
        <button
          onClick={onSaveAllData}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <Save className="w-4 h-4" />
          Save All Profile Data
        </button>
        
        {/* <button
          onClick={onExportData}
          className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
        >
          <Settings className="w-4 h-4" />
          Export Profile Data
        </button> */}
        
        <button
          onClick={onLogout}
          className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
        
        <button
          onClick={onDeleteAccount}
          className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
        >
          <Trash2 className="w-4 h-4" />
          Delete Account
        </button>
      </div>
    </div>
  );
}
