# Context API in React

Si userà un contesto per gestire una modalità budget, che permette all’utente di visualizzare solo i prodotti più economici.

## Consegna

### MILESTONE 1

Creare un nuovo context chiamato BudgetContext

- Deve contenere uno stato budgetMode di tipo booleano (true/false)
- Deve fornire anche la funzione per modificarlo (setBudgetMode)
- Wrappare l’intera applicazione con il BudgetProvider

### MILESTONE 2

Creare un componente Navbar.jsx

- Inserirlo in App.jsx (oppure nel componente di layout)
- All’interno della Navbar aggiungere un bottone “Modalità Budget” che attiva/disattiva budgetMode con un click
- Il bottone deve cambiare etichetta in base allo stato (Attiva Modalità Budget / Disattiva Modalità Budget)

### MILESTONE 3

Modificare la pagina dei prodotti:

- Recuperare il valore budgetMode usando il context
- Se `budgetMode === true`, mostrare solo i prodotti con price <= 30
- Altrimenti, mostrare tutti i prodotti normalmente

## BONUS

Trasformare la modalità budget in un vero e proprio filtro:

- Trasformare il booleano budgetMode in un valore numerico maxPrice (es.30, 50ecc). Il valore di partenza deve essere null .
- Nel componente navbar al posto del bottone inserire un campo input di tipo number. Questo campo deve essere legato al valore maxPrice del context
- Nella pagina prodotti, verranno mostrati soltanto i prodotti con price <= maxPrice (Se max price è null o comunque non è settato, devono essere visualizzati tutti i prodotti).
