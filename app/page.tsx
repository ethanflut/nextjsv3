"use client";

import { useState, useEffect } from 'react';
import { Eye, EyeOff, Hexagon, Code, Cpu, Globe } from 'lucide-react';
import { Button } from "app/ui/button";
import { Input } from "app/ui/input";
import { Label } from "app/ui/label";

type Star = {
  left: string;
  top: string;
  animationDuration: string;
  size: number;
};

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const starCount = 200;
      const newStars: Star[] = [];
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 30 + 10}s`,
          size: Math.random() * 2 + 1,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-4 relative overflow-hidden">
      {/* Blurred star background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: star.animationDuration,
            }}
          ></div>
        ))}
      </div>

      <div className="w-full max-w-md z-10">
        <div className="bg-gray-900 bg-opacity-80 rounded-xl shadow-2xl p-8 backdrop-blur-sm border border-gray-800">
          <div className="flex items-center justify-center mb-8">
            <Hexagon className="h-12 w-12 text-purple-500 mr-3" />
            <h1 className="text-4xl font-bold text-white">Sherny</h1>
          </div>
          <form className="space-y-6 text-center">
            <div className="space-y-2 text-center">
              <Label htmlFor="email" className="text-gray-300">Nombre de usuario</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="usuario" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200" 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300">Contraseña</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition duration-200"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            <Button type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white transition duration-200 transform hover:scale-105">
            <p>‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 
            ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ Iniciar sesión</p>
            </Button>
          </form>
        </div>
        <div className=" mt-8 flex justify-center space-x-6">
          <FeatureIcon icon={Code} />
          <FeatureIcon icon={Cpu} />
          <FeatureIcon icon={Globe} />
        </div>
      </div>
    </div>
  );
}

function FeatureIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <div className="bg-gray-800 bg-opacity-50 rounded-full p-3">
      <Icon className="h-6 w-6 text-purple-400" />
    </div>
  );
}
