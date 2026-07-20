export const courses = {
  "bds": {
    title: "Bachelor of Dental Surgery (BDS)",
    tagline: "Comprehensive clinical training. Research-driven education. Mentorship-led growth.",
    desc: "At Lenora Institute of Dental Sciences, the BDS program is designed to create confident, skilled, and ethical dental professionals through unmatched clinical exposure and structured academic excellence.",
    image: "/assets/BDS.webp",
    stats: [
      { value: "5 Years", label: "4 Years + 1 Year Internship" },
      { value: "355+", label: "Dental Units for Clinical Training" },
      { value: "18+", label: "Academic Experience" },
    ],
    sections: [
      {
        // index 0
        title: "About the BDS Program",
        content: `The Bachelor of Dental Surgery (BDS) at Lenora Institute of Dental Sciences is a structured undergraduate program that integrates foundational medical sciences with hands-on dental training.\nFrom the first year itself, students are exposed to a blend of theory, pre-clinical laboratory training, and progressive clinical responsibilities.`,
        highlights: [
          "Building strong scientific foundations",
          "Developing clinical competence",
          "Enhancing patient communication skills",
          "Promoting ethical dental practice",
          "Encouraging research awareness",
        ],
      },
      {
        // index 1
        title: "Program Structure",
        content: `The Bachelor of Dental Surgery (BDS) at Lenora Institute of Dental Sciences is a structured undergraduate program that integrates foundational medical sciences with hands-on dental training.\nFrom the first year itself, students are exposed to a blend of theory, pre-clinical laboratory training, and progressive clinical responsibilities.`,
        table: {
          headers: ["Year", "Academic Focus", "Key Subjects", "Clinical Exposure"],
          rows: [
            ["1st Year", "Foundation Sciences", "Anatomy, Physiology, Biochemistry, Dental Anatomy", "Pre-clinical lab introduction"],
            ["2nd Year", "Pre-Clinical", "Pharmacology, Pathology, Microbiology, Dental Materials", "Lab simulations"],
            ["3rd Year", "Clinical Entry", "Conservative Dentistry, Oral Surgery, Periodontics", "Supervised patient interaction"],
            ["4th Year", "Advanced Clinical", "Prosthodontics, Orthodontics, Pedodontics", "Supervised procedures across departments"],
            ["Internship", "Full Clinical Rotation", "All specialities", "Independent patient management"],
          ],
        },
      },
      {
        // index 2
        title: "Infrastructure & Facilities",
        content: "Students are trained using modern dental technologies aligned with current industry standards.",
        carousel: [
          "/assets/facility-1.webp",
          "/assets/facility-1.webp",
          "/assets/facility-1.webp",
        ],
      },
      {
        // index 3
        title: "Faculty & Mentorship",
        content: "The BDS program is guided by experienced faculty members who focus on mentorship rather than only lectures.",
        hod: {
          name: "Dr. Example Name",
          image: "/assets/HOD.webp",
          message: "As the first point of contact for patients, our department collaborates with a comprehensive healthcare team to ensure a holistic approach to management. We specialize in diagnosing and managing complex conditions, including oral ulcers, precancerous lesions, autoimmune diseases, neuralgias, orofacial pain, TMJ disorders, and oral cancers. Our outpatient department (OPD) ranks among the highest in-patient volume nationwide, a testament to our impactful work.",
        },
      },
      {
        // index 4
        title: "Our Faculty",
        content: "",
        faculty: {
          headers: ["S.no", "Faculty Name", "Key Subjects", "Experience"],
          rows: [
            ["01", "Full name", "Anatomy, Physiology, Biochemistry, Dental Anatomy", "Years of experience"],
            ["02", "Full name", "Pharmacology, Pathology, Microbiology, Dental Materials", "Years of experience"],
            ["03", "Full name", "Medicine, Surgery, Oral Pathology", "Years of experience"],
            ["04", "Full name", "All Major Dental Specialties", "Years of experience"],
            ["05", "Full name", "Multi-department rotations", "Years of experience"],
          ],
        },
      },
      {
        // index 5
        title: "Student Achievements",
        content: "",
        achievements: [
          { name: "Student name", dept: "Department", image: "/assets/student1.webp" },
          { name: "Student name", dept: "Department", image: "/assets/student1.webp" },
          { name: "Student nam", dept: "Department", image: "/assets/student1.webp" },
          { name: "Student name", dept: "Department", image: "/assets/student1.webp" },
          { name: "Studet nam", dept: "Department", image: "/assets/student1.webp" },
        ],
      },
      {
        // index 6
        title: "Research & Academic Development",
        content: "With over 1,700+ institutional research publications, students are exposed to a strong academic culture.",
        research: {
          headers: ["S.no", "Title", "Publication Year", "Research Paper"],
          rows: [
            ["01", "Foundation Sciences", "Anatomy, Physiology, Biochemistry, Dental Anatomy", null],
            ["02", "Pre-Clinical", "Pharmacology, Pathology, Microbiology, Dental Materials", null],
            ["01", "Foundation Sciences", "Anatomy, Physiology, Biochemistry, Dental Anatomy", null],
            ["02", "Pre-Clinical", "Pharmacology, Pathology, Microbiology, Dental Materials", null],
            ["01", "Foundation Sciences", "Anatomy, Physiology, Biochemistry, Dental Anatomy", null],
          ],
        },
      },
      {
        // index 7
        title: "Our Gallery/ Infrastructure",
        content: "",
        gallery: [
          "/assets/gallery1.webp",
          "/assets/gallery2.webp",
          "/assets/newsevent1.webp",
          "/assets/gallery4.webp",
          "/assets/gallery5.webp",
          "/assets/gallery6.webp",
          "/assets/gallery4.webp",
          "/assets/gallery5.webp",
          "/assets/gallery6.webp",
          "/assets/gallery1.webp",
          "/assets/gallery2.webp",
          "/assets/newsevent1.webp",
        ],
      },
      {
        // index 8
        title: "Frequently Asked Questions",
        faqs: [
          { question: "What facilities are available for students at LIDS?", answer: "LIDS provides state-of-the-art facilities including modern dental labs, digital radiography, CBCT scanners, a well-stocked library, sports facilities, hostel accommodation, cafeteria, and 24/7 surveillance." },
          { question: "Does LIDS provide hostel facilities for students?", answer: "Yes, LIDS provides separate hostel facilities for male and female students with all basic amenities including Wi-Fi, mess, and 24/7 security." },
          { question: "Does LIDS offer postgraduate dental programs?", answer: "Yes, LIDS offers MDS programs in various specializations and PG Diploma programs designed for dental professionals seeking advanced expertise." },
          { question: "What career opportunities are available after completing BDS?", answer: "BDS graduates from LIDS have gone on to work in hospitals, private practices, research institutions, and public health organizations across India and abroad." },
        ],
      },
    ],
    // target = index into `sections` above; -1 = hero/overview block at the top of the page
    sidebarLinks: [
      { label: "Overview", target: -1 },
      { label: "Program Structure", target: 1 },
      { label: "Clinical Training & Facilities", target: 2 },
      { label: "Faculty Directory", target: 3 },
      { label: "Research & Publications", target: 6 },
      { label: "Student Achievements", target: 5 },
      { label: "Infrastructure Gallery", target: 7 },
      { label: "FAQ's", target: 8 },
    ],
  },
  "mds": {
    title: "Master of Dental Surgery (MDS)",
    tagline: "Advanced specialisation. Research excellence. Clinical mastery.",
    desc: "The MDS program at LIDS is designed for dental graduates seeking to achieve mastery in their chosen specialisation through intensive clinical training and research.",
    image: "/assets/MDS.webp",
    stats: [
      { value: "3 Years", label: "Full-time Specialisation" },
      { value: "10+", label: "Specialisation Streams" },
      { value: "500+", label: "Research Publications" },
    ],
    sections: [
      {
        // index 0
        title: "About the MDS Program",
        content: `The MDS program offers advanced training in dental specialisations, combining rigorous academic coursework with intensive clinical exposure and research opportunities.`,
        highlights: [
          "Specialised clinical training",
          "Research methodology",
          "Academic and clinical mentorship",
          "Publication opportunities",
        ],
      },
    ],
    sidebarLinks: [
      { label: "Overview", target: -1 },
      { label: "Program Structure", target: 0 },
      { label: "Specialisations", target: 0 },
      { label: "Faculty Directory", target: 0 },
      { label: "Research & Publications", target: 0 },
      { label: "Student Achievements", target: 0 },
      { label: "FAQ's", target: 0 },
    ],
  },
  "pg-diploma": {
    title: "PG Diploma Programs",
    tagline: "Fast-track specialisation. Focused clinical skills.",
    desc: "Our PG Diploma programs offer intensive, focused training in specialized dental fields for practicing dentists looking to upskill quickly.",
    image: "/assets/PG.webp",
    stats: [
      { value: "1 Year", label: "Duration" },
      { value: "5+", label: "Diploma Streams" },
      { value: "100%", label: "Clinical Focus" },
    ],
    sections: [
      {
        // index 0
        title: "About PG Diploma Programs",
        content: `PG Diploma programs at LIDS are designed for working dental professionals who want to gain specialized skills in a shorter, more focused timeframe.`,
        highlights: [
          "Intensive weekend programs",
          "Hands-on clinical training",
          "Industry-recognized certification",
          "Flexible scheduling",
        ],
      },
    ],
    sidebarLinks: [
      { label: "Overview", target: -1 },
      { label: "Program Structure", target: 0 },
      { label: "Clinical Training", target: 0 },
      { label: "Faculty Directory", target: 0 },
      { label: "FAQ's", target: 0 },
    ],
  },
};