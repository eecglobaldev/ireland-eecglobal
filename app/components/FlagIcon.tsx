import React from 'react';

interface FlagIconProps {
  country: string;
  className?: string;
}

/**
 * FlagIcon Component - Renders country flags using FlagCDN
 * 
 * Common country codes:
 * IE - Ireland, DE - Germany, AU - Australia, US - USA, GB - UK
 * NZ - New Zealand, CA - Canada, IN - India, FR - France, etc.
 * 
 * For non-country icons (tools, home), pass special codes:
 * 'home' - Shows home icon, 'tool' - Shows tool icon, 'bot' - Shows bot icon
 */
const FlagIcon: React.FC<FlagIconProps> = ({ country, className = '' }) => {
  // Special non-country icons
  const specialIcons: Record<string, string> = {
    'home': '🏠',
    'tool': '🛠️',
    'bot': '🤖',
    'career': '🎯',
    'calculator': '🧮',
    'castle': '🏰',
    'kangaroo': '🦘',
    'plane': '✈️',
    'pencil': '📝',
    'globe': '🌍',
  };

  // If it's a special icon, render as emoji
  if (specialIcons[country?.toLowerCase()]) {
    return (
      <span className={`inline-flex items-center justify-center ${className}`} role="img" aria-label={country}>
        {specialIcons[country.toLowerCase()]}
      </span>
    );
  }

  // If no country code provided, return null
  if (!country) return null;

  return (
    <img
      src={`https://flagcdn.com/w40/${country.toLowerCase()}.png`}
      srcSet={`https://flagcdn.com/w80/${country.toLowerCase()}.png 2x`}
      alt={`${country} flag`}
      className={`inline-block object-cover ${className}`}
      loading="lazy"
      onError={(e) => {
        // Fallback to emoji if flag doesn't load
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
      }}
    />
  );
};

export default FlagIcon;

