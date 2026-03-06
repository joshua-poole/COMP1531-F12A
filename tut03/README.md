# Tutorial 3

[TOC]

> solutions can be found in [playlist/SOLUTIONS](playlist/SOLUTIONS)

Below is the interface for a playlist system in which users can create playlists with songs in them.

<table>
    <tr>
        <th>Name & Description</th>
        <th>Parameters</th>
        <th>Return</th>
        <th>Error</th>
    </tr>
    <tr>
        <td><code>addUser</code><br>Registers a user with an email and password.</td>
        <td><code>email</code>, <code>password</code></td>
        <td><code>{userId}</code></td>
        <td>
            Return the object <code>{error, message}</code> where the error type is:
            <ul>
                <b>INVALID_EMAIL</b>
                <li>email is an invalid email</li>
                <b>INVALID_PASSWORD</b>
                <li>password is an empty string</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><code>addSong</code><br>Adds a new song to the database.</td>
        <td><code>name</code>, <code>artist</code>, <code>duration</code></td>
        <td><code>{songId}</code></td>
        <td>
            Return the object <code>{error, message}</code> where the error type is:
            <ul>
                <b>INVALID_NAME</b>
                <li>name is an empty string</li>
                <b>INVALID_ARTIST</b>
                <li>artist is an empty string</li>
                <b>INVALID_DURATION</b>
                <li>duration is less than 0 or greater than 10</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><code>addToPlaylist</code><br>Adds a song to a user's playlist.</td>
        <td><code>userId</code>, <code>songId</code></td>
        <td><code>{}</code></td>
        <td>
            Return the object <code>{error, message}</code> where the error type is:
            <ul>
                <b>INVALID_USER_ID</b>
                <li>userId is invalid</li>
                <b>INVALID_SONG_ID</b>
                <li>songId is invalid</li>
                <b>IN_PLAYLIST</b>
                <li>song is already in user's playlist</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><code>listPlaylist</code><br>Lists all of the songs in a user's playlist.</td>
        <td><code>userId</code></td>
        <td><code>{songs}</code></td>
        <td>
            Return the object <code>{error, message}</code> where the error type is:
            <ul>
                <b>INVALID_USER_ID</b>
                <li>userId is invalid</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><code>clear</code><br>Returns the program to its original state.</td>
        <td>N/A</td>
        <td><code>{}</code></td>
        <td>N/A</td>
    </tr>
</table>

| Variable | Type |
| --- | --- |
| **error** | `string`, with the value being the corresponding error type |
| **message** | `string`, with the value being a relevant error message of your choice |
| **email** | `string` |
| **password** | `string` |
| **name** | `string` |
| **duration** | `number`, specifically Integer|
| **artist** | `string` |
| contains suffix **Id** | `string` |
| **songs** | Array of objects, where each object has type `{songId, artist, name, duration}` |

## A. Working with multiple files 
When working with a large codebase, it's good practice to break down and organize code into separate files. This helps prevent files from becoming too large and makes it easier to locate specific elements when needed. Additionally, functions that are used across multiple files for common tasks can be consolidated into a separate helper functions file.

Let's try moving the datastore object out of the [playlist.js](playlist/src/playlist.js) file and making helper functions for repetitive code in the program provided.

### Datastore

1. Move the datastore object from [playlist.js](playlist/src/playlist.js) into another file called [dataStore.js](playlist/src/dataStore.js).

2. How can we access and use the datastore now?
> By using the export keyword in front of a getData function that returns the datastore and importing that function into files in which we need to use the datastore in.

### Helper Functions
1. Identify and move repetitive code into a helper function. 
> Code used to find a user given a userId could be moved to a helper function

2. Move this helper function into a file called [helper.js](playlist/src/helper.js).

## B. Packages

1. What are packages and why do we use them?
> Packages are just a bunch of pre-written tools that help you write code more efficiently. Similar to how we can #include <math.h> in C to use math functions, we can import a math package to use math functions in JavaScript (eg: [mathjs](https://www.npmjs.com/package/mathjs))

2. What is npm?
> Node package manager! It manages the packages we want to use in each project.

3. Identify what we might need to use packages for in the addUser function. 
> Formatting the date, validating an email and generating a unique id. 

> tutor note: you'll also need to generate an id in addSong

4. Look through npm and find functions appropriate to perform the tasks you identified. 
> tutor note: encourage students to find packages in groups

> Some examples include:
> - [date fns](https://www.npmjs.com/package/date-fns) (formatting date)
> - [validator](https://www.npmjs.com/package/validator) (validating emails)
> - [uuid](https://www.npmjs.com/package/uuid) (generating unique id)

5. Use these packages to complete the addUser and addSong function.

## C. Testing
Writing tests is important! We want to make sure that when we make changes, it won't break existing code. We will be using `jest` to write tests. Install jest as a dev dependency with
```
npm i jest --save-dev
```
and then create a file of type `.test.js` to declare it as a test file. We have created a test file with some tests for you in [playlist.test.js](playlist/src/playlist.test.js)

### Writing tests
As a class write some tests for the `addUser` function in [playlist.test.js](playlist/src/playlist.test.js). What are some things you may need to test for?

> - Success case(s)
> - Error cases(s)
> - Side effects (eg: is the clear function actually working as intended or is it just returning the correct thing every time?)

### Black box testing
How can we validate that the `clear` function resets the program to its initial state?<br>
Note that tests have to be black boxed. We should not have any knowledge about how the program is implemented and subsequently we should not call functions that are not part of our interface (this includes `getData`).

> tutor note: remind students that they cannot check error messages or write tests calling helper functions directly as this goes against black box testing principles. They should also be writing tests before implementation

### Debugging
Uncomment the rest of the provided tests and run them. Use the outcome of the tests to debug a function. Ensure it passes all tests.

Tips:
- Use test.only to run one test
- Use test.skip to skip specified tests

## D. Iteration 1

Iteration 1 should be available. Check merge requests for a merge request with iteration 1.

Your tutor may run through some tips for iteration 1.
