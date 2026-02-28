# Online Quiz Application

A simple interactive quiz application built with HTML, CSS, and JavaScript. This project demonstrates fundamental web development concepts including DOM manipulation, event handling, and styling.

## Features

- **User Authentication**: Login system with roll number and password verification
- **Interactive Quiz**: 5 questions about HTML, CSS, and JavaScript concepts
- **Real-time Feedback**: Immediate visual feedback (green for correct, red for incorrect answers)
- **Score Tracking**: Tracks user score throughout the quiz
- **Results Display**: Shows final score and pass/fail status based on performance
- **Responsive Design**: Clean and centered layout with gradient background

## Project Structure

```
quiz/
├── index.html      # Main HTML file with login and quiz interface
├── script.js       # JavaScript logic for quiz functionality
├── style.css       # Styling and layout
└── README.md       # This file
```

## How to Use

1. **Open the Application**: Open `index.html` in a web browser
2. **Login**: 
   - Roll No: `24CS018`
   - Password: `1234`
3. **Answer Questions**: Click on the options to select your answer
4. **View Results**: After answering all 5 questions, view your final score and result

## Technologies Used

- **HTML**: Structure and content
- **CSS**: Styling with gradient backgrounds and responsive design
- **JavaScript**: Quiz logic, score calculation, and DOM manipulation

## Quiz Details

- **Total Questions**: 5
- **Pass Mark**: 3/5
- **Topics**: HTML, CSS, and JavaScript fundamentals

## Customization

You can easily customize:
- **Credentials**: Modify the login credentials in `script.js` (line 31)
- **Questions**: Add more questions to the `questions` array in `script.js`
- **Styling**: Update colors and layout in `style.css`
- **Pass Mark**: Change the `passMark` variable in `script.js` (line 75)

## Learning Outcomes

This project demonstrates:
- DOM manipulation with `getElementById()` and `innerHTML`
- Event handling with `onclick` attributes
- Conditional logic and loops
- CSS styling with gradients and shadows
- Basic authentication logic

## Notes

This is a beginner-level project created for learning HTML, CSS, and JavaScript fundamentals. For production use, implement proper server-side authentication and security measures.
