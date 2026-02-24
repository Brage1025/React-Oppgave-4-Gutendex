# Gutendex Book Search App

My modern, responsive React application for searching and browsing books from **Project Gutenberg** using the Gutendex API. This project allows users to explore a vast collection of public domain books, save favorites, and filter by categories.

## Purpose

Created as my 4th assingment in React.

## Features

- **Book Search**: Search for books by title, author, or subject
- **Pagination**: Navigate through search results with efficient pagination
- **Favorites System**: Save and manage favorite books using local storage
- **Category Filtering**: Browse books by predefined categories
- **Book Details**: View detailed information about each book in a modal
- **Responsive Design**: Should be optimized for desktop and mobile devices
- **Fast Performance**: Built with Vite for quick development and builds

## Technologies Used

- **React**: Frontend framework for building the user interface
- **Vite**: Build tool for fast development and optimized production builds
- **Axios**: HTTP client for API requests
- **CSS Modules**: Scoped styling for components
- **ESLint**: Code linting for consistent code quality
- **Gutendex API**: REST API for accessing Project Gutenberg book data

## Web Page

1. You should be able to use the GitHub link to access the site without installing anything.

2. If not you could "install" it.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/gutendex-book-search.git
   cd gutendex-book-search
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

- **Home Page**: Search for books using the search bar. Results are displayed in a grid with pagination.
- **Book Details**: Click on any book card to view detailed information in a modal.
- **Favorites**: Use the heart icon to add/remove books from your favorites. Access your favorites from the navigation menu.
- **Categories**: Browse books by category using the category modal.
- **Navigation**: Use the header navigation to switch between Home, Favorites, and Categories.

## API

This application uses the [Gutendex API](https://gutendex.com/), which provides access to metadata for over 70,000 public domain books from Project Gutenberg.

Key endpoints used:

- `/books`: Retrieve books with optional search and pagination parameters
- `/books/{id}`: Get detailed information for a specific book

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Project Gutenberg](https://www.gutenberg.org/) for providing the book collection
- [Gutendex](https://gutendex.com/) for the API service
- [Vite](https://vitejs.dev/) for the build tool
- [React](https://reactjs.org/) for the frontend framework

---

<div align="center">

Created by Brage1025

_"To &lt;div&gt; or not to &lt;div&gt;, that is the question."_

</div>
