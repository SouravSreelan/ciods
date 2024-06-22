import linkedin from '../../public/linkedin.svg'
import twitter from '../../public/twitter.svg'
import proteo from "../../public/proteo.png";
import proteoark from "../../public/proteoark.png"

export const menuItems = [
    {
        id: "home",
        title: "Home",
      },
      {
        id: "Publications",
        title: "Publications",
      },
      {
        id: "Teams",
        title: "Teams",
      },
      {
        id: "Tools&Databases",
        title: "Tools & Databases",
      },
      {
        id: "Contact",
        title: "Contact us",
      },
  ];


  export const footerLinks = [
    {
      title: "Useful Links",
      links: [
        {
          name: "Home",
          link: "",
        },
        {
          name: "Publications",
          link: "",
        },
        {
          name: "Teams",
          link: "",
        },
        {
          name: "Contact",
          link: "",
        },
        
      ],
    },
    {
      title: "Tools & Databases",
      links: [
        {
          name: "Virhostlncr",
          link: "https://ciods.in/VirhostlncR/",
        },
        {
          name: "RememProt",
          link: "https://rememprot.ciods.in",
        },
        {
          name: "ProteoArk",
          link: "https://ciods.in/proteoark/",
        },
        

      ],
    },
    {
      title: "Tools & Databases",
      links: [
        {
          name: "HNCDrugResDb",
          link: "https://ciods.in/drug_resistant/profile",
        },
       
        {
          name: "HomoeoDb",
          link: "https://ciods.in/homoeomicsdb/",
        },
        {
          name: "GCPDB",
          link: "https://ciods.in/gcpdb/home/",
        },
     
      ],
    },
   
  ];
  
  export const socialMedia = [
  
    {
      id: "social-media-1",
      icon: twitter,
      link: "https://www.twitter.com/",
    },
    {
      id: "social-media-2",
      icon: linkedin,
      link: "https://www.linkedin.com/",
    },
  ];

  export const FeatureCards = [
  
    {
      id: "virhost",
      icon: proteoark,
      name: "Virhostlncr",
      desc: "Virus modulated host-cellular long non-coding RNAs",
      url: "https://ciods.in/VirhostlncR/"
    },
    {
      id: "remem",
      icon: proteoark,
      name: "REMEMProt",
      desc: "Open resource of plasma membrane proteins",
      url: "https://rememprot.ciods.in/"
    },
    {
      id: "proteoark",
      icon: proteoark,
      name: "ProteoArk",
      desc: "One stop solution for data analysis and data visualization",
      url: "https://ciods.in/proteoark/"
    },
    {
      id: "HNCDrugResDb",
      icon: proteoark,
      name: "HNCDrugResDb",
      desc: "Head and Neck Cancer Drug Resistance Database",
      url: "https://ciods.in/drug_resistant/profile"
    },
    {
      id: "HomoeOmics",
      icon: proteoark,
      name: "HomoeOmics DB",
      desc: "Multi-omics database on homeopathic drug interactions",
      url: "https://ciods.in/homoeomicsdb/"
    },
    {
      id: "GCPDB",
      icon: proteoark,
      name: "GCPDB",
      desc: "Gastric Cancer proteomics database",
      url: "https://ciods.in/gcpdb/home/"
    },
  
  
  ];


  export type Feature = {
    id: number;
    icon: JSX.Element;
    title: string;
    paragraph: string;
  };
  