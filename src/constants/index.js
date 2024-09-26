import ROUTES from "../utils/routes";

export const menuItemsData = [
  {
    url: "/",
    title: "Home",
  },
  {
    title: "About Us",
    submenu: [
      {
        url: "/about-us",
        title: "Vinsum Axpress History",
      },
      {
        url: "/about",
        title: "Mission, Vision & Our Values",
      },
      {
        url: "/about",
        title: "Chairman & Managing Director",
      },
      {
        url: "/about",
        title: "Our Network",
      },
      {
        url: "/about",
        title: "Our Clients",
      },
      {
        url: "leadership-team",
        title: "Leadership Team",
      },
    ],
  },
  {
    title: "Our Services",
    submenu: [
      {
        url: ROUTES.SERVICES.MULTIMODAL_TRANSPORTATION,
        title: "Multimodal Transportation",
        submenu: [
          {
            url: "",
            title: "Multimodal Transportation",
          },
          {
            url: "/about",
            title: "Warehousing Solution",
          },
        ],
      },
      {
        url: ROUTES.SERVICES.WAREHOUSING_SOLUTION,
        title: "Warehousing Solution",
      },
      {
        url: ROUTES.SERVICES.PACKAGING_SOLUTION,
        title: "Packaging Solution",
      },
      {
        url: ROUTES.SERVICES.THRRE_PL_AND_INVENTORY_MANAGEMENT,
        title: "3PL & Inventory Management",
      },
      {
        url: ROUTES.SERVICES.FOUR_PL_AND_INPLANT_LOGISTICS_PROJECT_MANAGEMENT,
        title: "4PL/Inplant Logistics/Project Management",
      },
    ],
  },
  {
    title: "Tools",
    submenu: [
      {
        url: "",
        title: "Distance Calculator",
      },
      {
        url: "/about",
        title: "Unit Converter",
      },
      {
        url: "/about",
        title: "Downloads",
      },
      {
        url: "/about",
        title: "Branch Mapping",
      },
    ],
  },
  {
    title: "Media Center",
    submenu: [
      {
        url: "",
        title: "Blog",
      },
      {
        url: "/about",
        title: "Corporate Video",
      },
      {
        url: "/about",
        title: "Company Profile",
      },
      {
        url: "/about",
        title: "Gallery",
      },
    ],
  },
  {
    title: "Contact",
    submenu: [
      {
        url: "career",
        title: "Career",
      },
    ],
  },
];

export const openings = [
  {
    position: "IT Development Head-GM/AGM",
    experience: "12+ Year's",
    vacancy: 1,
    location: "Gurgaon Corporate-Udyog Vihar ph4",
    role: "Full Time",
  },
  {
    position: "Jr. Developer",
    experience: "2-5 Year's",
    vacancy: 3,
    location: "GGCO",
    role: "Full Time",
  },
  {
    position: "Sr. Developer",
    experience: "4-7 Year's",
    vacancy: 1,
    location: "GGCO",
    role: "Full Time",
  },
  {
    position: "Web Developer",
    experience: "4-7 Year's",
    vacancy: 1,
    location: "GGCO",
    role: "Full Time",
  },
  {
    position: "Desktop Support H & N",
    experience: "2-5 Year's",
    vacancy: 1,
    location: "GGCO",
    role: "Full Time",
  },
  {
    position: "BA-Documentation / Training",
    experience: "4-7 Year's",
    vacancy: 1,
    location: "GGCO",
    role: "Full Time",
  },
  {
    position: "SR. Manager (Female) - Sales & Operations",
    experience: "5-12 Year's",
    vacancy: 2,
    location: "GGCO",
    role: "Full Time",
  },
  {
    position: "Corporate Trainer",
    experience: "4-8 Year's",
    vacancy: 2,
    location: "GGCO",
    role: "Full Time",
  },
  {
    position: "Territory Head",
    experience: "10 to 15 Year's in Logistics",
    vacancy: 1,
    location: "Chennai",
    role: "Full Time",
  },
  {
    position: "Key Account Manager",
    experience: "3-7 Year's in logistics",
    vacancy: 1,
    location: "Kandivili (MBY)",
    role: "Full Time",
  },
  {
    position: "Key Account Manager",
    experience: "3-7 Year's in logistics",
    vacancy: 1,
    location: "JNPT (MBY)",
    role: "Full Time",
  },
];
