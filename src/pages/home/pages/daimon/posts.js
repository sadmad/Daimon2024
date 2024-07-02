/* import the images  */
import dss from "../../../../images/dss.png";
import baltic from "../../../../images/baltic.png";
import catalog from "../../../../images/catalog.png";

const posts = [
  {
    title: "Decision Support System (DSS) for marine munitions",
    img: dss,
    alt: "DSS",
    text: "The DAIMON project, running from 2016 to 2019 with a budget of 4.7 million EUR and part-financed by the EU INTERREG Baltic Sea Region Programme, tackled the pressing issue of underwater munitions in the Baltic Sea. With approximately 50,000 tons of chemical warfare agents and at least 200,000 tons of conventional munitions from World Wars I and II dumped in the Baltic Sea, the project sought to address the ongoing release of contaminants due to corrosion and human disturbance. DAIMON developed a suite of decision-aid tools to assist governments and companies in making informed decisions about marine munitions management. These tools included a Decision Support System (DSS), a comprehensive munitions database, an EcoTox Toolbox for detecting warfare agents, and various management strategies. The follow-up project, DAIMON 2, aimed to popularize these tools and train administrative end-users, ensuring widespread practical application and enhancing the safety and environmental health of the Baltic Sea region.",
  },
  {
    title: "Baltic Sea Munitions Database",
    img: baltic,
    alt: "Baltic Sea Munitions Database",
    text: "The Clausthal University of Technology, in collaboration with Dr. Koehler GmbH, has developed a specialist software designed to manage complex data about munitions objects in the Baltic Sea. This software allows munitions experts, scientists, and practitioners involved in Baltic Sea exploration to conveniently input, retrieve, or update information on newly discovered objects through a user-friendly interface. The resulting Munitions Database securely stores detailed information on dumped munitions and is hosted within the integrated oceanographic system ZSPDO. Available free of charge to registered users, this database can be accessed through the provided link. For login rights or further inquiries, please contact Prof. Dr. Sven Hartmann at the Clausthal University of Technology.",
  },
  {
    title: "Catalogue of Baltic Sea dumped munitions' types",
    img: catalog,
    alt: "Catalogue of Baltic Sea dumped munitions' typesa",
    text: "The Polish Naval Academy in Gdynia, in collaboration with other DAIMON partners, has developed an online catalogue of all types of munitions resting on the Baltic Sea floor. Registered users can access and filter data through multi-attribute database queries. The catalogue, accessible here, covers both chemical and conventional munitions dumped after World War II. It aims to enhance knowledge about these munitions and identify pieces found during economic activities such as fishing, construction, and dredging. Users can search for munitions based on weapon type, calibre, and country of origin, with additional detailed information available in separate documents where applicable. For login rights or further inquiries, please contact Bartłomiej Pączek. For GIS information system access, including DAIMON and CHEMSEA results, use the provided link.",
  },
  // Add more posts as needed
];

export default posts;
