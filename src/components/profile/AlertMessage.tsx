interface AlertMessageProps {
  type: 'success' | 'error';
  message: string;
}

export default function AlertMessage({ type, message }: AlertMessageProps) {
  const bgColor = type === 'success' ? 'bg-green-50' : 'bg-red-50';
  const borderColor = type === 'success' ? 'border-green-200' : 'border-red-200';
  const textColor = type === 'success' ? 'text-green-800' : 'text-red-800';

  return (
    <div className={`${bgColor} ${borderColor} border rounded-lg p-4 mb-6`}>
      <p className={`${textColor} text-sm font-medium`}>{message}</p>
    </div>
  );
}
