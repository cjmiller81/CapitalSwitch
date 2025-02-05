import React from 'react';
import CapitalSwitch from './components/CapitalSwitch';

function App() {
  const handleToggle = (isWallet: boolean) => {
    console.log('Switched to:', isWallet ? 'Wallet Capital' : 'Deployment Capital');
  };

  return (
    <div className="min-h-screen bg-[#0a0b0f] flex items-center justify-center">
      <CapitalSwitch onToggle={handleToggle} />
    </div>
  );
}

export default App;