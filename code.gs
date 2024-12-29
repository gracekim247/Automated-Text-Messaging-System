function onEdit(e) {
  const sheet = e.source.getActiveSheet();
  const range = e.range;

  const statusColumn = 4; // "Status" = column D
  if (range.getColumn() === statusColumn) {
    const newValue = range.getValue();
    if (newValue === "Ready For Pickup") {
      const row = range.getRow();
      const phoneNumber = sheet.getRange(row, 3).getValue(); // Column C for Phone Number
      const orderId = sheet.getRange(row, 1).getValue();    // Column A for Order ID
      const customerName =  sheet.getRange(row, 2).getValue();
      
      sendSMS(phoneNumber, `Hello, ${customerName}. Your laundry (Order #${orderId}) is ready for pickup. Thank you!`);
    }
  }
}
