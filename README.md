# Mobile App Integration with NodeMCU (IP method) - Documentation

# Overview

This document provides a casual guide on how to use our ATN mobile app that integrates with a NodeMCU using an HTTP server over a Wi-Fi network. The app allows users to input the IP address of the NodeMCU and specify the quantity of various items such as food and water.

# Prerequisites

Before you begin, make sure you have the following:

- A mobile device with the app installed.
- A NodeMCU module connected to a Wi-Fi network.
- The IP address of the NodeMCU.
- A Wi-Fi network for both the mobile device and NodeMCU to connect to.

## Setting Up the NodeMCU

1. **Flash the NodeMCU**: Ensure your NodeMCU is flashed with firmware that supports the HTTP server. You can use the Arduino IDE or another platform to upload your code.
2. **Configure the NodeMCU**:
    - Connect the NodeMCU to your Wi-Fi network.
    - Set up the HTTP server to listen for requests.
    - Program the NodeMCU to handle requests and control hardware (e.g., dispensing food or water).
3. **Find the IP Address**:
    - Once connected, find the IP address of the NodeMCU. This is typically shown in the serial monitor of your development environment.

## Using the Mobile App

1. **Launch the App**:
    - Open the app on your mobile device.
2. **Enter IP Address**:
    - In the field labeled "NodeMCU IP Address," enter the IP address of your NodeMCU.
3. **Specify Items and Quantities**:
    - Enter the required amounts for items like food and water in the respective fields.
    - Double-check the quantities to ensure they are correct.
4. **Send Request**:
    - Press the "Submit" or "Send" button to send your request to the NodeMCU.
    - The app will make an HTTP request to the NodeMCU, which will then process the request and dispense the specified amounts.

## Troubleshooting

1. **No Response from NodeMCU**:
    - Check if the NodeMCU is properly connected to the Wi-Fi network.
    - Ensure the IP address entered in the app is correct.
    - Restart the NodeMCU and the app.
2. **Incorrect Amounts Dispensed**:
    - Verify the quantities entered in the app.
    - Check the NodeMCU code to ensure it correctly handles the received data.
3. **Connection Issues**:
    - Ensure both the NodeMCU and mobile device are on the same Wi-Fi network.
    - Check for any network restrictions that might block the HTTP requests.

## Example Usage

Here is a step-by-step example of how to use the app:

1. **Enter IP Address**: Suppose the NodeMCU's IP address is `192.168.1.100`. Enter this in the app's IP address field.
2. **Specify Items**: Enter 1 for food and 2 for water.
3. **Submit**: Press the "Submit" button.
4. **Monitor**: The NodeMCU receives the request and dispenses 2 units of food and 1 unit of water.
