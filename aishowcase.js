import React, { useState, useEffect, useRef } from 'react';
import { Star, Search, Sparkles, Zap, Brain, Eye, MessageSquare, Image, Code, Music, Video } from 'lucide-react';

const aiTools = [
  {
    id: 1,
    name: "OpenAI GPT-4o",
    description: "Most advanced language model for text generation, analysis, and conversation",
    rating: 5,
    category: "Language",
    icon: MessageSquare,
    gradient: "from-purple-500 to-pink-500",
    link: "https://openai.com"
  },
  {
    id: 2,
    name: "Anthropic Claude",
    description: "Intelligent AI assistant for complex reasoning and creative tasks",
    rating: 5,
    category: "Language",
    icon: Brain,
    gradient: "from-green-500 to-emerald-500",
    link: "https://claude.ai"
  },
  {
    id: 3,
    name: "Google Gemini",
    description: "Multimodal AI for text, code, and image understanding",
    rating: 5,
    category: "Language",
    icon: Sparkles,
    gradient: "from-blue-500 to-cyan-500",
    link: "https://gemini.google.com"
  },
  {
    id: 4,
    name: "Meta LLaMA",
    description: "Open-source large language model for research and development",
    rating: 4,
    category: "Language",
    icon: Brain,
    gradient: "from-indigo-500 to-purple-500",
    link: "https://llama.meta.com"
  },
  {
    id: 5,
    name: "Hugging Face",
    description: "Open-source platform for machine learning models and datasets",
    rating: 4,
    category: "Language",
    icon: Zap,
    gradient: "from-orange-500 to-red-500",
    link: "https://huggingface.co"
  },
  {
    id: 6,
    name: "Cohere",
    description: "Enterprise-grade language AI for business applications",
    rating: 4,
    category: "Language",
    icon: MessageSquare,
    gradient: "from-teal-500 to-blue-500",
    link: "https://cohere.com"
  },
  {
    id: 7,
    name: "Mistral AI",
    description: "Efficient and powerful language models for various applications",
    rating: 4,
    category: "Language",
    icon: Zap,
    gradient: "from-violet-500 to-purple-500",
    link: "https://mistral.ai"
  },
  {
    id: 8,
    name: "Ollama",
    description: "Run large language models locally on your own machine",
    rating: 4,
    category: "Language",
    icon: Brain,
    gradient: "from-emerald-500 to-teal-500",
    link: "https://ollama.ai"
  },
  {
    id: 9,
    name: "Midjourney",
    description: "Create stunning artwork and images with AI-powered creativity",
    rating: 5,
    category: "Image",
    icon: Sparkles,
    gradient: "from-orange-500 to-red-500",
    link: "https://midjourney.com"
  },
  {
    id: 10,
    name: "DALL·E 3",
    description: "OpenAI's advanced AI image generator from text descriptions",
    rating: 5,
    category: "Image",
    icon: Image,
    gradient: "from-blue-500 to-cyan-500",
    link: "https://openai.com/dall-e-3"
  },
  {
    id: 11,
    name: "Stable Diffusion",
    description: "Open-source AI model for high-quality image generation",
    rating: 4,
    category: "Image",
    icon: Eye,
    gradient: "from-emerald-500 to-teal-500",
    link: "https://stability.ai"
  },
  {
    id: 12,
    name: "RunwayML Gen-2",
    description: "AI-powered video and image generation with advanced controls",
    rating: 4,
    category: "Image",
    icon: Image,
    gradient: "from-pink-500 to-rose-500",
    link: "https://runwayml.com"
  },
  {
    id: 13,
    name: "Adobe Firefly",
    description: "Creative AI tools integrated into Adobe's ecosystem",
    rating: 4,
    category: "Image",
    icon: Sparkles,
    gradient: "from-red-500 to-orange-500",
    link: "https://firefly.adobe.com"
  },
  {
    id: 14,
    name: "Leonardo.Ai",
    description: "AI art generator with fine-tuned models and styles",
    rating: 4,
    category: "Image",
    icon: Image,
    gradient: "from-purple-500 to-pink-500",
    link: "https://leonardo.ai"
  },
  {
    id: 15,
    name: "Playground AI",
    description: "User-friendly AI image creation with multiple models",
    rating: 4,
    category: "Image",
    icon: Sparkles,
    gradient: "from-indigo-500 to-blue-500",
    link: "https://playgroundai.com"
  },
  {
    id: 16,
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write code faster",
    rating: 5,
    category: "Code",
    icon: Code,
    gradient: "from-indigo-500 to-purple-500",
    link: "https://github.com/features/copilot"
  },
  {
    id: 17,
    name: "DeepSeek-Coder",
    description: "Specialized coding AI with strong programming capabilities",
    rating: 4,
    category: "Code",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
    link: "https://deepseek.com"
  },
  {
    id: 18,
    name: "Code Llama",
    description: "Meta's specialized large language model for code generation",
    rating: 4,
    category: "Code",
    icon: Code,
    gradient: "from-green-500 to-emerald-500",
    link: "https://code.meta.com/llama"
  },
  {
    id: 19,
    name: "Tabnine",
    description: "AI code completion that learns from your coding patterns",
    rating: 4,
    category: "Code",
    icon: Code,
    gradient: "from-teal-500 to-blue-500",
    link: "https://tabnine.com"
  },
  {
    id: 20,
    name: "Runway ML Gen-2",
    description: "Advanced AI video generation and editing with text-to-video capabilities",
    rating: 5,
    category: "Video",
    icon: Video,
    gradient: "from-pink-500 to-rose-500",
    link: "https://runwayml.com"
  },
  {
    id: 21,
    name: "Sora by OpenAI",
    description: "Cutting-edge AI model for creating realistic videos from text",
    rating: 5,
    category: "Video",
    icon: Video,
    gradient: "from-purple-500 to-pink-500",
    link: "https://openai.com/sora"
  },
  {
    id: 22,
    name: "Pika Labs",
    description: "AI-powered video generation with creative control and editing",
    rating: 4,
    category: "Video",
    icon: Video,
    gradient: "from-blue-500 to-cyan-500",
    link: "https://pika.art"
  },
  {
    id: 23,
    name: "Synthesia",
    description: "Create AI-generated videos with virtual presenters and avatars",
    rating: 4,
    category: "Video",
    icon: Video,
    gradient: "from-red-500 to-pink-500",
    link: "https://synthesia.io"
  },
  {
    id: 24,
    name: "Mubert",
    description: "Generate AI music and soundtracks for any purpose",
    rating: 3,
    category: "Music",
    icon: Music,
    gradient: "from-yellow-500 to-orange-500",
    link: "https://mubert.com"
  },
  {
    id: 25,
    name: "Zapier AI",
    description: "Automate workflows between apps with AI-powered integration platform",
    rating: 5,
    category: "Automation",
    icon: Zap,
    gradient: "from-orange-500 to-red-500",
    link: "https://zapier.com"
  },
  {
    id: 26,
    name: "Make (Integromat)",
    description: "Visual automation platform for connecting apps and services",
    rating: 4,
    category: "Automation",
    icon: Brain,
    gradient: "from-blue-500 to-purple-500",
    link: "https://make.com"
  },
  {
    id: 27,
    name: "Microsoft Power Automate + Copilot",
    description: "Enterprise workflow automation with AI-powered assistance",
    rating: 5,
    category: "Automation",
    icon: Zap,
    gradient: "from-blue-600 to-cyan-500",
    link: "https://powerautomate.microsoft.com"
  },
  {
    id: 28,
    name: "AutoGen / CrewAI",
    description: "Multi-agent AI systems for collaborative task automation",
    rating: 4,
    category: "Automation",
    icon: Brain,
    gradient: "from-green-500 to-teal-500",
    link: "https://microsoft.github.io/autogen"
  },
  {
    id: 29,
    name: "Cognosys AI",
    description: "AI agent platform for automating complex business workflows",
    rating: 4,
    category: "Automation",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    link: "https://cognosys.ai"
  },
  {
    id: 30,
    name: "Superagent / AgentHub",
    description: "Build and deploy AI agents for complex workflow automation",
    rating: 4,
    category: "Automation",
    icon: Brain,
    gradient: "from-violet-500 to-purple-500",
    link: "https://superagent.sh"
  },
  {
    id: 31,
    name: "ElevenLabs + AssemblyAI + Whisper + GPT Stack",
    description: "Complete AI voice pipeline with speech-to-text and generation",
    rating: 4,
    category: "Automation",
    icon: Zap,
    gradient: "from-blue-500 to-cyan-500",
    link: "https://elevenlabs.io"
  },
  {
    id: 32,
    name: "UiPath AI Center",
    description: "Enterprise RPA platform with AI-powered automation capabilities",
    rating: 5,
    category: "Automation",
    icon: Brain,
    gradient: "from-orange-500 to-red-500",
    link: "https://uipath.com"
  },
  {
    id: 33,
    name: "TallyForms + GPT + Airtable",
    description: "Automated form processing with GPT integration and Airtable sync",
    rating: 3,
    category: "Automation",
    icon: Zap,
    gradient: "from-green-500 to-emerald-500",
    link: "https://tally.so"
  },
  {
    id: 34,
    name: "Relevance AI",
    description: "No-code AI workforce platform for business process automation",
    rating: 4,
    category: "Automation",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    link: "https://relevanceai.com"
  },
  {
    id: 35,
    name: "Bardeen AI",
    description: "Browser automation with AI-powered workflow creation",
    rating: 4,
    category: "Automation",
    icon: Zap,
    gradient: "from-teal-500 to-blue-500",
    link: "https://bardeen.ai"
  }
];

const categories = ["All", "Language", "Image", "Code", "Video", "Music", "Automation"];

// Custom Cursor Component
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    const moveCursor = (e) => {
      if (cursor && cursorDot) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', moveCursor);
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .cursor-hover');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed w-8 h-8 pointer-events-none z-50 transition-all duration-300 ease-out ${
          isHovering ? 'scale-150 opacity-80' : 'scale-100 opacity-60'
        }`}
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className="w-full h-full rounded-full border-2 border-purple-400 bg-purple-400/20 backdrop-blur-sm animate-pulse" />
      </div>
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-purple-500 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

const StarRating = ({ rating }) => {
  const [hoveredStar, setHoveredStar] = useState(0);
  
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <div
          key={star}
          className="transition-all duration-300 hover:scale-125 cursor-hover transform"
          onMouseEnter={() => setHoveredStar(star)}
          onMouseLeave={() => setHoveredStar(0)}
          style={{
            animationDelay: `${star * 0.1}s`,
            animation: star <= rating ? 'starGlow 2s ease-in-out infinite' : 'none'
          }}
        >
          <Star
            className={`w-4 h-4 transition-all duration-300 ${
              star <= rating
                ? 'text-yellow-400 fill-yellow-400 drop-shadow-lg'
                : 'text-gray-300'
            } ${
              hoveredStar >= star ? 'scale-110 rotate-12' : ''
            }`}
          />
        </div>
      ))}
    </div>
  );
};

const ToolCard = ({ tool, index }) => {
  const IconComponent = tool.icon;
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const cardRef = useRef(null);
  
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
    window.open(tool.link, '_blank');
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    cardRef.current.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      translateZ(20px)
      ${isHovered ? 'translateY(-8px) scale(1.02)' : ''}
    `;
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    }
  };
  
  return (
    <div
      ref={cardRef}
      className={`relative group cursor-hover transition-all duration-500 ${
        isClicked ? 'animate-bounce' : ''
      }`}
      style={{
        animationDelay: `${index * 0.1}s`,
        animation: 'fadeInUp 0.8s ease-out forwards, cardFloat 6s ease-in-out infinite'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      {/* Enhanced Glow effect */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r ${tool.gradient} transition-all duration-500 rounded-2xl blur-xl -z-10 ${
          isHovered ? 'opacity-40 scale-110' : 'opacity-0 scale-100'
        }`}
      />
      
      {/* Ripple effect on click */}
      {isClicked && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className={`absolute inset-0 bg-gradient-to-r ${tool.gradient} opacity-30 animate-ping`} />
        </div>
      )}
      
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 h-full shadow-xl group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} transition-all duration-500 ${
          isHovered ? 'opacity-25 scale-105' : 'opacity-10 scale-100'
        }`} />
        
        {/* Enhanced floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full transition-all duration-1000 ${
                isHovered ? 'animate-bounce opacity-60' : 'opacity-20'
              }`}
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Shimmer effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 ${
          isHovered ? 'translate-x-full' : '-translate-x-full'
        }`} style={{ transform: 'skewX(-45deg)' }} />
        
        <div className="relative z-10">
          {/* Enhanced Icon with multiple animations */}
          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${tool.gradient} mb-4 transition-all duration-500 ${
            isHovered ? 'scale-125 rotate-6 shadow-lg' : 'scale-100 rotate-0'
          }`}>
            <IconComponent className={`w-6 h-6 text-white transition-all duration-300 ${
              isHovered ? 'animate-pulse' : ''
            }`} />
          </div>
          
          {/* Enhanced Tool name with typewriter effect */}
          <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${tool.gradient} bg-clip-text text-transparent transition-all duration-500 ${
            isHovered ? 'scale-105 tracking-wide' : 'scale-100 tracking-normal'
          }`}>
            {tool.name}
          </h3>
          
          {/* Enhanced Description with slide animation */}
          <p className={`text-gray-300 mb-4 leading-relaxed text-sm transition-all duration-500 ${
            isHovered ? 'text-gray-200 transform translate-y-1' : 'text-gray-300 transform translate-y-0'
          }`}>
            {tool.description}
          </p>
          
          {/* Rating and category */}
          <div className="flex items-center justify-between mt-auto">
            <StarRating rating={tool.rating} />
            <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${tool.gradient} text-white transition-transform hover:scale-105`}>
              {tool.category}
            </span>
          </div>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      </div>
    </div>
  );
};

const AIToolsShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredTools, setFilteredTools] = useState(aiTools);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    let filtered = aiTools;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(tool => tool.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredTools(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white cursor-none">
      <CustomCursor />
      <style jsx>{`
        * {
          cursor: none !important;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px) rotateZ(0deg); }
          25% { transform: translateY(-5px) rotateZ(0.5deg); }
          50% { transform: translateY(-10px) rotateZ(0deg); }
          75% { transform: translateY(-5px) rotateZ(-0.5deg); }
        }
        
        @keyframes starGlow {
          0%, 100% { filter: drop-shadow(0 0 2px #fbbf24); }
          50% { filter: drop-shadow(0 0 8px #fbbf24) drop-shadow(0 0 12px #f59e0b); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-45deg); }
          100% { transform: translateX(200%) skewX(-45deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
          50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.8), 0 0 60px rgba(168, 85, 247, 0.4); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
      
      {/* Enhanced Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full animate-float opacity-30"
            style={{
              width: Math.random() * 150 + 30,
              height: Math.random() * 150 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.1) 0%, transparent 70%)`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 6 + 10}s`
            }}
          />
        ))}
        
        {/* Shooting stars */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animation: `shootingStar ${Math.random() * 3 + 2}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
        
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 animate-pulse" />
      </div>
      
      <style jsx>{`
        @keyframes shootingStar {
          0% {
            transform: translateX(-100px) translateY(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw) translateY(-100px);
            opacity: 0;
          }
        }
      `}</style>

      <div className="relative z-10">
        {/* Enhanced Header */}
        <header className={`container mx-auto px-6 py-12 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-8 animate-pulse-glow cursor-hover relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 animate-spin opacity-75 rounded-full"></div>
              <Sparkles className="w-12 h-12 text-white relative z-10 animate-bounce" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-hover relative">
              <span className="inline-block hover:animate-bounce transition-all duration-300">A</span>
              <span className="inline-block hover:animate-bounce transition-all duration-300" style={{animationDelay: '0.1s'}}>I</span>
              <span className="inline-block hover:animate-bounce transition-all duration-300" style={{animationDelay: '0.2s'}}> </span>
              <span className="inline-block hover:animate-bounce transition-all duration-300" style={{animationDelay: '0.3s'}}>T</span>
              <span className="inline-block hover:animate-bounce transition-all duration-300" style={{animationDelay: '0.4s'}}>o</span>
              <span className="inline-block hover:animate-bounce transition-all duration-300" style={{animationDelay: '0.5s'}}>o</span>
              <span className="inline-block hover:animate-bounce transition-all duration-300" style={{animationDelay: '0.6s'}}>l</span>
              <span className="inline-block hover:animate-bounce transition-all duration-300" style={{animationDelay: '0.7s'}}>s</span>
              <span className="inline-block hover:animate-bounce transition-all duration-300" style={{animationDelay: '0.8s'}}> </span>
              <span className="inline-block hover:animate-bounce transition-all duration-300" style={{animationDelay: '0.9s'}}>H</span>
              <span className="inline-block hover:animate-bounce transition-all duration-300" style={{animationDelay: '1.0s'}}>u</span>
              <span className="inline-block hover:animate-bounce transition-all duration-300" style={{animationDelay: '1.1s'}}>b</span>
            </h1>
            
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed cursor-hover hover:text-gray-200 transition-all duration-300 hover:scale-105">
              Discover the most powerful AI tools to supercharge your productivity and creativity
            </p>
          </div>
        </header>

        {/* Enhanced Search and Filter */}
        <div className={`container mx-auto px-6 mb-12 transition-all duration-1000 delay-200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Enhanced Search */}
            <div className="relative max-w-lg w-full group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10 group-hover:text-purple-300 transition-colors duration-300" />
              <input
                type="text"
                placeholder="Search AI tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="relative w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-500 hover:bg-white/15 focus:bg-white/15 cursor-hover"
              />
              {searchTerm && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <button
                    onClick={() => setSearchTerm('')}
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-hover"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
            
            {/* Enhanced Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 transform hover:scale-110 cursor-hover relative overflow-hidden ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl animate-pulse-glow'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <span className="relative z-10">{category}</span>
                  {selectedCategory === category && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-30 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Tools Count */}
        <div className="container mx-auto px-6 mb-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-lg rounded-full border border-white/10 cursor-hover hover:bg-white/10 transition-all duration-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <p className="text-gray-300">
                Showing <span className="text-purple-400 font-bold text-lg animate-pulse">{filteredTools.length}</span> AI tools
                {selectedCategory !== 'All' && (
                  <span> in <span className="text-pink-400 font-semibold">{selectedCategory}</span></span>
                )}
              </p>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="container mx-auto px-6 pb-12">
          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredTools.map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 opacity-0 animate-pulse">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No tools found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:scale-105 transition-transform duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8 mt-16">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Tools Hub
              </span>
            </div>
            <p className="text-gray-400 mb-2">
              Discover more AI tools and stay updated with the latest innovations
            </p>
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AIToolsShowcase;