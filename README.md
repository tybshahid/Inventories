# Inventories

This Application is a demo Inventory System where users can Add or Delete Computers (Desktops/Laptops).

It's hosted as a Live Demo here: [Inventories](https://inventories.eleagues.net/)

### Backend:
- .NET Core (net5.0).
- Entity Framework Core (Code-First approach).
- Table-per-type inheritance. Database will have three tables i.e. Computers (Common properties), Desktops and Laptops.
- More computer types can be added in future by creating a new class that implements the abstract Computer class.
- SQLite - Database.
- The Clean Architecture by Robert C. Martin (Uncle Bob).
  - Domain
  - Persistence
  - Application
  - API
- CQRS & Mediator pattern.

### Frontend:
- React (17.0.1) with Functional Components and Hooks.
- TypeScript.
- Semantic UI React.
- Axios.
