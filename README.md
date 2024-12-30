# Automated Text Messaging System for Laundromat Business
## Overview
This project aims to automate the process of notifying customers when their laundry is ready for pickup at a small laundromat business. The system is integrated with a Google Sheet, where employees can track customer names, order numbers, phone numbers, and the status of the laundry (whether it’s ready for pickup or not). The system automatically sends a text message to the customer when their laundry is marked as "ready for pickup."

## Features
- **Google Sheet Integration:** Employees can easily update the status of each customer's laundry (via a dropdown menu in the sheet).
- **Automated Text Notifications:** When the laundry status is updated to "ready for pickup," the system will send an automatic text message to the customer's phone number (text messaging functionality to be implemented).
- **Logging System:** The text message script logs details into the execution log every time the "ready for pickup" status is selected.

## Tools and Technologies Used
- **Google Sheets:** Used to track customer information (name, order number, phone number, and laundry status).
- **Google Apps Script:** Powers the backend logic to detect when the laundry is ready for pickup and logs the relevant details.
- **Google Apps Script Execution Log:** Logs the text message actions when a customer's status is updated.

## How It Works

1. **Employee Interaction:**
   - Employees use the Google Sheet to input customer details, including name, order number, phone number, and a dropdown menu for the laundry status (whether it's ready for pickup or not).
   
2. **Triggering the Script:**
   - When an employee selects "ready for pickup" from the dropdown, the Google Apps Script is triggered.
   
3. **Text Message (Pending Implementation):**
   - The system logs the relevant details to the execution log. In future updates, the system will use an SMS API (e.g., Twilio) to send a text message to the customer notifying them that their laundry is ready for pickup.

## Future Improvements

- **SMS Integration:** Integrate an SMS API like Twilio to send an actual text message to the customer when their laundry is ready for pickup.
- **Email Notifications:** Implement email notifications for customers if needed.
- **User Interface:** Develop a more user-friendly interface for employees to interact with (such as a custom web app or dashboard).
