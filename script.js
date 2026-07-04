let resumeText = "";

const resumeFile = document.getElementById("resumeFile");
const resumeStatus = document.getElementById("resumeStatus");

resumeFile.addEventListener("change", function () {
  const file = resumeFile.files[0];

  if (!file) {
    return;
  }

  if (file.type !== "text/plain") {
    alert("Please upload only TXT resume file in this simple version.");
    resumeFile.value = "";
    return;
  }

  const reader = new FileReader();

  reader.onload = function (event) {
    resumeText = event.target.result;
    resumeStatus.innerText = "Resume text added successfully.";
  };

  reader.readAsText(file);
});

function generateCoverLetter() {
  const candidateName = document.getElementById("candidateName").value.trim();
  const jobRole = document.getElementById("jobRole").value.trim();
  const companyName = document.getElementById("companyName").value.trim();
  const skills = document.getElementById("skills").value.trim();
  const experienceLevel = document.getElementById("experienceLevel").value;
  const tone = document.getElementById("tone").value;

  const output = document.getElementById("output");
  const loading = document.getElementById("loading");

  if (!candidateName || !jobRole || !companyName || !skills) {
    alert("Please fill Candidate Name, Job Role, Target Company and Skills.");
    return;
  }

  output.innerText = "";
  loading.style.display = "block";

  setTimeout(function () {
    const resumeLine = resumeText
      ? "After reviewing my resume details, I believe my academic background and project experience align well with this opportunity."
      : "My academic background and practical project work have helped me build a strong foundation for this role.";

    const letter = `Dear Hiring Manager,

I am writing to express my interest in the ${jobRole} position at ${companyName}. My name is ${candidateName}, and I am excited about the opportunity to contribute my skills, learning mindset, and dedication to your organization.

${resumeLine} I have developed practical knowledge in ${skills}, and I enjoy applying these skills to build clean, useful, and user-focused solutions. As a ${experienceLevel.toLowerCase()}, I am continuously improving my technical abilities through real-world projects, internships, and hands-on practice.

What attracts me to ${companyName} is the opportunity to work in a professional environment where I can learn from experienced team members while contributing to meaningful projects. My ${tone.toLowerCase()} approach, problem-solving ability, consistency, and willingness to learn make me a suitable candidate for the ${jobRole} role.

I would be grateful for the opportunity to discuss how my skills and enthusiasm can add value to your organization. Thank you for considering my application.

Sincerely,
${candidateName}`;

    loading.style.display = "none";
    output.innerText = letter;
  }, 1800);
}

function copyLetter() {
  const text = document.getElementById("output").innerText;

  if (!text || text.includes("Your generated cover letter")) {
    alert("Please generate cover letter first.");
    return;
  }

  navigator.clipboard.writeText(text);

  alert("Cover letter copied to clipboard.");
}