'use client'    

import React, { useState } from 'react';
import Image from 'next/image';

// Extend the character type with more details
interface Character {
  name: string;
  src: string;
  age: string;
  height: string;
  personality: string;
  appearance: string;
}

const characters: Character[] = [
  { 
    name: 'Bé Hoa', 
    src: '/assets/characters/bé Hoa.png',
    age: '8 tuổi',
    height: '1m30',
    personality: 'Hồn nhiên, vui vẻ, thích khám phá',
    appearance: 'Tóc đen buộc 2 bên, mặc váy màu hồng, hay cười'
  },
  { 
    name: 'Bố Đăng', 
    src: '/assets/characters/bố Đăng.png',
    age: '45 tuổi',
    height: '1m75',
    personality: 'Nghiêm nghị, yêu thương gia đình',
    appearance: 'Tóc đen ngắn, mặc áo sơ mi, dáng người cao'
  },
  { 
    name: 'Đăng', 
    src: '/assets/characters/Đăng.png',
    age: '12 tuổi',
    height: '1m45',
    personality: 'Thông minh, dũng cảm, có trách nhiệm',
    appearance: 'Tóc đen, mặc áo phông và quần jean'
  },
  { 
    name: 'Dì Liễu', 
    src: '/assets/characters/dì Liễu.png',
    age: '40 tuổi',
    height: '1m65',
    personality: 'Bí ẩn, khó đoán, thông thái',
    appearance: 'Tóc đen dài, mặc áo dài truyền thống'
  },
  { 
    name: 'Mẹ Đăng', 
    src: '/assets/characters/mẹ Đăng.png',
    age: '42 tuổi',
    height: '1m65',
    personality: 'Dịu dàng, chu đáo, yêu thương con cái',
    appearance: 'Tóc đen dài, mặc váy dài thanh lịch'
  },
];

export default function CharactersSection() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Characters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {characters.map((character) => (
            <div 
              key={character.name} 
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedCharacter(character)}
            >
              <div className="w-[200px] h-[476px] flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110">
                <Image
                  src={character.src}
                  alt={character.name}
                  width={200}
                  height={476}
                  className="object-contain w-full h-full"
                />
              </div>
              <p className="mt-4 text-lg font-semibold">{character.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Modal */}
      {selectedCharacter && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 max-w-4xl w-full rounded-lg overflow-hidden relative">
            {/* Close button */}
            <button 
              onClick={() => setSelectedCharacter(null)}
              className="absolute right-4 top-4 text-white hover:text-gray-300 z-10"
            >
              ✕
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div className="relative h-[500px]">
                <Image
                  src={selectedCharacter.src}
                  alt={selectedCharacter.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-red-400">{selectedCharacter.name}</h3>
                <div className="space-y-2">
                  <p><span className="font-semibold">Tuổi:</span> {selectedCharacter.age}</p>
                  <p><span className="font-semibold">Chiều cao:</span> {selectedCharacter.height}</p>
                  <p><span className="font-semibold">Tính cách:</span> {selectedCharacter.personality}</p>
                  <p><span className="font-semibold">Ngoại hình:</span> {selectedCharacter.appearance}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}