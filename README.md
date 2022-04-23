# groupProject1
API - Application Programing Interface. An API is a source where we can request data from. 
refference: https://www.youtube.com/watch?v=7f2HNadULOs


Idea 1:
definition: Trivia game.
link: https://opentdb.com/api_config.php
    Example: 
    trivia questions -> Several APIs will be used to get random trivia question based off the user's choice of topic as well as the ammount of questions users desire to answer.
    1 - User is propted with an input field to enter their name.
    2 - User is prompted with a dropdown menu to select which topic he wants.
    3 - User is prompted with a dropdown menu to select the ammount of questions he/she wants to answer.
    4 - Upon choosing a topic and ammount of questions, the respective API will load the questions.
    5 - If the user sellects the right answer, 5 points are added to the overall score, the selected answer gets a green background and after 1 second the next question is loaded. If the user sellects the wrong answer, no points are added to the overall score, the selected answer gets a red background, and after 1 second the next question is loaded.
    6 - After the 10th question is answered, a pop up window appears displaying: "congratulations" + the name of the user + ", you scored" + overallScore.
    7 - Finally, user name and scores are saved to local storage and displayed in a new page with the names and scores of previous players.

Project Due 24th


--------------------------------------------------------------------------------------------
## Your project should fulfill the following requirements:

* Use a CSS framework other than Bootstrap.

* Be deployed to GitHub Pages.

* Be interactive (i.e., accept and respond to user input).

* Use at least two server-side APIs.

* Does not use alerts, confirms, or prompts (use modals).

* Use client-side storage to store persistent data.

* Be responsive.

* Have a polished UI.

* Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).

* Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

* Finally, you must add your project to the portfolio that you created in Module 2.