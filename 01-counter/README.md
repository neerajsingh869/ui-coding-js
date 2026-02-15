Why this solution?

- Logic and UI are not tightly coupled.

- Single Responsibility
  - ```setCounter``` function is responsible for managing state
  - ```renderUI``` function is responsible for updating DOM

- No Duplication

- Impossible to go negative

- State value is preserved even if tab is refreshed