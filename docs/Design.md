## Product Insert Module Assignment

The Problem statement can be found in [this](./Problem_Statement.docx) document

## Scope

We are building a small e-Commerce Angular app where one can add the product depends on the Api response.

## Assumptions

- There is no need of storing any data.
- This task is considerably small and NgRx is not required.

## App Structure
   - Core
      - Models
      - Services
   - Pages
      - All the pages goes here
   - Theme
      - Components
      - It's a small App no need to have a shared directives and Pipes 

## Model

The app model can be found inside Core 

  # Products
      public name: string;
      public definitionUrl: string;
  # Product Details
      public caption: string;
      public type: string;
      public mandatory: boolean;
      public defaultValue: string;
      public validationMessage; string;

## Services

The app Service can be found inside Core 

  # Methods
       getProducts$
       getProductByCategory
       handleError

## Design

The app contains one page but It has multiple components

- Home Page
  - Product List component
    - List the products which got it from Api
      This will help in isolating the work on this feature from the rest of the application
    - Product Component
      - Show the product create button based on the product api response given to it
        This will help in isolating work on this component logic from the rest of the codebase
  - Product Insert Page
    - Cancel - Go back to products
    - Create - Create a product (It doesn't do anyting)
    - Form
      - Product Name
        - Type
        - Mandatory
        - Default Value
        - Validation Message
      - Description
        - Type
        - Mandatory
        - Default Value
        - Validation Message
      - IsSmart
        - Type
        - Mandatory
        - Default Value
        - Validation Message


