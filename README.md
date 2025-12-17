# Advanced Counter React App

This project is an advanced counter application built with React and TypeScript. It demonstrates state management, keyboard event handling, localStorage persistence, and a minimal modern UI.

## Features

- **Display Current Count:** Shows the current count, initialized to 0.
- **Increment/Decrement:** Buttons to increase or decrease the count by a custom step value.
- **Step Input:** Input field to set the increment/decrement step.
- **History Tracking:** Keeps a history of all count values and displays them.
- **Auto-Save:** Automatically saves the count history to localStorage.
- **Keyboard Shortcuts:**
  - ArrowUp: Increment
  - ArrowDown: Decrement
- **Reset:** Button to reset the count and clear the history.
- **Minimal Styling:** Clean, dark-themed UI with three main CSS classes.

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd dynamic-counter-react
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open your browser at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Usage

- Use the **Increment** and **Decrement** buttons or ArrowUp/ArrowDown keys to change the count.
- Set a custom step value in the input field.
- The **Reset** button resets the count and clears the history.
- The count history is displayed below and is saved automatically.

## Project Structure

- `src/components/Counter.tsx` — Main counter component
- `src/App.css` — Minimal CSS for layout and style

## License

MIT
