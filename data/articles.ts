import type { Article } from "../src/layout/pages/sections/ArticleCard";

export const articles: Article[] = [
  {
    "id": 1,
    "title": "🎯 The Purpose of React: Simplifying the Development of Dynamic Interfaces",
    "type": [
      {
        "label": "FRONTEND",
        "color": "green"
      },
      {
        color: "blue",
        label: "REACT"
      }
    ],
    img: "./articles/react.jpg",
    "sections": [
      {
        "title": "Introduction",
        "content": "Before React, building dynamic user interfaces on the web required dealing directly with the DOM (Document Object Model). This meant manipulating HTML elements through pure JavaScript, manually handling updates, events, and application state. In small applications this is simple, but as the project grows, the code becomes hard to maintain and prone to errors.\n\nReact, created by Facebook in 2013, emerged precisely to solve this problem. Its main goal is to make it easier to create reactive user interfaces, where the state of the application determines what is rendered — not the other way around."
      },
      {
        "title": "What Makes React Different?",
        "content": "Instead of manipulating the DOM directly, React works with a Virtual DOM — a virtual representation of the interface in memory. When the state changes, React calculates exactly what changed and updates only what’s necessary in the real DOM efficiently.\n\nIt also adopts a component-based architecture, allowing the interface to be divided into reusable parts, each with its own behavior and style."
      },
      {
        "title": "Example 1 – HTML, CSS, and Pure JavaScript",
        "description": "In this example, we have a simple counter implemented without React. Each time we click the button, we manually update the number in the DOM.",
        "code": {
          "language": "html",
          "content": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Counter in Pure JS</title>\n    <style>\n      body {\n        font-family: Arial, sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n      button {\n        padding: 10px 20px;\n        font-size: 16px;\n        cursor: pointer;\n      }\n    </style>\n  </head>\n  <body>\n    <h1>Counter: <span id=\"count\">0</span></h1>\n    <button id=\"increment\">Increment</button>\n\n    <script>\n      const countEl = document.getElementById(\"count\");\n      const button = document.getElementById(\"increment\");\n      let count = 0;\n\n      button.addEventListener(\"click\", () => {\n        count++;\n        countEl.textContent = count; // Manual DOM update\n      });\n    </script>\n  </body>\n</html>"
        },
        "analysis": "Here, every time the user clicks, we must manually update the DOM (`countEl.textContent = count`). In large applications, this process can become complex and hard to manage."
      },
      {
        "title": "Example 2 – React",
        "description": "Now the same counter, but implemented with React. Notice that we don’t manipulate the DOM directly — we only change the state.",
        "code": {
          "language": "jsx",
          "content": "import { useState } from \"react\";\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div style={{ textAlign: \"center\", marginTop: \"50px\" }}>\n      <h1>Counter: {count}</h1>\n      <button\n        onClick={() => setCount(count + 1)}\n        style={{ padding: \"10px 20px\", fontSize: \"16px\", cursor: \"pointer\" }}\n      >\n        Increment\n      </button>\n    </div>\n  );\n}"
        },
        "analysis": "Here, React automatically detects the state change (`setCount`), updates only what changed in the Virtual DOM, re-renders the component efficiently, and keeps the code cleaner, more predictable, and reusable."
      },
      {
        "title": "Conclusion",
        "content": "React isn’t just a library to 'make pretty websites'. Its real purpose is to manage the complexity of dynamic interfaces, allowing developers to think in terms of states and components instead of manual DOM manipulation.\n\nWhile the pure JavaScript example requires direct control over elements, React abstracts that part, letting you focus on application logic — something essential for modern, scalable projects."
      }
    ]
  }
]