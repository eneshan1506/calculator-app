# Calculator App

Minimal and responsive calculator app built with React.

Live demo: https://calculator-app-topaz-pi-54.vercel.app/

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division
- Keyboard support for numbers and operators
- `Enter` to calculate, `Backspace` to delete, `Escape` to clear
- Clean mobile-friendly interface

## Tech Stack

- React
- Create React App
- pnpm

## Getting Started

### Requirements

- Node.js 18+
- pnpm 10+

### Install

```bash
pnpm install
```

### Run in Development

```bash
pnpm start
```

App runs at `http://localhost:3000`.

### Build for Production

```bash
pnpm build
```

### Run Tests

```bash
pnpm test
```

## Project Structure

```text
src/
  App.js
  index.js
  index.css
public/
  index.html
```

## Notes

- The app currently evaluates expressions with the JavaScript `Function` constructor.
- This works well for a small calculator project, but a dedicated parser would be safer for a larger production app.
