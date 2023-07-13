// Import images
// import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from "../images/web-project-2.jpg";
// import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from "../images/mobile-project-2.jpg";
import UIImage1 from "../images/ui-project-1.jpg";
import UIImage2 from "../images/ui-project-2.jpg";

export const projectsData = [
  {
    id: 1,
    title: "Menu QR",
    category: "Fullstack Application",
    img: WebImage2,
    ProjectHeader: {
      title: "Fullstack Application for Restaurants",
      publishDate: "Jun 26, 2023",
      tags: "Fullstack",
    },
  },
  {
    id: 2,
    title: "Food Delivery App",
    category: "Fullstack Application",
    img: MobileImage2,
  },
  {
    id: 3,
    title: "Church management App",
    category: "CI/CD",
    img: UIImage1,
  },
  {
    id: 4,
    title: "Cloud Storage Platform",
    category: "Backend API",
    img: UIImage2,
  },
];
 