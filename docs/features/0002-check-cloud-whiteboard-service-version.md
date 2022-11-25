# Check cloud whiteboard service version

- Date: 2022-11-15
- Request: [FR-0002](./0002-check-cloud-whiteboard-service-version.md)
- Suggester: Brian CW Hsieh
- Platform: Android / Windows / Web
- Status: **Under discuss**

## Introduction

When starting a cloud whiteboard, client should check its supported cloud whiteboard version
to make sure cloud whiteboard version is the same as backend server.

## Motivation

Make sure all the clients use the same cloud whiteboard version as backend server.

## Proposed solution

### Example 1

- Given: Client app has older cloud whiteboard version then backend server
- When: Client app starts cloud whiteboard
- Then: Client app shows up a dialog to tell user to upgrade app

### Example 2

- Given: Client app has the same cloud whiteboard version as backend server
- When: Client app starts cloud whiteboard
- Then: Client app starts cloud whiteboard successfully and shows up QRCode
