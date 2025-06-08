let customers = [
  {
    name: "Alice Johnson",
    email: "alice.j@example.com",
    purchases: ["Laptop", "Phone"]
  },
  {
    name: "Bob Smith",
    email: "bob.smith@example.com",
    purchases: ["Tablet"]
  },
  {
    name: "Clara Reyes",
    email: "clara.r@example.com",
    purchases: ["Camera", "Headphones"]
  }
];

// Step 3: Add and Remove Data
// Add a new customer
customers.push({
  name: "David Lee",
  email: "david.lee@example.com",
  purchases: ["Smartwatch"]
});

// Remove the first customer
customers.shift();

// Step 4: Update Customer Info
// Update email for Bob Smith (who is now first in the array after shift)
customers[0].email = "bob.s.newemail@example.com";

// Add a new purchase for Clara Reyes (now second in array)
customers[1].purchases.push("Microphone");

// Step 5: Display Customer Information
customers.forEach((customer) => {
  console.log(`Name: ${customer.name}`);
  console.log(`Email: ${customer.email}`);
  console.log(`Total Purchases: ${customer.purchases.length}`);
  console.log("----------------------------");
});