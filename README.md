# Electron Window Overlay

This project is an Electron application that creates a transparent window overlay. The overlay's transparency can be controlled via OSC (Open Sound Control) messages.

## Features

- Transparent window overlay
- Always on top
- Non-resizable
- OSC control for overlay transparency

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/electron-window-overlay.git
    cd electron-window-overlay
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the application:
    ```sh
    npm start
    ```

2. Build the application package:
    ```sh
    npm run build
    ```

## OSC Control

The application listens for OSC messages on port `3333`. To control the overlay transparency, send a message to `/overlay_brightness` with a value between `0` (fully transparent) and `1` (fully opaque).
