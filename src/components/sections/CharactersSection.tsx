'use client'

import React, { useState } from 'react';
import Image from 'next/image';

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
    name: 'BÉ HOA', 
    src: '/assets/characters/bé Hoa.png',
    age: '8 tuổi',
    height: '1m34',
    personality: 'Hồn nhiên, tinh nghịch, đáng yêu, không ngại bày tỏ yêu thương với gia đình',
    appearance: 'Nhỏ nhắn, đáng yêu, tay đeo vòng cẩm thạch, tóc ngắn'
  },
  { 
    name: 'ĐĂNG', 
    src: '/assets/characters/Đăng.png',
    age: '17 tuổi',
    height: '1m71',
    personality: 'Cứng đầu, cáu gắt, khó chịu, nhưng bên trong là người dễ bị lay động, không giỏi bày tỏ cảm xúc',
    appearance: 'Cao gầy, da nhợt nhạt, quần thâm, mặt hốc hác'
  },
  { 
    name: 'CHA ĐĂNG', 
    src: '/assets/characters/bố Đăng.png',
    age: '52 tuổi',
    height: '1m78',
    personality: 'Thô lỗ cọc cằn, thường xuyên uống rượu bia, tính cách khó chịu',
    appearance: 'To con, đeo kính, luôn ăn mặc chỉn chu lịch sự, có phần cầu kỳ'
  },

  { 
    name: 'DÌ LIỄU', 
    src: '/assets/characters/dì Liễu.png',
    age: '36 tuổi',
    height: '1m66',
    personality: 'Khó chiều, hống hách, thô lỗ, ganh tị',
    appearance: 'Xinh đẹp, kiêu kỳ, mang theo nét đọc ác ẩn sau vẻ ngoài quyến rũ'
  },
  { 
    name: 'MẸ ĐĂNG', 
    src: '/assets/characters/mẹ Đăng.png',
    age: '42 tuổi',
    height: '1m65',
    personality: 'Dịu dàng, chu đáo, yêu thương con cái',
    appearance: 'Tóc đen dài, trang phục đơn giản, nhẹ nhàng'
  },
];

export default function CharacterProfile() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(characters[0]);

  return (
    <div className="min-h-screen bg-[#fff2d7] overflow-x-hidden">
      {/* Header */}
      <div className="bg-[#fff2d7] border-b-2 border-amber-400">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center text-amber-800">
            PROFILE
          </h1>
        </div>
      </div>

      {/* Character Selection Tabs */}
      <div className="bg-amber-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {characters.map((character) => (
              <button
                key={character.name}
                onClick={() => setSelectedCharacter(character)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  selectedCharacter.name === character.name
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-red-500 text-white hover:bg-red-700'
                }`}
              >
                {character.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Content - Layout giống hình mẫu */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left side - Character Image */}
            <div className="bg-white p-8 flex flex-col items-center justify-center">
              <div className="relative w-[400px] h-[500px] mb-6">
                <Image
                  src={selectedCharacter.src}
                  alt={selectedCharacter.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-amber-800 mb-2">
                  {selectedCharacter.name}
                </h2>
                <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  CHARACTERS
                </div>
              </div>
            </div>

            {/* Right side - Character Details */}
            <div className="p-8 bg-white">
              <div className="space-y-6">
                <div className="border-l-4 border-amber-700 pl-4">
                  <h3 className="text-2xl font-bold text-amber-800 mb-4">
                    PROFILE DETAILS
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
                    <div className="w-2 h-2 bg-amber-700 rounded-full mt-2"></div>
                    <div>
                      <span className="font-bold text-gray-700">Tuổi：</span>
                      <span className="text-gray-600">{selectedCharacter.age}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
                    <div className="w-2 h-2 bg-amber-700 rounded-full mt-2"></div>
                    <div>
                      <span className="font-bold text-gray-700">Chiều cao：</span>
                      <span className="text-gray-600">{selectedCharacter.height}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
                    <div className="w-2 h-2 bg-amber-700 rounded-full mt-2"></div>
                    <div>
                      <span className="font-bold text-gray-700">Tính cách：</span>
                      <span className="text-gray-600">{selectedCharacter.personality}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
                    <div className="w-2 h-2 bg-amber-700 rounded-full mt-2"></div>
                    <div>
                      <span className="font-bold text-gray-700">Ngoại hình：</span>
                      <span className="text-gray-600">{selectedCharacter.appearance}</span>
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
                    <span className="text-white">★</span>
                    <span className="font-bold">CHARACTER CARDS</span>
                    <span className="text-white">★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}