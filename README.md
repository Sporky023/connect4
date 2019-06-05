# Connect 4

This is an implementation of the game Connect 4 in React, built as an exercise.

This README is intended as a design journal, to track my thoughts and planning for the exercise.  

## 11:15 am

There are a few main steps to producing this application:

* Build a data model that behaves like a Connect 4 board
* Integration that data model into reducers for a redux state
* Build a react app that connects a UI to that state and reducer

### The data model

The data model is the hardest part of this, so I'm going to start with that.

I want to turn the following behavioral statements into a set of Jest tests, using TDD to develop the board model.

Instead of modeling the board as a series of rows, as might be expected by usual rendering techniques in a web based UI, I'm going to model it as a set of columns to mimic the physics of the way the game is played.

A typical board state, with four pieces played, might look like:

```
[
  ['R', 'B'],
  [],
  [],
  [],
  ['B'],
  ['R'],
  []
]
```

The first element of the array represents the pieces played first, i.e. the piece at the bottom of the column.

Empty spaces are not represented, because it is impossible for an empty space to exist between two non-empty spaces (due to gravity).
For rendering, I will probably provide the view with a "padded" array that is always of length 6, so the view knows how to iterate without being too clever.

* Evaluating a board state
  * Valid states
    * A vertical sequence of four is a win
    * A horizontal sequence of four is a win
    * A diagonal sequence up-right of four is a win
    * A diagonal sequence down-right of four is a win
    * A full board without any wins is a draw
  * Invalid states (invalid states should never be reached)
    * A board with the wrong number of columns is invalid
    * A board with an over-full columns is invalid
    * A board containing values other than 'B' or 'R' is invalid
    * A board with multiple wins is invalid
    * A board where N1 - N2 > 1 is invalid, where N1 is the number of pieces owned by the first player, and N2 is the number of pieces owned by the second player

Whether or not to build validation checks is undecided at this point.
The utility of doing validation checks would be as a (non-exhaustive) means of detecting logical bugs in my code.

* Playing a move
  * A play is represented by two arguments: the color being played and the column it's played on
  * An attempted play on a full column is invalid and rejected (need to decide what rejection looks like)
  * A play on a non-full column results in the piece being added to that column.

Without further ado, I'm going to start coding up these test cases.

## 12:30 am

I'm going to have the win detection return the coordinates of the winning
pieces.

This is a bit more engineering effort, but if the problem is solved early on,
it may yield productive play options later.

One simple example is the ability to highlight winning pieces in the event of a
win.

## 1:55 pm

I'm done with detecting wins on the board. Now I need to decide whether to build validation or not, or to move on to board manipulation.

Also I'm starting to question whether using a class for the board is the right decision. For now I will go ahead and keep building the board as a class.
If that proves to be awkward as I am integrating the board into redux and its reducer, I will drop the class aspect of the board.

I've spent a little time on refactoring, to ensure the code is as simple and as readable as possible.
The traversing function I've written could be generalized to include the vertical case as well.
Somehow my gut is telilng me that it's useful to maintain a separation between wins that exist within a single column, and wins that span multiple columns.
Going to leave it as it for now.

Also going to take a break.

## 2:35 pm

Starting again. Current test coverage is just detecting wins.
I may add more coverage around detection if I find problems later on in implementation.

Next step is mutating the board, i.e. playing a move.

A method on board will simply return true or false for whether the move is valid or not, and change the state for the tile moved in the case the move is valid.

## 2:45 pm

Okay that was easy. Next step is to design how the game flow will work.

Essentially, in response to a user event, we will have to:

* attempt the move on the board, noting the result
* if the result is false, set a message like "invalid move" to the user (note this is an unexpected state because the UI should not afford the option to drop a tile into a full column - or should it?)
* if the result is true:
  * set the game's board state to the board's new state
  * check for wins for the color just played
  * if there's a win, change the game's state to "X just won"
    * this brings up a question of how I use an alert to represent app state - how do state and events interact?
  * check for a draw state (board is full)
  * if there's a draw state, change the game's state to "it's a draw"

Might as well get an idea of that game's full sequence here. Instead of a loop, it makes sense to model it as a state machine.

* state: Game starting
  * initilize board
  * Present color selection for Player 1
  * Player 1 picks their color

* state: Player 1's turn
  * Player 1 clicks to play
  * Results of move are checked to determine next state:
    * Player 1 wins
    * Draw
    * Player 2's turn

* state: Player 2's turn
  * Player 2 clicks to play
  * Results of this move determine next state:
    * Player 2 wins
    * Draw
    * Player 1's turn

* state: Player N wins
  * Display message (message component shows alert on componentDidMount)
  * on alert close, go to "Game starting"

* state: Draw
  * Display message
  * on alert close, go to "Game starting"

Those 5 states map onto various sets of components for display, and the game's state can be stored in ther redux store.

I think without further ado, I'm going to get into building the react side of
things.

There may be more work to do on the model, but that will be informed by construction of the app.

## 3:50 pm

First goal is going to be to initialize a board in the state, and then render that board to the screen.
