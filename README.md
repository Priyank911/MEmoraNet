# MEmoraNet - Advanced RAG-based AI Companion

MEmoraNet is an advanced Retrieval-Augmented Generation (RAG) based chatbot designed to serve as a lifelong AI companion with dynamic memory and personalized interactions. At its core, the system uses Langchain to build intelligent RAG pipelines that can store, retrieve, and reinforce memories across various contexts.

## Key Features

- **Intelligent Memory Management**: Every user query is embedded using transformer-based models and categorized into three memory types:
  - Personal (Pinecone)
  - Work/School (FAISS)
  - Financial/Logical/Other (ChromaDB)

- **Hybrid Memory Architecture**: Enables fast, accurate, and contextually rich responses through specialized vector databases for different types of information.

- **Tone Adaptation**: Analyzes previous conversation sentiments to provide more human-like and emotionally intelligent responses.

- **Long-term Memory Consistency**: Implements spiral reinforcement method for periodic re-training and re-embedding of key conversations.

- **Performance Optimization**: Utilizes LRU/Redis cache for accelerated retrieval of frequently accessed data.

## Technical Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: TailwindCSS
- **Vector Databases**: Pinecone, FAISS, ChromaDB
- **Embedding Models**: Transformer-based models
- **Caching**: Redis/LRU Cache
- **Framework**: Langchain

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run linting
- `npm run format` - Format code

## Contributing

Please read our contributing guidelines before submitting pull requests.

## License

MIT License
