# Show dialog to clear current whiteboard data before exiting EZWrite

- Date: 2022-11-08
- Request: [FR-0001](./0001-show-dialog-to-clear-current-whiteboard-data-before-exiting-ezwrite.md)
- Suggester: Conway Lee, Steve Chu, Benson W Chen
- Platform: Android
- Status: **Under implementation**

## Introduction

Whiteboard data is automatically saved in Android platform.

## Motivation

Some users may want to have a choice to keep whitboard data or not.

## Proposed solution

- Given: Create whiteboard by user (`guest` / `local_public`)
- When: Click 'quit' button to exit EZWrite
- Then: Show dialog to clear current whiteboard

## Impact

ONLY change UI behavior for `guest` and `local_public` users.
This will make UI behavior not consistent for all users.
