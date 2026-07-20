export async function getApplicationContent() {
  return {
    "Application Steps": [
      { label: "Check Eligibility", desc: "Verify you meet 10+2 PCB requirements, minimum 50% marks, and valid NEET qualification." },
      { label: "Fill Online Application", desc: "Complete the application form on our official portal with your academic and details." },
      { label: "Submit Documents", desc: "Upload academic certificates, NEET scorecard, photo ID, and passport-size photo." },
      { label: "Merit List Publication", desc: "Merit list is published on the institute website based on NEET scores." },
      { label: "Attend Counseling", desc: "Selected candidates attend the counseling session for seat allocation and verification." },
      { label: "Confirm Admission", desc: "Pay the admission fee, and confirm your enrollment for the academic year." },
    ],
    "BDS": [
      { label: "Duration", desc: "5 years including 1 year internship." },
      { label: "Eligibility", desc: "10+2 with PCB, minimum 50% marks and valid NEET score." },
      { label: "Seats", desc: "100 seats available per academic year." },
    ],
    "MDS": [
      { label: "Duration", desc: "3 years postgraduate program." },
      { label: "Eligibility", desc: "BDS degree with internship completion and valid NEET-MDS score." },
      { label: "Specializations", desc: "Multiple specializations available across dental disciplines." },
    ],
  };
}

// export async function getApplicationContent() {
//   const res = await fetch("https://your-cms-api.com/api/application-steps", {
//     next: { revalidate: 3600 },
//   });
//   if (!res.ok) throw new Error("Failed to fetch CMS content");
//   const data = await res.json();

//   return {
//     "Application Steps": data.applicationSteps.map((s) => ({ label: s.title, desc: s.description })),
//     "BDS": data.bds.map((s) => ({ label: s.title, desc: s.description })),
//     "MDS": data.mds.map((s) => ({ label: s.title, desc: s.description })),
//   };
// }