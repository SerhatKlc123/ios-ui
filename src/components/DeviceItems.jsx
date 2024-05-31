import React from 'react';

const DeviceItems = ({ percentage, size, strokeWidth, iconData, hasDevice }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className='flex flex-col items-center justify-start'>
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size}>
          <circle
            className="text-[#3e484a]"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <circle
            className="text-[#2cd259]"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
            style={{ transition: 'stroke-dashoffset 0.35s', transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
          />
        </svg>
        <div className="absolute text-lg font-bold">{iconData}</div>
      </div>
      {
        hasDevice == true ? <div className='flex justify-center items-center w-full text-[1.2rem] pt-2'>
          {`%${percentage}`}
        </div> : <div />
      }
    </div>
  );
};

export default DeviceItems;
