import ROUTES from "../utils/routes";

export const social = {
  instagram: "https://www.instagram.com/vinsumaxpress?igsh=cHZudWkycjRxbWpv",
  facebook: "https://www.facebook.com/share/VBhwN2RJxduTKbNh/?mibextid=WC7FNe",
  twitter: "https://x.com/vinsum_",
  linkedin: "https://www.linkedin.com/company/vinsum-axpress",
  youtube: "www.youtube.com/@vinsumaxpressindiapvtltd.8044",
};

export const menuItemsData = [
  {
    url: "/",
    title: "Home",
  },
  {
    title: "About Us",
    submenu: [
      {
        url: `${ROUTES.ABOUT.VINSUM_AXPRESS_HISTORY}`,
        title: "Vinsum Axpress History",
      },
      {
        url: `${ROUTES.ABOUT.ABOUTUS}/${ROUTES.ABOUT.MISSION_VISIONOUR_VALUES}`,
        title: "Mission, Vision & Our Values",
      },
      {
        url: `${ROUTES.ABOUT.ABOUTUS}/${ROUTES.ABOUT.CHAIRMAAN_AND_MANAGING_DIRECTOR}`,
        title: "Chairman & Managing Director",
      },
      {
        url: `${ROUTES.ABOUT.ABOUTUS}/${ROUTES.ABOUT.OUR_NETWORK}`,
        title: "Our Network",
      },
      {
        url: `${ROUTES.ABOUT.ABOUTUS}/${ROUTES.ABOUT.OUR_CLIENTS}`,
        title: "Our Clients",
      },
      {
        url: `${ROUTES.ABOUT.ABOUTUS}/${ROUTES.ABOUT.LEADERSHIP_TEAM}`,
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

export const clients = [
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/cnh-industrial-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/escorts-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/sonalika-international-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/mahindra-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/john-deere-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/gkn-driveline-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/mahle-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/vibracoustic-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/brembo-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/rane-expanding-horizons-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/anand-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/m-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/akc-kunstocom-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/continental-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/bajaj-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/cosmos-infotech-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/panacea-biotec-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/yamaha-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/iina-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/spark-minda-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/gkn-driveline-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/federal-mogul-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/cosmos-infotech-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/panacea-biotec-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/vardhman-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/serum-institute-of-india-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/winsome-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/cnh-industrial-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/escorts-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/sonalika-international-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/mahindra-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/john-deere-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/gkn-driveline-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/mahle-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/vibracoustic-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/brembo-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/rane-expanding-horizons-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/anand-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/m-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/akc-kunstocom-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/continental-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/bajaj-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/cosmos-infotech-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/panacea-biotec-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/yamaha-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/iina-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/spark-minda-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/gkn-driveline-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/federal-mogul-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/cosmos-infotech-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/panacea-biotec-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/vardhman-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/serum-institute-of-india-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/winsome-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/cnh-industrial-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/escorts-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/sonalika-international-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/mahindra-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/john-deere-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/gkn-driveline-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/mahle-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/vibracoustic-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/brembo-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/rane-expanding-horizons-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/anand-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/m-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/akc-kunstocom-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/continental-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/bajaj-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/cosmos-infotech-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/panacea-biotec-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/yamaha-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/iina-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/spark-minda-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/gkn-driveline-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/federal-mogul-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/cosmos-infotech-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/panacea-biotec-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/vardhman-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/serum-institute-of-india-logo.png",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/winsome-logo.png",
  },
];

export const leadershipTeams = [
  {
    image: "https://vinsumaxpress.com/assets/img/team/CMD.jpeg",
    name: "Mr. Vinod Sharma",
    position: "Chairman & Managing Director",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  {
    image: "https://vinsumaxpress.com/assets/img/team/team-4.jpg",
    name: "Mrs. Kusum Sharma",
    position: "Chair Person",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  {
    image: "https://vinsumaxpress.com/assets/img/team/Lalit%20Sharma.jpg",
    name: "Mr. Lalit Sharma",
    position: "Managing Director",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  {
    image:
      "https://vinsumaxpress.com/assets/img/team/Amit-Sharma-Executive-director.jpg",
    name: "Mr. Amit Sharma",
    position: "Executive Director",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  {
    image: "https://vinsumaxpress.com/assets/img/team/Ankit%20Sharma.jpg",
    name: "Mr. Ankit Sharma",
    position: "Executive Director",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  {
    image: "https://vinsumaxpress.com/assets/img/team/tc_web.jpg",
    name: "Mr. T.C Sharma",
    position: "President",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  {
    image: "https://vinsumaxpress.com/assets/img/team/vimal.jpg",
    name: "Mr. Vimal Sharma",
    position: "Head Credit Control",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  {
    image: "https://vinsumaxpress.com/assets/img/team/BL%20SHarma.jpg",
    name: "Mr. Babulal Sharma",
    position: "Head - Audit & Cost Control",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  {
    image: "https://vinsumaxpress.com/assets/img/team/AK_web.jpg",
    name: "Mr. Anil Rajput",
    position: "Head Billing",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  {
    image: "https://vinsumaxpress.com/assets/img/team/Amitabha_IT-Head1.jpg",
    name: "Amitabha Mohapatra",
    position: "Head Information Technology(IT)",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  {
    image: "https://vinsumaxpress.com/assets/img/team/mohit-vashisht.jpg",
    name: "Mr. Mohit Vashisht",
    position: "Manager Packaging Manufacturing Plant",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  {
    image: "https://vinsumaxpress.com/assets/img/team/sudhir%20bansal.jpg",
    name: "Mr. Sudhir Mohan Bansal",
    position: "President",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  {
    image: "https://vinsumaxpress.com/assets/img/team/SUPRIYA_HR.jpg",
    name: "Mrs. Supriya Dutt",
    position: "HR HEAD",
    twitter: "",
    facebook: "",
    linkedin: "",
  },
];
