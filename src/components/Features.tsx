import React from 'react';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
  const featureItems = [
    {
      title: 'Intelligent Memory Management',
      description: 'Advanced categorization of memories into Personal, Work/School, and Financial/Logical types using transformer-based models.',
      link: '/features/memory',
      image: 'https://ext.same-assets.com/4068381172/849522504.jpeg'
    },
    {
      title: 'Hybrid Memory Architecture',
      description: 'Specialized vector databases (Pinecone, FAISS, ChromaDB) for different types of information, enabling fast and accurate responses.',
      link: '/features/architecture',
      image: 'https://ext.same-assets.com/4068381172/849522504.jpeg'
    },
    {
      title: 'Tone Adaptation',
      description: 'Emotionally intelligent responses through sentiment analysis of previous conversations.',
      link: '/features/tone',
    },
    {
      title: 'Long-term Memory Consistency',
      description: 'Spiral reinforcement method for periodic re-training and re-embedding of key conversations.',
      link: '/features/consistency',
    },
    {
      title: 'Performance Optimization',
      description: 'LRU/Redis cache implementation for accelerated retrieval of frequently accessed data.',
      link: '/features/performance',
    },
    {
      title: 'Dynamic Memory Retrieval',
      description: 'Context-aware memory retrieval system that adapts to user needs and conversation flow.',
      link: '/features/retrieval',
      icon: (
        <div className="flex items-center space-x-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )
    },
    {
      title: 'Personalized Learning',
      description: 'Adaptive learning system that evolves with user interactions and preferences.',
      link: '/features/learning',
    },
    {
      title: 'Secure Data Storage',
      description: 'Enterprise-grade security for storing and managing personal and sensitive information.',
      link: '/features/security',
    },
    {
      title: 'Multi-modal Interactions',
      description: 'Support for text, voice, and image-based interactions with context preservation.',
      link: '/features/multimodal',
    },
    {
      title: 'API Integration',
      description: 'Seamless integration with external services and APIs for enhanced functionality.',
      link: '/features/integration',
    },
    {
      title: 'MEmoraNet 1.0',
      description: 'Experience the future of AI companionship. Read the release notes.',
      link: '/blog/release-1.0',
      isDark: true
    },
  ];

  return (
    <div className="nextjs-container py-16">
      <h2 className="text-3xl font-bold mb-4">MEmoraNet Features</h2>
      <p className="text-xl text-gray-600 mb-12">Everything you need in an AI companion that grows with you.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featureItems.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            link={feature.link}
            image={feature.image}
            icon={feature.icon}
            isDark={feature.isDark}
            isLarge={index < 2}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
