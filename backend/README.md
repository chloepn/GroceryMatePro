# GroceryMate Backend

## Overview
GroceryMate is a full-stack application designed to help users manage their grocery shopping and meal planning. The backend is built using Spring Boot, providing a robust and scalable API for the frontend React application.

## Project Structure
The backend project follows a standard Spring Boot structure:

- **src/main/java/com/example/projectname**: Contains the main application code.
  - **ProjectNameApplication.java**: The entry point of the Spring Boot application.
  - **controller**: Contains classes that handle HTTP requests and define API endpoints.
    - **ApiController.java**: Manages the API endpoints for grocery items.
  - **model**: Contains the data models used in the application.
    - **GroceryItem.java**: Represents a grocery item.
  - **service**: Contains the business logic for the application.
    - **GroceryService.java**: Manages operations related to grocery items.

- **src/main/resources**: Contains configuration files and static resources.
  - **application.properties**: Configuration settings for the Spring Boot application.
  - **static**: Directory for static resources (HTML, CSS, JS).

- **src/test/java/com/example/projectname**: Contains test cases for the application.
  - **ProjectNameApplicationTests.java**: Unit tests for the application.

- **pom.xml**: Maven configuration file that manages dependencies and build settings.

## Getting Started

### Prerequisites
- Java 11 or higher
- Maven 3.6 or higher

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd project-name/backend
   ```

2. Build the project:
   ```
   mvn clean install
   ```

3. Run the application:
   ```
   mvn spring-boot:run
   ```

### API Endpoints
The backend provides several API endpoints to manage grocery items. Refer to the `ApiController.java` for detailed endpoint information.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.