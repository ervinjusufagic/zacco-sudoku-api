## Sudoku-api
A node.js app built with express, moongose and mongoDB. Sends puzzles to [zacco-sudoku](https://github.com/ervinjusufagic/zacco-sudoku)

### `Run the client`

1. clone project
2. npm install in root directory
3. node server.js

### `Routes`
#### /puzzles
* GET: gets all puzzles
* POST: you need to send a puzzle, solution and a difficulty level

#### /puzzles/puzzleId
* DELETE: deletes a puzzle

### `Deployment`
Deployed to Microsoft Azure.
Downloaded Azure App Service.
Logged in and deployed through VSCode.

[Live version](https://z-api.azurewebsites.net/) (you will be greated with a error message)

### `Improvments`
* improve security
* create algorithm to generate unique puzzles
* add route to handle finished puzzles


