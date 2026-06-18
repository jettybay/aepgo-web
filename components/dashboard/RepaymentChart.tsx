'use client';

export default function RepaymentChart() {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-6">Repayment Overview</h3>

      <div className="flex flex-col items-center justify-center py-8">
        <div className="relative w-48 h-48">
          {/* Background Circle */}
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="#e5e7eb" 
              strokeWidth="10" 
            />
            {/* Progress Circle */}
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="#7c3aed" 
              strokeWidth="10" 
              strokeDasharray="282.74" 
              strokeDashoffset="107.44" 
              strokeLinecap="round"
            />
          </svg>

          {/* Center Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-6xl font-bold text-purple-600">62%</p>
            <p className="text-sm text-gray-500 -mt-1">Paid</p>
          </div>
        </div>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Total Amount</span>
          <span className="font-medium">₦330.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Remaining</span>
          <span className="font-medium text-purple-600">₦128.50</span>
        </div>
      </div>

      <button className="mt-8 w-full purple-btn">
        View Repayment Details
      </button>
    </div>
  );
}