export async function getApplicationContent() {
  return {
    "Application Steps": {
      items: [
        { label: "Check Eligibility", desc: "Verify you meet 10+2 PCB requirements, minimum 50% marks, and valid NEET qualification." },
        { label: "Fill Online Application", desc: "Complete the application form on our official portal with your academic and details." },
        { label: "Submit Documents", desc: "Upload academic certificates, NEET scorecard, photo ID, and passport-size photo." },
        { label: "Merit List Publication", desc: "Merit list is published on the institute website based on NEET scores." },
        { label: "Attend Counseling", desc: "Selected candidates attend the counseling session for seat allocation and verification." },
        { label: "Confirm Admission", desc: "Pay the admission fee, and confirm your enrollment for the academic year." },
      ],
    },
    "BDS": {
      title: "Bachelor's in Dental Surgery (BDS) – Eligibility",
      description: "To join BDS program, you must meet the criteria set by DCI and Dr. NTRUHS:\nEducation: Passed 10+2 or Intermediate or equivalent examination with Physics, Chemistry, Biology, and English with Minimum Marks: 50% aggregate in PCB for General/EWS and 40% aggregate for SC/ST/BC.",
      items: [
        { label: "Entrance Exam", desc: "A valid NEET-UG qualifying score for the current academic year." },
        { label: "Age", desc: "Must be at least 17 years old by December 31st of the admission year." },
        { label: "Process", desc: "Admission is finalized through Dr. NTRUHS web counselling for both Government, Management and NRI quota seats." },
      ],
    },
    "MDS": {
      title: "Master's in Dental Surgery (MDS) – Eligibility",
      description: "To join MDS program, candidates must meet the criteria set by DCI and Dr. NTRUHS.",
      items: [
        { label: "Qualification", desc: "BDS degree with internship completion from a recognized institution." },
        { label: "Entrance Exam", desc: "A valid NEET-MDS qualifying score for the current academic year." },
        { label: "Process", desc: "Admission is finalized through Dr. NTRUHS web counselling based on merit and specialization availability." },
      ],
    },
  };
}

// export async function getApplicationContent() {
//   const res = await fetch("https://your-cms-api.com/api/application-steps", {
//     next: { revalidate: 3600 },
//   });
//   if (!res.ok) throw new Error("Failed to fetch CMS content");
//   const data = await res.json();
//
//   return {
//     "Application Steps": {
//       title: data.applicationSteps.title,
//       description: data.applicationSteps.description,
//       items: data.applicationSteps.items.map((s) => ({ label: s.title, desc: s.description })),
//     },
//     "BDS": {
//       title: data.bds.title,
//       description: data.bds.description,
//       items: data.bds.items.map((s) => ({ label: s.title, desc: s.description })),
//     },
//     "MDS": {
//       title: data.mds.title,
//       description: data.mds.description,
//       items: data.mds.items.map((s) => ({ label: s.title, desc: s.description })),
//     },
//   };
// }