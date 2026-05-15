/* ============================================================
   MediCare Plus — Symptom Checker Logic
   ============================================================ */

const symptomQuestions = [
  {
    id: 1,
    question: "What is your primary symptom?",
    options: [
      { text: "Chest Pain or Irregular Heartbeat", next: 2, dept: "Cardiology" },
      { text: "Severe Headache or Dizziness", next: 3, dept: "Neurology" },
      { text: "Joint Pain or Back Ache", next: 4, dept: "Orthopedics" },
      { text: "Child's Fever or Cough", next: 5, dept: "Pediatrics" },
      { text: "Pregnancy or Women's Health", next: 6, dept: "Gynecology" },
      { text: "Other / General Wellness", next: 7, dept: "General Medicine" }
    ]
  }
];

// Simple mapping for MVP
const departments = {
  "Cardiology": { icon: "❤️", doc: "Dr. Priya Sharma", link: "appointment.html?dept=cardiology" },
  "Neurology": { icon: "🧠", doc: "Dr. Rajesh Kumar", link: "appointment.html?dept=neurology" },
  "Orthopedics": { icon: "🦴", doc: "Dr. Sandeep Singh", link: "appointment.html?dept=orthopedics" },
  "Pediatrics": { icon: "👶", doc: "Dr. Anjali Mehta", link: "appointment.html?dept=pediatrics" },
  "Gynecology": { icon: "🤱", doc: "Dr. Kavita Verma", link: "appointment.html?dept=gynecology" },
  "General Medicine": { icon: "🩺", doc: "Dr. Amit Patel", link: "appointment.html?dept=general" }
};

document.addEventListener('DOMContentLoaded', () => {
  initSymptomChecker();
});

function initSymptomChecker() {
  const container = document.getElementById('symptomChecker');
  if (!container) return;

  renderQuestion(1);
}

function renderQuestion(questionId) {
  const container = document.getElementById('symptomChecker');
  if (!container) return;

  const q = symptomQuestions.find(sq => sq.id === questionId);
  if (!q) return;

  let html = `
    <div class="sc-header" style="text-align: center; margin-bottom: 30px;">
      <h3 style="font-size: 24px; color: var(--navy);">${q.question}</h3>
      <p style="color: var(--text-muted); font-size: 15px;">Select the option that best describes your condition.</p>
    </div>
    <div class="sc-options" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
  `;

  q.options.forEach(opt => {
    html += `
      <button class="sc-btn" style="
        background: white; border: 2px solid var(--gray-200); padding: 16px 20px;
        border-radius: var(--radius-md); font-size: 16px; font-weight: 600; color: var(--navy);
        cursor: pointer; transition: var(--transition); text-align: left;
      " onclick="showResult('${opt.dept}')"
      onmouseover="this.style.borderColor='var(--teal)'; this.style.color='var(--teal)';"
      onmouseout="this.style.borderColor='var(--gray-200)'; this.style.color='var(--navy)';">
        ${opt.text}
      </button>
    `;
  });

  html += `</div>`;
  
  // Add a simple fade-in
  container.style.opacity = 0;
  container.innerHTML = html;
  setTimeout(() => container.style.opacity = 1, 50);
}

function showResult(deptName) {
  const container = document.getElementById('symptomChecker');
  const dept = departments[deptName];

  let html = `
    <div class="sc-result" style="text-align: center; animation: fadeInUp 0.5s ease;">
      <div style="font-size: 48px; margin-bottom: 16px;">${dept.icon}</div>
      <h3 style="font-size: 24px; color: var(--navy); margin-bottom: 8px;">Recommended: ${deptName}</h3>
      <p style="color: var(--text-muted); margin-bottom: 24px;">Based on your selection, we recommend consulting our ${deptName} department.</p>
      
      <div style="background: var(--off-white); padding: 20px; border-radius: var(--radius-md); display: inline-block; text-align: left; margin-bottom: 30px;">
        <strong style="display: block; color: var(--navy); margin-bottom: 4px;">Top Specialist:</strong>
        <span style="color: var(--teal); font-weight: 600; font-size: 18px;">${dept.doc}</span>
      </div>
      <br>
      <a href="${dept.link}" class="btn-primary" style="display: inline-block;">Book Appointment Now</a>
      <button onclick="renderQuestion(1)" style="margin-left: 16px; background: none; border: none; color: var(--text-muted); text-decoration: underline; cursor: pointer; font-size: 15px;">Start Over</button>
    </div>
  `;

  container.style.opacity = 0;
  setTimeout(() => {
    container.innerHTML = html;
    container.style.opacity = 1;
  }, 200);
}
