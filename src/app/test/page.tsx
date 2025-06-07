"use client"

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const OutlinedButton = ({ children, isActive = false, hasDropdown = false, onClick }) => (
  <button
    onClick={onClick}
    className={`
      px-6 py-3 text-white font-semibold text-sm
      transition-all duration-200 hover:bg-yellow-400/10
      flex items-center gap-2 min-w-[120px] justify-center
      relative bg-transparent group h-12
      ${isActive ? 'bg-yellow-400/10' : ''}
    `}
  >
    {/* SVG Border */}
    <svg 
      className="absolute inset-0 w-full h-full group-hover:opacity-80 transition-opacity duration-200" 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none"
    >
      <path
        d="M15,0 L100,0 L100,100 L0,100 L0,15 Z"
        fill="none"
        stroke="#facc15"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
    
    <span className="relative z-10 flex items-center gap-2">
      {children}
      {hasDropdown && <ChevronDown size={16} />}
    </span>
  </button>
);

const OutlinedButtonRight = ({ children, isActive = false, hasDropdown = false, onClick }) => (
  <button
    onClick={onClick}
    className={`
      px-6 py-3 text-white font-semibold text-sm
      transition-all duration-200 hover:bg-yellow-400/10
      flex items-center gap-2 min-w-[120px] justify-center
      relative bg-transparent group h-12
      ${isActive ? 'bg-yellow-400/10' : ''}
    `}
  >
    {/* SVG Border */}
    <svg 
      className="absolute inset-0 w-full h-full group-hover:opacity-80 transition-opacity duration-200" 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none"
    >
      <path
        d="M0,0 L100,0 L85,100 L0,100 Z"
        fill="none"
        stroke="#facc15"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
    
    <span className="relative z-10 flex items-center gap-2">
      {children}
      {hasDropdown && <ChevronDown size={16} />}
    </span>
  </button>
);

const Button = ({ children, variant = 'primary', onClick }) => {
  const baseClasses = "px-6 py-3 font-semibold text-sm transition-all duration-200 flex items-center gap-2 min-w-[120px] justify-center relative h-12";
  
  const variants = {
    primary: "bg-yellow-500 text-black hover:bg-yellow-400",
    secondary: "bg-transparent text-white hover:bg-yellow-400/10",
    outlined: "bg-transparent text-white hover:bg-yellow-400/10"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} group`}
    >
      {/* SVG Border for outlined variants */}
      {(variant === 'secondary' || variant === 'outlined') && (
        <svg 
          className="absolute inset-0 w-full h-full group-hover:opacity-80 transition-opacity duration-200" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          <path
            d="M15,0 L100,0 L100,100 L0,100 L0,15 Z"
            fill="none"
            stroke="#facc15"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      )}
      
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};

// Demo component
const NavigationDemo = () => {
  const [activeTab, setActiveTab] = useState('GAMES');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-red-800 p-8">
      {/* Hero Section like Netflix */}
      <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg mb-8">
        <div className="flex items-center justify-center">
          <OutlinedButton onClick={() => {}}>WATCH NOW ON</OutlinedButton>
          <OutlinedButtonRight onClick={() => {}}>VIEW TRAILER</OutlinedButtonRight>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg mb-8">
        <div className="flex items-center gap-2">
          <OutlinedButton 
            isActive={activeTab === 'GAMES'} 
            hasDropdown={true}
            onClick={() => setActiveTab('GAMES')}
          >
            GAMES
          </OutlinedButton>
          <OutlinedButton 
            isActive={activeTab === 'SHOWS'} 
            hasDropdown={true}
            onClick={() => setActiveTab('SHOWS')}
          >
            SHOWS
          </OutlinedButton>
          <OutlinedButton 
            isActive={activeTab === 'COMMUNITY'} 
            hasDropdown={true}
            onClick={() => setActiveTab('COMMUNITY')}
          >
            COMMUNITY
          </OutlinedButton>
          <OutlinedButton 
            isActive={activeTab === 'MORE'} 
            hasDropdown={true}
            onClick={() => setActiveTab('MORE')}
          >
            MORE
          </OutlinedButton>
          <OutlinedButtonRight 
            isActive={activeTab === 'EN'} 
            hasDropdown={true}
            onClick={() => setActiveTab('EN')}
          >
            EN
          </OutlinedButtonRight>
        </div>
      </div>

      {/* Individual Button Examples */}
      <div className="space-y-8">
        <div>
          <h2 className="text-white text-xl font-bold mb-4">Outlined Button (góc cắt trên trái) - Border liền mạch</h2>
          <div className="flex gap-4">
            <OutlinedButton onClick={() => {}}>GAMES</OutlinedButton>
            <OutlinedButton hasDropdown={true} onClick={() => {}}>SHOWS</OutlinedButton>
            <OutlinedButton isActive={true} hasDropdown={true} onClick={() => {}}>ACTIVE</OutlinedButton>
          </div>
        </div>

        <div>
          <h2 className="text-white text-xl font-bold mb-4">Regular Button</h2>
          <div className="flex gap-4">
            <Button variant="primary" onClick={() => {}}>PRIMARY</Button>
            <Button variant="secondary" onClick={() => {}}>SECONDARY</Button>
            <Button variant="outlined" onClick={() => {}}>OUTLINED</Button>
          </div>
        </div>

        <div>
          <h2 className="text-white text-xl font-bold mb-4">Outlined Button Right (góc cắt dưới phải) - Border liền mạch</h2>
          <div className="flex">
            <OutlinedButton onClick={() => {}}>WATCH NOW ON</OutlinedButton>
            <OutlinedButtonRight onClick={() => {}}>VIEW TRAILER</OutlinedButtonRight>
          </div>
        </div>

        <div>
          <h2 className="text-white text-xl font-bold mb-4">Single Button Test</h2>
          <div className="flex gap-4">
            <OutlinedButton onClick={() => {}}>TEST BUTTON</OutlinedButton>
            <OutlinedButtonRight onClick={() => {}}>TEST RIGHT</OutlinedButtonRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationDemo;