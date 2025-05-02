# GroceryMate Frontend

Welcome to the GroceryMate frontend project! This project is built using React and TypeScript, providing a user-friendly interface for managing grocery lists, recipes, and meal planning.

## Project Structure

The frontend project is organized as follows:

```
frontend
├── public
│   ├── index.html        # Main HTML file for the React application
│   └── favicon.ico       # Favicon for the application
├── src
│   ├── components        # Contains reusable components
│   │   ├── App.tsx      # Main App component
│   │   ├── Sidebar.tsx   # Sidebar navigation component
│   │   └── Header.tsx    # Header component
│   ├── pages             # Contains page components
│   │   ├── Dashboard.tsx  # Dashboard page component
│   │   ├── ShoppingList.tsx # Shopping list page component
│   │   └── Recipes.tsx    # Recipes page component
│   ├── styles            # Contains CSS styles
│   │   └── App.css      # Main CSS file
│   ├── utils             # Utility functions
│   │   └── api.ts       # API utility functions
│   ├── index.tsx        # Entry point for the React application
│   └── App.tsx          # Root component for the application
├── package.json          # npm configuration file
└── tsconfig.json         # TypeScript configuration file
```

## Getting Started

To get started with the GroceryMate frontend, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd project-name/frontend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

   This will start the development server and open the application in your default web browser.

## Features

- **Dashboard**: View an overview of your grocery lists and meal plans.
- **Shopping Lists**: Create and manage your shopping lists.
- **Recipes**: Browse and manage your favorite recipes.
- **Meal Planner**: Plan your meals for the week.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.