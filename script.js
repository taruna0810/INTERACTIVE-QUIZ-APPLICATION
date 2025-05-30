const questions = [
            {
                question: "What is the capital of India?",
                options: ["Punjab", "Kolkata", "Delhi", "Mumbai"],
                correctAnswer: "Delhi"
            },
            {
                question: "Which planet is known as the 'Red Planet'?",
                options: ["Mars", "Jupiter", "Venus", "Saturn"],
                correctAnswer: "Mars"
            },
            {
                question: "What is the chemical symbol for water?",
                options: ["Wo", "Wa", "H2O", "HO2"],
                correctAnswer: "H2O"
            },
            {
                question: "What is the full form of HTML",
                options: ["Hyper Text Markup Language", "Hyper Tool Markup Language", "Home Text Making Language", "Hyperlink Text Module Language"],
                correctAnswer: "Hyper Text Markup Language"
            },
            {
                question: "What is the full form of CSS",
                options: ["Creative Style Sheet", "Colorful Style Syntax", "Cascading Style Sheet", "Computer Style Sheet"],
                correctAnswer: "Cascading Style Sheet"
            },
            {
                question: "What is the currency of India?",
                options: ["Doller", "Rupee", "Paisa", "Won"],
                correctAnswer: "Rupee"
            },
            {
                question: "What is the tallest mountain in the world?",
                options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
                correctAnswer: "Mount Everest"
            },
            {
                question: "Which animal is known as the 'King of the Jungle'?",
                options: ["Tiger", "Elephant", "Lion", "Cheetah"],
                correctAnswer: "Lion"
            },
            {
                question: "What is the name of the first man to walk on the moon?",
                options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Alan Shepard"],
                correctAnswer: "Neil Armstrong"
            },
            {
                question: "What is the chemical symbol for gold?",
                options: ["Au", "Ag", "Fe", "Cu"],
                correctAnswer: "Au"
            },
            {
                question: "Which continent is known as the 'Land of the Rising Sun'?",
                options: ["China", "Japan", "South Korea", "Vietnam"],
                correctAnswer: "Japan"
            },
             {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                correctAnswer: "Pacific Ocean"
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                correctAnswer: "William Shakespeare"
            },
            {
                question: "What is the capital of Canada?",
                options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                correctAnswer: "Ottawa"
            },
            {
                question: "What is the smallest country in the world?",
                options: ["Monaco", "San Marino", "Vatican City", "Malta"],
                correctAnswer: "Vatican City"
            }
            // Add more questions here
        ];

        let currentQuestionIndex = 0;
        let score = 0;
        const questionElement = document.getElementById('question');
        const optionsContainer = document.getElementById('options-container');
        const nextButton = document.getElementById('next-button');
        const resultsContainer = document.getElementById('results-container');

        function loadQuestion() {
            const currentQuestion = questions[currentQuestionIndex];
            questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
            optionsContainer.innerHTML = ''; // Clear previous options

            currentQuestion.options.forEach(option => {
                const button = document.createElement('div');
                button.classList.add('option');
                button.textContent = option;
                button.addEventListener('click', () => checkAnswer(option));
                optionsContainer.appendChild(button);
            });

            nextButton.style.display = 'none';
        }

        function checkAnswer(selectedOption) {
            const currentQuestion = questions[currentQuestionIndex];
            const options = optionsContainer.children;
            let isCorrect = selectedOption === currentQuestion.correctAnswer;

            for (let i = 0; i < options.length; i++) {
                options[i].classList.remove('correct', 'incorrect');
                if (options[i].textContent === currentQuestion.correctAnswer) {
                    options[i].classList.add('correct');
                }
                if (options[i].textContent === selectedOption && !isCorrect) {
                    options[i].classList.add('incorrect');
                }
            }

            if (isCorrect) {
                score++;
            }

            // Disable further clicks after an answer is selected
            Array.from(options).forEach(option => {
                option.style.pointerEvents = 'none';
            });

            if (currentQuestionIndex < questions.length - 1) {
                nextButton.style.display = 'block';
            } else {
                showResults();
            }
        }

        function nextQuestion() {
            currentQuestionIndex++;
            loadQuestion();
        }

        function showResults() {
            questionElement.style.display = 'none';
            optionsContainer.style.display = 'none';
            nextButton.style.display = 'none';
            resultsContainer.style.display = 'block';
            resultsContainer.innerHTML = `<strong>Quiz Completed!</strong><br>Your final score is: <strong>${score}</strong> out of ${questions.length}`;
        }

        nextButton.addEventListener('click', nextQuestion);

        // Initial load
        loadQuestion();