# Task Tracker CLI

This project involves building a simple command line interface (CLI) to fetch the recent activity of a GitHub user and display it in the terminal.

## Features

- Provide the GitHub username as an argument when running the CLI.
- Fetches the recent activity of the specified GitHub user using the GitHub API.
- Displays the fetched activity in the terminal.

## Requirements

- Node.js
- NPM or Yarn

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/luis-alvarez1/github-activity-cli
    cd github-activity-cli
    ```

2. Install dependencies:

    - NPM
        ```sh
        npm install
        ```
    - Yarn
        ```sh
        yarn install
        ```

3. Modify `.env` file:

    Copy the content of `.env.example` into `.env` file and replace `GITHUB_AUTH_TOKEN` with yout own [GitHub API Key](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

    ```bash
    GITHUB_AUTH_TOKEN = "YOUR_GITHUB_API_KEY"
    ```

4. Compile TypeScript to JavaScript:

    - NPM
        ```sh
        npm run build
        ```
    - Yarn
        ```sh
        yarn build
        ```

5. Install the CLI on your system:

    ```sh
    npm install -g
    ```

## Usage

### List last GitHub user activity

```bash
github-activity-cli <username>
```

### Display example

```
- <username> Pushed 3 commits to username/repository
- <username> Opened a new issue in username/repository
- <username> Starting watching username/repository
- ...
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Author

- Luis Alvarez, Dec. 2024.
