import React, { useState } from 'react';
import { Wallet, Coins } from 'lucide-react';

interface CapitalSwitchProps {
  onToggle: (isWallet: boolean) => void;
  walletAmount?: number;
  deploymentAmount?: number;
}

const CapitalSwitch: React.FC<CapitalSwitchProps> = ({
  onToggle,
  walletAmount = 8115.39,
  deploymentAmount = 1000,
}) => {
  const [isWallet, setIsWallet] = useState(true);

  const handleToggle = () => {
    setIsWallet(!isWallet);
    onToggle(!isWallet);
  };

  return (
    <div className="flex flex-col gap-6 p-6 bg-[#0a0b0f] rounded-lg w-[400px]">
      {/* Wallet Capital Section */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Wallet className={`w-5 h-5 ${isWallet ? 'text-[#22c55e]' : 'text-gray-400'}`} />
          <span className={`text-lg ${isWallet ? 'text-[#22c55e]' : 'text-gray-400'}`}>
            Wallet Capital
          </span>
        </div>
        <div className={`relative rounded-lg border ${isWallet ? 'bg-gray-200 border-gray-300' : 'bg-transparent border-gray-700'} p-3`}>
          <input
            type="text"
            value={isWallet ? walletAmount.toFixed(2) : ''}
            readOnly
            className={`w-full bg-transparent text-lg ${isWallet ? 'text-black' : 'text-gray-400'}`}
          />
        </div>
      </div>

      {/* Switch */}
      <div className="flex justify-center">
        <button
          onClick={handleToggle}
          className="w-14 h-8 rounded-full p-1 relative"
          style={{
            backgroundColor: isWallet ? '#86efac' : '#7dd3fc',
            transition: 'background-color 0.3s'
          }}
        >
          <div
            className="w-6 h-6 bg-white rounded-full shadow-md absolute transition-transform duration-300"
            style={{
              transform: isWallet ? 'translateX(0)' : 'translateX(24px)',
              top: '4px',
              left: '4px'
            }}
          />
        </button>
      </div>

      {/* Deployment Capital Section */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Coins className={`w-5 h-5 ${!isWallet ? 'text-[#0ea5e9]' : 'text-gray-400'}`} />
          <span className={`text-lg ${!isWallet ? 'text-[#0ea5e9]' : 'text-gray-400'}`}>
            Deployment Capital
          </span>
        </div>
        <div className={`relative rounded-lg border ${!isWallet ? 'bg-gray-200 border-gray-300' : 'bg-transparent border-gray-700'} p-3`}>
          <input
            type="text"
            value={!isWallet ? deploymentAmount.toFixed(2) : ''}
            readOnly
            className={`w-full bg-transparent text-lg ${!isWallet ? 'text-black' : 'text-gray-400'}`}
          />
        </div>
      </div>
    </div>
  );
};

export default CapitalSwitch;