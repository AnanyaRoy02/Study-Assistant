// 1. Simulated Database of Topics
const KNOWLEDGE_BASE = {
  "javascript": {
    simple: "JavaScript is the programming language that makes web pages interactive, like a button that changes color when clicked.",
    detailed: "JavaScript is a high-level, interpreted programming language conforming to the ECMAScript specification. It features dynamic typing, prototype-based object orientation, and first-class functions, allowing for complex client-side behavior."
  },
  "machine learning": {
    simple: "Machine learning is teaching computers to learn from examples instead of giving them exact rules.",
    detailed: "Machine Learning (ML) is a subfield of artificial intelligence focused on building systems that learn from data, identify patterns, and make decisions with minimal human intervention using statistical models."
  },
  "css": {
    simple: "CSS (Cascading Style Sheets) is what makes a website look pretty. It handles colors, layout, fonts, and backgrounds.",
    detailed: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. It separates document content from document presentation, managing layouts across various devices."
  },
  "python": {
    simple: "Python is a very popular programming language that is famous for being clean, readable, and easy for beginners to learn.",
    detailed: "Python is an interpreted, high-level, general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs object-oriented approaches to help programmers write clear, logical code."
  },
  "py": {
    simple: "Python is a very popular programming language that is famous for being clean, readable, and easy for beginners to learn.",
    detailed: "Python is an interpreted, high-level, general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs object-oriented approaches to help programmers write clear, logical code."
  }


};

// 2. DOM Elements
const topicInput = document.getElementById("topic");
const explanationType = document.getElementById("explanationType");
const explainBtn = document.getElementById("explainBtn");
const answerBox = document.getElementById("answerBox");

// 3. Event Listener
explainBtn.addEventListener("click", function () {
  const topic = topicInput.value.trim().toLowerCase(); // Lowercase for easier matching
  const type = explanationType.value;

  // Check if input is empty
  if (topic === "") {
    answerBox.innerHTML = `
      <div class="empty-answer">
        <i class="ri-error-warning-line"></i>
        <p>Please enter a topic first.</p>
      </div>
    `;
    return;
  }

  // Check if we actually know the topic
  if (!KNOWLEDGE_BASE[topic]) {
    answerBox.innerHTML = `
      <div class="empty-answer">
        <i class="ri-question-line"></i>
        <p>Sorry, I couldn't find any information on "<strong>${topicInput.value}</strong>". Try searching for 'JavaScript' or 'Machine Learning'.</p>
      </div>
    `;
    return;
  }

  // Retrieve the actual explanation
  const explanationText = KNOWLEDGE_BASE[topic][type];

  // Render the real result
  answerBox.innerHTML = `
    <h3>${topicInput.value}</h3>
    <p>${explanationText}</p>
    ${type === 'detailed' ? `
      <h4>Study Tip</h4>
      <p>After learning the concept, try explaining it in your own words to improve retention.</p>
    ` : ''}
  `;
});
