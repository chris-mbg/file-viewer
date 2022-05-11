# 📂 File viewer

## 📋 Task description

The task was visiualize a file tree structure given an array containing string file paths. For simplification the list of files is hard-coded.

## 📈 Solution

### Technologies

The application is made with React and Tailwind CSS.

### Assumptions

It is assumed that all file names do include a dot ( **.** ) and folder names do not.

### Strategy

When researching the best way to render a file tree structure, I quickly came across the concept of recursion. It's something I haven't used prior to this exercise, but I really found beneficial for this use case, where each `Folder` component is a start of a new `Tree`. The original file structure could potentially vary in complexity and the recursion approach makes the application able to render a different structure. I enjoyed adapting this computer science concept and learning a bit more about it.

### View it live...

...[here](https://file-viewer.netlify.app/)

## 👩‍💻 Run it yourself

- Install dependencies: `npm i`
- Start the application: `npm run dev`
