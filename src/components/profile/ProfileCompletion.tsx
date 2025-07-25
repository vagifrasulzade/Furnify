interface ProfileCompletionProps {
  userName?: string;
  userEmail?: string;
  hasPaymentInfo: boolean;
  hasAddressInfo: boolean;
}

export default function ProfileCompletion({
  userName,
  userEmail,
  hasPaymentInfo,
  hasAddressInfo
}: ProfileCompletionProps) {
  const calculateCompletion = () => {
    let completionScore = 0;
    if (userName) completionScore += 25;
    if (userEmail) completionScore += 25;
    if (hasPaymentInfo) completionScore += 25;
    if (hasAddressInfo) completionScore += 25;
    return completionScore;
  };

  const completionScore = calculateCompletion();

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium text-blue-900">Profile Completion</h4>
          <p className="text-sm text-blue-700">{completionScore}% complete</p>
        </div>
        <div className="w-16 h-16 relative">
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="2"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray={`${completionScore}, 100`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-semibold text-blue-900">{completionScore}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
