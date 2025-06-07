// Danh sách ảnh gallery và metadata liên quan
const galleryData = [
  {
    id: 1,
    title: "Scene 1",
    description: "Mô tả cho ảnh 1",
    category: "Scene",
    image: "/assets/1-8/Canh 1.png",
    author: "Phan Thi Man",
    date: "2024-06-01",
    tags: ["map", "scene"]
  },
  {
    id: 2,
    title: "Scene 2",
    description: "Mô tả cho ảnh 2",
    category: "Scene",
    image: "/assets/1-8/Canh 2.png",
    author: "Phan Thi Man",
    date: "2024-06-02",
    tags: ["map", "scene"]
  },
  {
    id: 3,
    title: "Scene 3",
    description: "Mô tả cho ảnh 3",
    category: "Scene",
    image: "/assets/1-8/Canh 3.png",
    author: "Phan Thi Man",
    date: "2024-06-03",
    tags: ["map", "scene"]
  },
  {
    id: 4,
    title: "Scene 4",
    description: "Mô tả cho ảnh 4",
    category: "Scene",
    image: "/assets/1-8/Canh 4.png",
    author: "Phan Thi Man",
    date: "2024-06-04",
    tags: ["map", "scene"]
  },
  {
    id: 5,
    title: "Scene 5",
    description: "Mô tả cho ảnh 5",
    category: "Scene",
    image: "/assets/1-8/Canh 5.png",
    author: "Phan Thi Man",
    date: "2024-06-05",
    tags: ["map", "scene"]
  },
  {
    id: 6,
    title: "Scene 6",
    description: "Mô tả cho ảnh 6",
    category: "Scene",
    image: "/assets/1-8/Canh 6.png",
    author: "Phan Thi Man",
    date: "2024-06-06",
    tags: ["map", "scene"]
  },
  {
    id: 7,
    title: "Scene 7",
    description: "Mô tả cho ảnh 7",
    category: "Scene",
    image: "/assets/1-8/Canh 7.png",
    author: "Phan Thi Man",
    date: "2024-06-07",
    tags: ["map", "scene"]
  },
  {
    id: 8,
    title: "Scene 8",
    description: "Mô tả cho ảnh 8",
    category: "Scene",
    image: "/assets/1-8/Canh 8.png",
    author: "Phan Thi Man",
    date: "2024-06-08",
    tags: ["map", "scene"]
  },
  {
    id: 9,
    title: "Sketch 1",
    description: "Bản phác thảo số 1.",
    category: "Sketch",
    image: "/assets/sketch/1.png",
    author: "Phan Thi Man",
    date: "2024-06-09",
    tags: ["sketch", "character"]
  },
  {
    id: 10,
    title: "Sketch 2",
    description: "Bản phác thảo số 2.",
    category: "Sketch",
    image: "/assets/sketch/2.png",
    author: "Phan Thi Man",
    date: "2024-06-10",
    tags: ["sketch", "character"]
  },
  {
    id: 11,
    title: "Sketch 3",
    description: "Bản phác thảo số 3.",
    category: "Sketch",
    image: "/assets/sketch/3.png",
    author: "Phan Thi Man",
    date: "2024-06-11",
    tags: ["sketch", "character"]
  },
  {
    id: 12,
    title: "Sketch 4",
    description: "Bản phác thảo số 4.",
    category: "Sketch",
    image: "/assets/sketch/4.png",
    author: "Phan Thi Man",
    date: "2024-06-12",
    tags: ["sketch", "character"]
  },
  {
    id: 13,
    title: "Sketch 5",
    description: "Bản phác thảo số 5.",
    category: "Sketch",
    image: "/assets/sketch/5.png",
    author: "Phan Thi Man",
    date: "2024-06-13",
    tags: ["sketch", "character"]
  },
  {
    id: 14,
    title: "Sketch 6",
    description: "Bản phác thảo số 6.",
    category: "Sketch",
    image: "/assets/sketch/6.png",
    author: "Phan Thi Man",
    date: "2024-06-14",
    tags: ["sketch", "character"]
  },
  {
    id: 15,
    title: "Sketch 7",
    description: "Bản phác thảo số 7.",
    category: "Sketch",
    image: "/assets/sketch/7.png",
    author: "Phan Thi Man",
    date: "2024-06-15",
    tags: ["sketch", "character"]
  },
  {
    id: 16,
    title: "Sketch 8",
    description: "Bản phác thảo số 8.",
    category: "Sketch",
    image: "/assets/sketch/8.png",
    author: "Phan Thi Man",
    date: "2024-06-16",
    tags: ["sketch", "character"]
  },
  {
    id: 17,
    title: "Sketch 9",
    description: "Bản phác thảo số 9.",
    category: "Sketch",
    image: "/assets/sketch/9.png",
    author: "Phan Thi Man",
    date: "2024-06-17",
    tags: ["sketch", "character"]
  },
  {
    id: 18,
    title: "Sketch 10",
    description: "Bản phác thảo số 10.",
    category: "Sketch",
    image: "/assets/sketch/10.png",
    author: "Phan Thi Man",
    date: "2024-06-18",
    tags: ["sketch", "character"]
  },
  {
    id: 19,
    title: "Sketch 11",
    description: "Bản phác thảo số 11.",
    category: "Sketch",
    image: "/assets/sketch/11.png",
    author: "Phan Thi Man",
    date: "2024-06-19",
    tags: ["sketch", "character"]
  },
  {
    id: 20,
    title: "Sketch 12",
    description: "Bản phác thảo số 12.",
    category: "Sketch",
    image: "/assets/sketch/12.png",
    author: "Phan Thi Man",
    date: "2024-06-20",
    tags: ["sketch", "character"]
  },
  {
    id: 21,
    title: "Sketch 13",
    description: "Bản phác thảo số 13.",
    category: "Sketch",
    image: "/assets/sketch/13.png",
    author: "Phan Thi Man",
    date: "2024-06-21",
    tags: ["sketch", "character"]
  },
  {
    id: 22,
    title: "Sketch 14",
    description: "Bản phác thảo số 14.",
    category: "Sketch",
    image: "/assets/sketch/14.png",
    author: "Phan Thi Man",
    date: "2024-06-22",
    tags: ["sketch", "character"]
  },
  {
    id: 23,
    title: "Sketch 15",
    description: "Bản phác thảo số 15.",
    category: "Sketch",
    image: "/assets/sketch/15.png",
    author: "Phan Thi Man",
    date: "2024-06-23",
    tags: ["sketch", "character"]
  },
  {
    id: 24,
    title: "Sketch Canh 1",
    description: "Bản phác thảo canh 1.",
    category: "Sketch",
    image: "/assets/sketch/canh1.png",
    author: "Phan Thi Man",
    date: "2024-06-25",
    tags: ["sketch", "scene"]
  },
  {
    id: 25,
    title: "Sketch Canh 2",
    description: "Bản phác thảo canh 2.",
    category: "Sketch",
    image: "/assets/sketch/canh2.png",
    author: "Phan Thi Man",
    date: "2024-06-26",
    tags: ["sketch", "scene"]
  },
  {
        id: 26,
    title: "Sketch Canh 5",
    description: "Bản phác thảo canh 5.",
    category: "Sketch",
    image: "/assets/sketch/canh5.png",
    author: "Phan Thi Man",
    date: "2024-06-27",
    tags: ["sketch", "scene"]
  },
  {
    id: 27,
    title: "Sketch Canh 7",
    description: "Bản phác thảo canh 7.",
    category: "Sketch",
    image: "/assets/sketch/canh7.jpg",
    author: "Phan Thi Man",
    date: "2024-06-28",
    tags: ["sketch", "scene"]
  },
  {
    id: 28,
    title: "Sketch Canh 8",
    description: "Bản phác thảo canh 8.",
    category: "Sketch",
    image: "/assets/sketch/canh8.png",
    author: "Phan Thi Man",
    date: "2024-06-29",
    tags: ["sketch", "scene"]
  },{
    id: 29,
    title: "Loading Screen",
    description: "loading screen.",
    category: "Loading",
    image: "/assets/game_loading.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["sketch", "scene"]
  },
  {
    id: 30,
    title: "Credit Screen",
    description: "credit screen.",
    category: "Credits",
    image: "/assets/credit.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["sketch", "scene"]
  },
  {
    id: 31,
    title: "Setting Screen",
    description: "setting screen.",
    category: "Settings",
    image: "/assets/game_setting.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["sketch", "scene"]
  },
  {
    id: 33,
    title: "Menu Screen",
    description: "menu screen.",
    category: "Menu",
    image: "/assets/game_menu.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["sketch", "scene"]
  },
  {
    id: 34,
    title: "Asset cảnh 1",
    description: "asset cảnh 1.",
    category: "Assets",
    image: "/assets/asset/canh1.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["sketch", "scene"]
  },
  {
    id: 35,
    title: "Asset cảnh 2",
    description: "asset cảnh 2.",
    category: "Assets",
    image: "/assets/asset/canh2.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["sketch", "scene"]
  },
  {
    id: 36,
    title: "Asset cảnh 3",
    description: "asset cảnh 3.",
    category: "Assets",
    image: "/assets/asset/canh3.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["sketch", "scene"]
  },
  {
    id: 37,
    title: "Asset cảnh 4",
    description: "asset cảnh 4.",
    category: "Assets",
    image: "/assets/asset/canh4.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["sketch", "scene"]
  },
  {
    id: 38,
    title: "Asset cảnh 5",
    description: "asset cảnh 5.",
    category: "Assets",
    image: "/assets/asset/canh5.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["sketch", "scene"]
  },
  {
    id: 39,
    title: "Asset cảnh 6",
    description: "asset cảnh 6.",
    category: "Assets",
    image: "/assets/asset/canh6.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["sketch", "scene"]
  },
  {
    id: 40,
    title: "Asset cảnh 7",
    description: "asset cảnh 7.",
    category: "Assets",
    image: "/assets/asset/canh7.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["sketch", "scene"]
  },
  {
    id: 41,
    title: "Asset cảnh 8",
    description: "asset cảnh 8.",   
    category: "Assets",
    image: "/assets/asset/canh8.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["sketch", "scene"]
  },
  {
    id: 42,
    title: "Screen 1",
    description: "screen 1.",
    category: "Screenshoot",
    image: "/assets/screenshoot/1.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["screenshoot", "scene"]
  },
  {
    id: 43,
    title: "Screen 2",
    description: "screen 2.",
    category: "Screenshoot",
    image: "/assets/screenshoot/2.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["screenshoot", "scene"]
  },
  {
    id: 44,
    title: "Screen 3",
    description: "screen 3.",
    category: "Screenshoot",
    image: "/assets/screenshoot/3.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["screenshoot", "scene"]
  },
  {
    id: 45,
    title: "Screen 4",
    description: "screen 4.",
    category: "Screenshoot",
    image: "/assets/screenshoot/4.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["screenshoot", "scene"]
  },    
  {
    id: 46,
    title: "Screen 5",
    description: "screen 5.",
    category: "Screenshoot",
    image: "/assets/screenshoot/5.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["screenshoot", "scene"]
  },
  {
    id: 47,
    title: "Screen 6",  
    description: "screen 6.",
    category: "Screenshoot",
    image: "/assets/screenshoot/6.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["screenshoot", "scene"]
  },        
  {
    id: 48,
    title: "Screen 7",
    description: "screen 7.",
    category: "Screenshoot",
    image: "/assets/screenshoot/7.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["screenshoot", "scene"]
  },
  {
    id: 49,
    title: "Screen 8",  
    description: "screen 8.",
    category: "Screenshoot",
    image: "/assets/screenshoot/8.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["screenshoot", "scene"]
  },        
  {
    id: 50,
    title: "Screen 9",
    description: "screen 9.",
    category: "Screenshoot",
    image: "/assets/screenshoot/9.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["screenshoot", "scene"]
  },
  {
    id: 51,
    title: "Screen 10", 
    description: "screen 10.",
    category: "Screenshoot",
    image: "/assets/screenshoot/10.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["screenshoot", "scene"]
  },
  {
    id: 52,
    title: "Cursor",
    description: "cursor",
    category: "Components",
    image: "/assets/components/cursor128x128px.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["screenshoot", "scene"]
  },
  {
    id: 53,
    title: "Back button",
    description: "back button",
    category: "Components",
    image: "/assets/button/1.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["screenshoot", "scene"]
  },
  {
    id: 54,
    title: "Close button",
    description: "close button",
    category: "Components",
    image: "/assets/button/2.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["screenshoot", "scene"]
  },
  {
    id: 55,
    title: "Reload button",
    description: "reload button",
    category: "Components",
    image: "/assets/button/3.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["screenshoot", "scene"]
  },
  {
    id: 56,
    title: "Navigate button",
    description: "navigate button",
    category: "Components",
    image: "/assets/button/4.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["screenshoot", "scene"]
  },
  {
    id: 57,
    title: "Pause button",
    description: "pause button",
    category: "Components",
    image: "/assets/button/5.png",
    author: "Phan Thi Man",
    date: "2024-06-30",
    tags: ["screenshoot", "scene"]
  },

];

export default galleryData; 