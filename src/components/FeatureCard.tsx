import React, { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
  link: string;
  isDark?: boolean;
  isLarge?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  image,
  link,
  isDark = false,
  isLarge = false
}) => {
  return (
    <a
      href={link}
      className={`block rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 ${
        isDark
          ? 'bg-gray-900 text-white'
          : 'bg-white text-nextjs-black border border-gray-200'
      } ${
        isLarge ? 'col-span-1 md:col-span-2 row-span-2' : ''
      }`}
    >
      {image && (
        <div className="mb-4">
          <img
            src={image}
            alt={title}
            className="h-36 w-auto object-contain"
          />
        </div>
      )}
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className={`font-semibold text-lg mb-2 ${isDark ? 'text-white' : 'text-nextjs-black'}`}>
        {title}
      </h3>
      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        {description}
      </p>
    </a>
  );
};

export default FeatureCard;
