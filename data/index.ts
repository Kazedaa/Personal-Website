export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Publications", link: "#publications" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Collaboration at heart, problem-solving in mind – turning challenges into opportunities with team effort!",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/bg.jpg",
    spareImg: "",
  },
  {
    id: 7,
    title: "Technologies",
    description: "Constantly learning new",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My ML tech stack",
    description: "Driving insights with ML & AI",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "Solving problems with code to make a",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for turning ideas into reality.",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently interning at the",
    description: "Undergraduate Research Intern",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 opacity-50",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/code.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to build something amazing together? Let's start a project!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "A Hole New World Seamless Image Inpainting",
    des: "Image inpainting project using PatchGAN on the CelebA dataset. Fills in missing or damaged parts of images for enhanced photo editing, restoration, and object removal.",
    img: "/gans.png",
    iconLists: ["/torch.png", "/py.svg", "/flask.svg", "/js.svg"],
    link: "https://github.com/Kazedaa/A-Whole-New-World-Seamless-Image-Inpainting",
  },
  {
    id: 2,
    title: "Daily DDPM Anime",
    des: "An Instagram AI bot that generates and posts anime pictures. The bot utilizes a deep learning model, specifically a Denoising Diffusion Probabilistic Model (DDPM), implemented with PyTorch.",
    img: "/ddpm.png",
    iconLists: ["/torch.png", "/py.svg", "/insta.svg", "/ghac.svg"],
    link: "https://github.com/Kazedaa/Daily-DDPM-Anime",
  },
  {
    id: 3,
    title: "My Desktop SetUp - .MyDots",
    des: "Config files for my wallpaper agnostic desktop setup",
    img: "/dots.png",
    iconLists: ["linux.png", "/css.svg", "/js.svg", "/py.svg", "/bash.png"],
    link: "https://github.com/Kazedaa/.MyDots",
  },
  {
    id: 4,
    title: "Clash Of Legends",
    des: "A two-player fighting game implemented using JavaScript. The game features health bars for each player and a timer system to determine the winner if no one is knocked out.",
    img: "/game.png",
    iconLists: ["/js.svg", "/css.svg", "/html.png", "/itch.svg"],
    link: "https://github.com/Kazedaa/Clash-of-Legends",
  },
  {
    id: 5,
    title: "End-To-End Encrypted Communication",
    des: "A purely Digital system of units that communicate between each other via end-to-end encryption. The RSA encryption algorithm will be used and the user will be able to choose the kind of encryption. The aim is to achieve secure communication between two digital systems.",
    img: "/endtoend.png",
    iconLists: ["/verilog.png", "/logisim.svg"],
    link: "https://github.com/AdiPadi2703/End-To-End-Encrypted-Communication",
  },
  {
    id: 6,
    title: "CatBot - Discord Bot for Posting Cat Pictures",
    des: "CatBot is a simple Discord bot built with Python that posts random cat pictures to your server.",
    img: "/cat1.png",
    iconLists: ["/py.svg", "/discord.svg", "/flask.svg"],
    link: "https://github.com/Kazedaa/CutiePatootie",
  }
];

export const publications = [
  {
    id: 1,
    title: "A Whole New World Seamless Image Inpainting",
    des: "Image inpainting project using PatchGAN on the CelebA dataset. Fills in missing or damaged parts of images for enhanced photo editing, restoration, and object removal.",
    img: "/gans.png",
    iconLists: ["/torch.png", "/py.svg", "/flask.svg", "/js.svg"],
    link: "https://github.com/Kazedaa/A-Whole-New-World-Seamless-Image-Inpainting",
  },
  {
    id: 2,
    title: "Daily DDPM Anime",
    des: "An Instagram AI bot that generates and posts anime pictures. The bot utilizes a deep learning model, specifically a Denoising Diffusion Probabilistic Model (DDPM), implemented with PyTorch.",
    img: "/ddpm.png",
    iconLists: ["/torch.png", "/py.svg", "/insta.svg", "/ghac.svg"],
    link: "https://github.com/Kazedaa/Daily-DDPM-Anime",
  },
];

export const workExperience = [
  {
    description: "Undergraduate Research Intern",
    title: "Indian Institute of Science(IISC)",
    src: "/iisc.jpg",
    ctaText: "Paper",
    ctaLink: "https://wacv2025.thecvf.com",
    content: "Contributed as a co-author to the development of Un-DIVE: Underwater Domain Invariant Video Enhancement, a novel state-of-the-art (SoTA) method for enhancing the quality of underwater videos, under the supervision of Dr. Prathosh A. P. The paper is currently under review for publication in the well-reputed international conference, IEEE CVF Winter Conference on Applications of Computer Vision (WACV) 2025, in Tucson, Arizona."  
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Kazedaa"
  },
  {
    id: 2,
    img: "/mail.png",
    link: "mailto:hemangjamadagni@gmail.com"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/hemangjamadagni/"
  },
];
