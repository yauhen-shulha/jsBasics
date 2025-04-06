// === 🔴 ADVANCED LEVEL – if / else if / else ===

/* 1. Check login: username === "admin" and password === "1234" */
const username = "admin";
const password = "1234";
// Output: "Login successful" / "Invalid login"

/* 2. Check if product is in stock and under budget */
const inStock = true;
const price = 40;
const budget = 50;
// Output: "Can buy" / "Out of stock" / "Too expensive"

/* 3. Validate email (must include "@" and ".") */
const email = "user@example.com";
// Output: "Valid email" / "Invalid email"

/* 4. Shipping cost: total > 100 → "Free", 50–100 → "Half price", <50 → "10 PLN" */
const total = 75;
// Output: "Half price"

/* 5. Age category: 0–12 = Child, 13–17 = Teen, 18–64 = Adult, 65+ = Senior */
const age = 70;
// Output: "Senior"

/* 6. Weather: temp < 0 → "Freezing", 0–15 → "Cold", 16–25 → "Warm", >25 → "Hot" */
const temp = 12;
// Output: "Cold"

/* 7. Traffic logic: light = "green" and no cars = safe */
const light = "green";
const carComing = false;
// Output: "Safe to cross" / "Wait"

/* 8. Password check: at least 8 chars and contains number */
const pwd = "hello2024";
// Output: "Strong password" / "Weak password"

/* 9. Compare strings ignoring case */
const strA = "HELLO";
const strB = "hello";
// Output: "Equal" / "Not equal"

/* 10. Role access: admin → full, editor → limited, guest → read-only, else → denied */
const role = "editor";
// Output: "Limited access"

/* 11. Product rating: 4.5+ = "Excellent", 3–4.4 = "Good", 2–2.9 = "Average", else = "Poor" */
const rating = 4.6;
// Output: "Excellent"

/* 12. Determine triangle type by sides */
const a = 3, b = 4, c = 5;
// Output: "Scalene" / "Isosceles" / "Equilateral"

/* 13. Time of day: 0–5 = Night, 6–11 = Morning, 12–17 = Afternoon, 18–23 = Evening */
const hour = 16;
// Output: "Afternoon"

/* 14. User tier: gold = 20% off, silver = 10%, bronze = 5%, none = 0% */
const tier = "silver";
// Output: "10% discount"

/* 15. Delivery time: express = 1 day, standard = 3 days, economy = 7 days */
const delivery = "standard";
// Output: "3 days"

/* 16. File type check: ends in .jpg → "Image", .mp4 → "Video", .pdf → "Document", else → "Unknown" */
const file = "report.pdf";
// Output: "Document"

/* 17. Internet speed test */
const speed = 85;
// Output: "Excellent" / "Good" / "Poor"

/* 18. BMI calculator: <18.5 = Underweight, 18.5–24.9 = Normal, 25–29.9 = Overweight, 30+ = Obese */
const bmi = 22;
// Output: "Normal"

/* 19. Grade evaluation: A = 90+, B = 80+, C = 70+, D = 60+, else F */
const score = 84;
// Output: "B"

/* 20. Currency conversion support: if currency is "USD", "EUR", or "GBP" → Supported, else → Not supported */
const currency = "JPY";
// Output: "Not supported"

/* 21. Check if a number is divisible by 3 and/or 5 */
const num = 15;
// Output: "Divisible by both" / "Divisible by 3" / "Divisible by 5" / "Not divisible"

/* 22. Movie rating by age */
const userAge = 16;
const ratingRequired = "PG-13"; // options: G, PG, PG-13, R
// Output: "Allowed" / "Restricted"

/* 23. Login attempts left */
const attempts = 0;
// Output: "Locked out" / "Try again"

/* 24. Car rental eligibility: age >= 25 and hasLicense === true */
const customer = { age: 24, hasLicense: true };
// Output: "Eligible" / "Not eligible"

/* 25. Light bulb status: on=true and brightness >= 50 */
const bulb = { on: true, brightness: 40 };
// Output: "Bright" / "Dim" / "Off"

/* 26. Gym membership: active, expired, or banned */
const status = "expired";
// Output: "Welcome!" / "Please renew" / "Access denied"

/* 27. Bank balance check: <0 = Overdrawn, 0 = Empty, >0 = OK */
const balance = 150;
// Output: "OK"

/* 28. Restaurant order: if meal && drink && paid → "Complete", else → "Pending" */
const order = { meal: true, drink: true, paid: false };
// Output: "Pending"

/* 29. Discount rule: code "SAVE10", valid and not expired */
const coupon = { code: "SAVE10", valid: true, expired: false };
// Output: "Discount applied" / "Invalid code" / "Expired"

/* 30. Car check: fuel < 5% = "Refuel now", 5–20% = "Low fuel", 21–100% = "Fuel OK" */
const fuelLevel = 4;
// Output: "Refuel now"
