const navLinks = [
  { label: "Store" },
  { label: "Mac" },
  { label: "iPhone" },
  { label: "Watch" },
  { label: "Vision" },
  { label: "AirPods" },
];

// the outer part of the macbook should change color
// however, those parts should not be changed
const noChangeParts = [
  "Object_84", // Screen bezel
  "Object_37", // Keyboard area
  "Object_34", // Trackpad
  "Object_12", // Apple logo area
  "Object_80", // Port areas
  "Object_35", // Hinge mechanism
  "Object_36", // Internal components
  "Object_13", // Screen glass
  "Object_125", // Keyboard keys
  "Object_76", // Speaker grilles
  "Object_33", // Rubber feet
  "Object_42", // Camera area
  "Object_58", // Ventilation
  "Object_52", // Internal frame
  "Object_21", // Connector pins
  "Object_10", // Display panel
];

// Color handler
export const shouldChangePartColor = (
  partName: string,
  materialName?: string
) => {
  if (noChangeParts.includes(partName)) {
    return false;
  }

  if (materialName) {
    const fixedMaterialKeywords = [
      "screen",
      "glass",
      "keyboard",
      "key",
      "logo",
      "port",
      "rubber",
    ];
    return !fixedMaterialKeywords.some((keyword) =>
      materialName.toLowerCase().includes(keyword)
    );
  }

  return true; // allow color change
};

interface PerformanceImage {
  id: string;
  src: string;
  alt?: string;
}

// Declare global constant from Vite config
declare const __BASE_PATH__: string;

// Helper function to get asset path with base URL
const getAssetPath = (path: string) =>
  `${__BASE_PATH__}${path.startsWith("/") ? path.slice(1) : path}`;

const performanceImages: PerformanceImage[] = [
  { id: "p1", src: getAssetPath("/performance1.png") },
  { id: "p2", src: getAssetPath("/performance2.png") },
  { id: "p3", src: getAssetPath("/performance3.png") },
  { id: "p4", src: getAssetPath("/performance4.png") },
  { id: "p5", src: getAssetPath("/performance5.jpg") },
  { id: "p6", src: getAssetPath("/performance6.png") },
  { id: "p7", src: getAssetPath("/performance7.png") },
];

interface PerformanceImgPosition {
  id: string;
  left?: number;
  right?: number;
  bottom?: number;
  top?: number;
  transform?: string;
  // 响应式定位支持
  desktop?: {
    left?: number;
    right?: number;
    bottom?: number;
    top?: number;
    transform?: string;
  };
  tablet?: {
    left?: number;
    right?: number;
    bottom?: number;
    top?: number;
    transform?: string;
  };
  mobile?: {
    left?: number;
    right?: number;
    bottom?: number;
    top?: number;
    transform?: string;
  };
}

// 基于黄金比例 (1.618) 和审美原则的图片布局
// 使用黄金分割点: 38.2% 和 61.8%
const performanceImgPositions: PerformanceImgPosition[] = [
  {
    id: "p1", // 左上角 - 黄金分割点
    left: 8,
    bottom: 72,
    transform: "scale(0.9) rotate(-2deg)",
    desktop: {
      left: 8,
      bottom: 72,
      transform: "scale(1) rotate(-2deg)",
    },
    tablet: {
      left: 12,
      bottom: 68,
      transform: "scale(0.85) rotate(-1deg)",
    },
    mobile: {
      left: 15,
      bottom: 65,
      transform: "scale(0.7)",
    },
  },
  {
    id: "p2", // 右侧中上 - 黄金比例位置
    right: 15,
    bottom: 65,
    transform: "scale(1.1) rotate(1deg)",
    desktop: {
      right: 15,
      bottom: 65,
      transform: "scale(1.1) rotate(1deg)",
    },
    tablet: {
      right: 18,
      bottom: 62,
      transform: "scale(0.9) rotate(0.5deg)",
    },
    mobile: {
      right: 20,
      bottom: 58,
      transform: "scale(0.75)",
    },
  },
  {
    id: "p3", // 右侧中部 - 视觉平衡点
    right: 5,
    bottom: 45,
    transform: "scale(0.95) rotate(3deg)",
    desktop: {
      right: 5,
      bottom: 45,
      transform: "scale(0.95) rotate(3deg)",
    },
    tablet: {
      right: 8,
      bottom: 42,
      transform: "scale(0.8) rotate(2deg)",
    },
    mobile: {
      right: 10,
      bottom: 40,
      transform: "scale(0.65)",
    },
  },
  {
    id: "p4", // 右下角 - 对角平衡
    right: 12,
    bottom: 8,
    transform: "scale(1.05) rotate(-1deg)",
    desktop: {
      right: 12,
      bottom: 8,
      transform: "scale(1.05) rotate(-1deg)",
    },
    tablet: {
      right: 15,
      bottom: 12,
      transform: "scale(0.9) rotate(-0.5deg)",
    },
    mobile: {
      right: 18,
      bottom: 15,
      transform: "scale(0.7)",
    },
  },
  {
    id: "p5", // 中心偏左 - 焦点位置 (跳过动画)
    left: 25,
    bottom: 38,
    transform: "scale(1) rotate(0deg)",
  },
  {
    id: "p6", // 左侧中下 - 黄金分割的镜像
    left: 6,
    bottom: 28,
    transform: "scale(0.85) rotate(2deg)",
    desktop: {
      left: 6,
      bottom: 28,
      transform: "scale(0.85) rotate(2deg)",
    },
    tablet: {
      left: 10,
      bottom: 32,
      transform: "scale(0.75) rotate(1deg)",
    },
    mobile: {
      left: 12,
      bottom: 35,
      transform: "scale(0.6)",
    },
  },
  {
    id: "p7", // 左下角 - 视觉锚点
    left: 18,
    bottom: 5,
    transform: "scale(0.9) rotate(-3deg)",
    desktop: {
      left: 18,
      bottom: 5,
      transform: "scale(0.9) rotate(-3deg)",
    },
    tablet: {
      left: 22,
      bottom: 8,
      transform: "scale(0.8) rotate(-2deg)",
    },
    mobile: {
      left: 25,
      bottom: 12,
      transform: "scale(0.65)",
    },
  },
];

const features = [
  {
    id: 1,
    icon: getAssetPath("/feature-icon1.svg"),
    highlight: "Email AI.",
    text: "Summarize and draft replies to emails instantly, so you stay on top of your inbox.",
    styles: "left-5 md:left-20 top-[20%] opacity-0 translate-y-5",
  },
  {
    id: 2,
    icon: getAssetPath("/feature-icon2.svg"),
    highlight: "Image AI.",
    text: "Generate or edit images with ease. Just type what you imagine, and let AI bring it to life.",
    styles: "right-5 md:right-20 top-[30%] opacity-0 translate-y-5",
  },
  {
    id: 3,
    icon: getAssetPath("/feature-icon3.svg"),
    highlight: "Summarize AI.",
    text: "Turn long articles, reports, or notes into clear, bite-sized summaries in seconds.",
    styles: "left-5 md:left-20 top-[50%] opacity-0 translate-y-5",
  },
  {
    id: 4,
    icon: getAssetPath("/feature-icon4.svg"),
    highlight: "AirDrop.",
    text: "Wirelessly share photos, large files, and more between your iPhone, your Mac, & other devices.",
    styles: "right-5 md:right-20 top-[70%] opacity-0 translate-y-5",
  },
  {
    id: 5,
    icon: getAssetPath("/feature-icon5.svg"),
    highlight: "Writing Tool.",
    text: "Write smarter and faster, whether it’s blogs, essays, or captions, AI helps polish your words.",
    styles: "left-5 md:left-20 top-[90%] opacity-0 translate-y-5",
  },
];

const featureSequence = [
  {
    videoPath: getAssetPath("/videos/feature-1.mp4"),
    boxClass: ".box1",
    delay: 1,
  },
  {
    videoPath: getAssetPath("/videos/feature-2.mp4"),
    boxClass: ".box2",
    delay: 0,
  },
  {
    videoPath: getAssetPath("/videos/feature-3.mp4"),
    boxClass: ".box3",
    delay: 0,
  },
  {
    videoPath: getAssetPath("/videos/feature-4.mp4"),
    boxClass: ".box4",
    delay: 0,
  },
  {
    videoPath: getAssetPath("/videos/feature-5.mp4"),
    boxClass: ".box5",
    delay: 0,
  },
];

const footerLinks = [
  { label: "Privacy Policy", link: "privacy_policy" },
  { label: "Terms of Use", link: "term_of_use" },
  { label: "Sales Policy", link: "sales_policy" },
  { label: "Legal", link: "legal" },
  { label: "Site Map", link: "site_map" },
];

export {
  features,
  featureSequence,
  footerLinks,
  navLinks,
  noChangeParts,
  performanceImages,
  performanceImgPositions,
};
