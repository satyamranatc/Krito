export const appJsxContent = `import { useState } from 'react'
import { 
  Zap, 
  Atom, 
  Palette, 
  Flame, 
  Rocket, 
  Leaf, 
  Package, 
  Globe, 
  RotateCcw, 
  Shield,
  Home,
  Wrench,
  Sparkles,
  Target,
  Settings,
  Construction,
  FolderOpen,
  Hammer,
  Database,
  BookOpen,
  Ban,
  CheckCircle,
  Code,
  Server,
  Layers,
  Terminal
} from 'lucide-react'

import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'

function App() {
  const [activeTab, setActiveTab] = useState('frontend')

const frontendLibraries = [
  {
    name: 'React 18',
    description: 'Powerful and modern UI library with hooks, concurrent rendering, and component-based architecture.',
    icon: Atom,
  },
  {
    name: 'Vite',
    description: 'Next-generation frontend tooling for ultra-fast development and instant hot module reload.',
    icon: Zap,
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework enabling fast, responsive, and consistent UI styling.',
    icon: Palette,
  },
  {
    name: 'HMR',
    description: 'Hot Module Replacement for seamless development without losing state.',
    icon: Flame,
  }
];

const backendLibraries = [
  {
    name: 'Express.js',
    description: 'Minimal and flexible Node.js web application framework for building robust APIs.',
    icon: Rocket,
  },
  {
    name: 'MongoDB',
    description: 'Document-oriented NoSQL database, perfect for flexible and scalable data storage.',
    icon: Leaf,
  },
  {
    name: 'Mongoose',
    description: 'Elegant ODM to model your application data and handle MongoDB interactions.',
    icon: Package,
  },
  {
    name: 'CORS',
    description: 'Middleware that enables secure cross-origin requests between frontend and backend.',
    icon: Globe,
  },
  {
    name: 'Nodemon',
    description: 'Development tool that automatically restarts your server on file changes.',
    icon: RotateCcw,
  },
  {
    name: 'dotenv',
    description: 'Loads environment variables from .env file into process.env.',
    icon: Shield,
  }
];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-white via-gray-50 to-white text-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <div className="flex justify-center items-center gap-8 mb-12">
            <div className="relative group">
              <div className="h-20 w-20 bg-gray-100 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-gray-200 hover:border-[#19aa95] transition-all duration-300 animate-pulse group-hover:shadow-lg group-hover:shadow-[#19aa95]/20">
                <img src={viteLogo} alt="Vite" className="h-12 w-12" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#19aa95]/20 to-[#19aa95]/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-6xl font-black text-gray-400">×</div>
            <div className="relative group">
              <div className="h-20 w-20 bg-gray-100 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-gray-200 hover:border-[#19aa95] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#19aa95]/20">
                <div className="animate-spin" style={{animationDuration: '8s'}}>
                  <img src={reactLogo} alt="React" className="h-12 w-12" />
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#19aa95]/10 to-[#19aa95]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
            krito
          </h1>
          <p className="text-xl md:text-3xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
            Full-Stack Project Generator • Zero Configuration • Production Ready
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="bg-gray-100 backdrop-blur-sm rounded-full px-8 py-3 text-sm font-semibold border border-gray-200 hover:border-[#19aa95]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#19aa95]/10">
              <Atom className="inline h-4 w-4 mr-2 text-black" />
              Vite + React
            </div>
            <div className="bg-gray-100 backdrop-blur-sm rounded-full px-8 py-3 text-sm font-semibold border border-gray-200 hover:border-[#19aa95]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#19aa95]/10">
              <Server className="inline h-4 w-4 mr-2 text-black" />
              Express + MongoDB
            </div>
            <div className="bg-gray-100 backdrop-blur-sm rounded-full px-8 py-3 text-sm font-semibold border border-gray-200 hover:border-[#19aa95]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#19aa95]/10">
              <Palette className="inline h-4 w-4 mr-2 text-black" />
              Tailwind CSS
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10 backdrop-blur-xl">
        <div className="container mx-auto px-6">
          <div className="flex space-x-0">
            {[
              { id: 'frontend', label: 'Frontend', icon: Atom },
              { id: 'backend', label: 'Backend', icon: Server },
            ].map(tab => {
              const IconComponent = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={'relative flex items-center gap-3 py-6 px-8 font-semibold text-sm transition-all duration-300 group text-gray-600 hover:text-black'}
                >
                  <IconComponent className="h-5 w-5" />
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#19aa95] to-[#19aa95]/50"></div>
                  )}
                  <div className='absolute inset-0 bg-[#19aa95]/5 transition-opacity duration-300'></div>
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {activeTab === 'frontend' && (
          <div className="space-y-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
                  Frontend Stack
                </span>
              </h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto">Modern React development with lightning-fast tooling and optimized performance</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {frontendLibraries.map((lib, i) => {
                const IconComponent = lib.icon
                return (
                  <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-[#19aa95]/50 transition-all duration-300 group hover:shadow-lg hover:shadow-[#19aa95]/10">
                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-black rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-black mb-3">{lib.name}</h3>
                        <p className="text-gray-600 leading-relaxed">{lib.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="bg-gray-50 rounded-2xl p-10 border border-gray-200 hover:border-[#19aa95]/30 transition-all duration-300">
              <h3 className="text-3xl font-bold text-black mb-8 flex items-center gap-3">
                <Layers className="h-8 w-8 text-black" />
                Frontend Features
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-gray-700 text-lg">
                <div className="flex items-center gap-3 hover:text-black transition-colors duration-200">
                  <div className="w-2 h-2 bg-[#19aa95] rounded-full"></div>
                  Lucide Rect Icons
                </div>
                <div className="flex items-center gap-3 hover:text-black transition-colors duration-200">
                  <div className="w-2 h-2 bg-[#19aa95] rounded-full"></div>
                  Rouring Ready (react-router-dom)
                </div>
                <div className="flex items-center gap-3 hover:text-black transition-colors duration-200">
                  <div className="w-2 h-2 bg-[#19aa95] rounded-full"></div>
                  Tailwind CSS Integration
                </div>
                <div className="flex items-center gap-3 hover:text-black transition-colors duration-200">
                  <div className="w-2 h-2 bg-[#19aa95] rounded-full"></div>
                  Api Ready (Axios)
                </div>
                <div className="flex items-center gap-3 hover:text-black transition-colors duration-200">
                  <div className="w-2 h-2 bg-[#19aa95] rounded-full"></div>
                  Environment Variables
                </div>
                <div className="flex items-center gap-3 hover:text-black transition-colors duration-200">
                  <div className="w-2 h-2 bg-[#19aa95] rounded-full"></div>
                  We're Spoiling You Now!
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'backend' && (
          <div className="space-y-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
                  Backend Stack
                </span>
              </h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto">Robust server-side foundation with modern Node.js and scalable architecture</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {backendLibraries.map((lib, i) => {
                const IconComponent = lib.icon
                return (
                  <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-[#19aa95]/50 transition-all duration-300 group hover:shadow-lg hover:shadow-[#19aa95]/10">
                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-black rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-black mb-3">{lib.name}</h3>
                        <p className="text-gray-600 leading-relaxed">{lib.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="bg-gray-50 rounded-2xl p-10 border border-gray-200 hover:border-[#19aa95]/30 transition-all duration-300">
              <h3 className="text-3xl font-bold text-black mb-8 flex items-center gap-3">
                <FolderOpen className="h-8 w-8 text-black" />
                Backend Architecture
              </h3>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {[
                  { folder: 'routes/', desc: 'API endpoints and routing logic', icon: Globe },
                  { folder: 'models/', desc: 'Database schemas and validation', icon: Database },
                  { folder: 'controllers/', desc: 'Business logic and handlers', icon: Wrench },
                  { folder: 'config/', desc: 'Application configuration files', icon: Settings }
                ].map((item, i) => {
                  const IconComponent = item.icon
                  return (
                    <div key={i} className="group/card">
                      <div className="bg-gray-100 rounded-xl p-6 border border-gray-200 group-hover/card:border-[#19aa95]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#19aa95]/5">
                        <IconComponent className="h-8 w-8 text-black mx-auto mb-4" />
                        <div className="font-mono text-black text-lg font-semibold mb-2">{item.folder}</div>
                        <div className="text-gray-600 text-sm leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

     
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="relative group">
              <div className="w-16 h-16 bg-gradient-to-r from-black to-black rounded-2xl flex items-center justify-center text-white font-black text-2xl group-hover:shadow-lg group-hover:shadow-[#19aa95]/20 transition-all duration-300">
                DK
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#19aa95] to-[#19aa95]/50 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <span className="text-3xl font-black bg-gradient-to-r from-black to-black bg-clip-text text-transparent">krito</span>
          </div>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Kickstart your full-stack development journey with zero configuration and production-ready architecture
          </p>
          <div className="flex flex-wrap justify-center gap-12 text-sm text-gray-500 mb-12">
            <div className="flex items-center gap-2 hover:text-gray-700 transition-colors duration-200">
              <Code className="h-4 w-4 text-black" />
              <span>Frontend: http://localhost:5173</span>
            </div>
            <div className="flex items-center gap-2 hover:text-gray-700 transition-colors duration-200">
              <Server className="h-4 w-4 text-black" />
              <span>Backend: http://localhost:5000</span>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-500">
              Created with <span className="text-red-400"></span> by <span className="text-black font-semibold">Satyam Rana</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App`;



export const dbConfig = `import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected...");
  } catch (error) {
    console.error("DB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
`;

export const serverCode = `import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

connectDB();


app.get("/", (req, res) => {
  res.json({ message: "API is live" });
});


app.listen(PORT, () => {
  console.log('Server running ...')
});
`
