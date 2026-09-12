const topicInput = document.getElementById("topic");
const explanationType = document.getElementById("explanationType");
const explainBtn = document.getElementById("explainBtn");
const answerBox = document.getElementById("answerBox");


explainBtn.addEventListener("click", function () {

    const topic = topicInput.value.trim();
    const type = explanationType.value;

    if (topic === "") {

        answerBox.innerHTML = `
            <div class="empty-answer">
                <i class="ri-error-warning-line"></i>
                <p>Please enter a topic first.</p>
            </div>
        `;

        return;
    }


    let explanation = "";


    if (type === "simple") {

        explanation = `
            <h3>${topic}</h3>

            <p>
                <strong>${topic}</strong> is an important concept.
                In simple words, it means understanding the basic
                idea of how ${topic} works and where it is used.
            </p>

            <p>
                Try learning the definition first, then understand
                its working with a small example.
            </p>
        `;

    } else {

        explanation = `
            <h3>${topic}</h3>

            <p>
                <strong>${topic}</strong> can be understood by
                studying its definition, working process,
                important concepts and practical applications.
            </p>

            <p>
                For better understanding, divide the topic into
                smaller parts and study each part with examples.
            </p>

            <h4>Study Tip</h4>

            <p>
                After learning the concept, try explaining it
                in your own words. This helps improve understanding
                and memory.
            </p>
        `;
    }


    answerBox.innerHTML = explanation;

});
