import React from 'react';

const Tool: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}> = ({ title, description, icon, link }) => {
  return (
    <a
      href={link}
      className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200"
    >
      <div className="flex mb-4 items-center">
        {icon}
        <div className="ml-2 text-gray-400">→</div>
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </a>
  );
};

const Tools: React.FC = () => {
  return (
    <div className="nextjs-container py-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Powered by Advanced AI and Memory Technologies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Tool
          title="Langchain"
          description="Advanced RAG implementation with Langchain, enabling sophisticated memory management and context-aware responses."
          link="/docs/langchain"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#00A67E"/>
              <path d="M2 17L12 22L22 17" fill="#00A67E"/>
              <path d="M2 12L12 17L22 12" fill="#00A67E"/>
            </svg>
          }
        />

        <Tool
          title="Vector Databases"
          description="Hybrid memory architecture using specialized vector databases for fast and accurate information retrieval."
          link="/docs/vector-db"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2397 14.1593C12.5876 15.8113 11.9032 14.1982 10.6786 15.4228C7.60457 18.4968 5.16226 15.7264 7.63661 13.252C10.1109 10.7777 7.8583 7.72949 11.5346 7.72949C15.2109 7.72949 12.7686 10.1718 15.2429 12.646C17.7173 15.1204 14.9469 13.4522 14.2397 14.1593Z" fill="#4A90E2"/>
              <path d="M17.7173 9.29289C17.3268 8.90237 16.6936 8.90237 16.3031 9.29289L14.8889 10.7071C14.4984 11.0976 14.4984 11.7308 14.8889 12.1213C15.2794 12.5118 15.9126 12.5118 16.3031 12.1213L17.7173 10.7071C18.1079 10.3166 18.1079 9.68342 17.7173 9.29289Z" fill="#4A90E2"/>
              <path d="M7.41419 17.1213C8.02845 16.5071 8.02845 15.5168 7.41419 14.9026L4.58572 12.0741C3.97145 11.4598 2.9812 11.4598 2.36694 12.0741C1.75267 12.6883 1.75267 13.6786 2.36694 14.2929L5.19541 17.1213C5.80967 17.7356 6.79992 17.7356 7.41419 17.1213Z" fill="#4A90E2"/>
              <path d="M21.6329 9.99981C22.2472 9.38555 22.2472 8.3953 21.6329 7.78103C21.0187 7.16677 20.0284 7.16677 19.4141 7.78103L16.5858 10.6095C15.9715 11.2238 15.9715 12.214 16.5858 12.8283C17.2 13.4426 18.1903 13.4426 18.8046 12.8283L21.6329 9.99981Z" fill="#4A90E2"/>
            </svg>
          }
        />

        <Tool
          title="Transformer Models"
          description="State-of-the-art transformer models for intelligent memory categorization and context-aware responses."
          link="/docs/transformers"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="#FF6B6B"/>
              <path d="M12 22.5C11.9366 22.5 11.8732 22.4959 11.81 22.4877C11.2066 22.4208 10.6843 22.0878 10.4072 21.5844C9.72328 20.3371 9.07672 18.5997 8.55009 16.5C7.39853 16.1549 6.31672 15.7277 5.35406 15.2434C4.92553 15.0325 4.51622 14.7328 4.21538 14.3628C3.91454 13.9929 3.72948 13.5628 3.675 13.1113C3.62053 12.6598 3.69826 12.2036 3.89979 11.7898C4.10131 11.376 4.41973 11.0199 4.81969 10.7569C5.61422 10.2262 6.79916 9.765 8.25094 9.37875C8.77453 7.38984 9.43266 5.53344 10.1625 4.18734C10.4443 3.67587 10.9731 3.33681 11.5845 3.26922C11.7209 3.25125 11.86 3.24234 12 3.24234C12.1872 3.24234 12.3703 3.25406 12.5531 3.27656C13.1402 3.35156 13.6406 3.69047 13.9085 4.19219C14.6248 5.54641 15.2751 7.40062 15.7935 9.37875C17.2664 9.76828 18.4588 10.2337 19.26 10.7683C19.6488 11.037 19.955 11.398 20.1456 11.815C20.3361 12.232 20.4042 12.6896 20.3403 13.1407C20.2763 13.5918 20.0827 14.0194 19.7751 14.3852C19.4676 14.7509 19.0536 15.0443 18.5929 15.2475C17.6179 15.7331 16.5292 16.1589 15.375 16.5C14.8594 18.5783 14.2201 20.3063 13.5435 21.5522C13.2843 22.0361 12.7976 22.3644 12.225 22.4438C12.15 22.4808 12.0755 22.5 12 22.5Z" fill="#FF6B6B"/>
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default Tools;
