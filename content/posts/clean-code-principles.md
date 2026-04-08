---
title: "Clean Code Principles: Writing Code That Developer Can Read"
date: "2026-03-05"
excerpt: "Master the art of writing clean, maintainable code that your team will thank you for. Learn practical principles for naming, functions, comments, error handling, and code organization that make your code a joy to work with."
coverImage: "/images/blog/clean-code-principles.png"
author: "Rolando Remolacio"
readTime: "15 min read"
---

After years of writing code, reviewing pull requests, and maintaining legacy systems, I've learned one fundamental truth: code is read far more often than it's written. The difference between good developers and great developers isn't just what they can build—it's how they build it.
<br><br>

Clean code isn't about following dogmatic rules. It's about writing code that other humans (including your future self) can understand and modify with confidence. Let me share the principles that have transformed how I write code.
<br><br>

## Why Clean Code Matters

"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler
<br><br>

In my experience, messy code causes:
- **Slower development:** Developers spend more time understanding code than writing it
- **More bugs:** Complex, unclear code hides bugs
- **Team friction:** Nobody wants to work with confusing code
- **Technical debt:** Small messes compound into major problems
<br><br>

Clean code, on the other hand, accelerates development, reduces bugs, and makes teams happier. It's an investment that pays dividends every single day.
<br><br>

## Meaningful Names: Your Code's First Impression
<br><br>

### Use Intention-Revealing Names

Your variable and function names should tell me why it exists, what it does, and how it's used.
<br><br>

**Bad:**
```csharp
int d; // elapsed time in days
List<int[]> list1;
public void Process(int s)
```
<br><br>

**Good:**
```csharp
int elapsedTimeInDays;
List<Customer> activeCustomers;
public void SendEmailNotification(int userId)
```
<br><br>

Names should be so clear that comments become unnecessary. If you need a comment to explain a variable name, the name isn't good enough.
<br><br>

### Avoid Abbreviations and Encodings

Don't make readers decode your abbreviations:
<br><br>

**Bad:**
```csharp
var usrMgr = new UsrMgr();
var custList = GetCustsByRegDt(dt);
strTitle // Hungarian notation
```
<br><br>

**Good:**
```csharp
var userManager = new UserManager();
var customerList = GetCustomersByRegistrationDate(registrationDate);
title // Type is obvious from context
```
<br><br>

Modern IDEs show types on hover. You don't need to encode type information in names.
<br><br>

### Use Pronounceable and Searchable Names

Can you discuss this code in conversation? Can you search for it?
<br><br>

**Bad:**
```csharp
DateTime genymdhms; // generation year, month, day, hour, minute, second
var s = 86400; // Magic number
```
<br><br>

**Good:**  
```csharp
DateTime generationTimestamp;
const int SECONDS_PER_DAY = 86400;
```
<br><br>

### Class Names: Nouns, Method Names: Verbs

This simple rule makes your code read like natural language:
<br><br>

```csharp
// Classes are things (nouns)
public class CustomerAccount { }
public class PaymentProcessor { }
public class OrderValidator { }

// Methods are actions (verbs)
public void SaveCustomer() { }
public decimal calculateTotal() { }
public bool isValid() { }
```
<br><br>

## Functions: Do One Thing Well
<br><br>

### Keep Functions Small

Functions should do one thing, do it well, and do it only. If your function needs "and" to describe what it does, it's doing too much.
<br><br>

**Bad:**
```csharp
public void ProcessOrder(Order order)
{
    // Validate order
    if (order.Items.Count == 0)
        throw new Exception("No items");
    
    // Calculate totals
    decimal subtotal = 0;
    foreach (var item in order.Items)
        subtotal += item.Price * item.Quantity;
    
    // Apply discounts
    if (order.Customer.IsPremium)
        subtotal *= 0.9m;
    
    // Save to database
    _db.Orders.Add(order);
    _db.SaveChanges();
    
    // Send email
    var email = new Email();
    email.Send(order.Customer.Email);
}
```
<br><br>

**Good:**
```csharp
public void ProcessOrder(Order order)
{
    ValidateOrder(order);
    var total = CalculateOrderTotal(order);
    ApplyDiscounts(order, total);
    SaveOrder(order);
    SendConfirmationEmail(order);
}

private void ValidateOrder(Order order)
{
    if (order.Items.Count == 0)
        throw new InvalidOrderException("Order must contain at least one item");
}

private decimal CalculateOrderTotal(Order order)
{
    return order.Items.Sum(item => item.Price * item.Quantity);
}

private void ApplyDiscounts(Order order, decimal subtotal)
{
    if (order.Customer.IsPremium)
        order.Total = subtotal * 0.9m;
    else
        order.Total = subtotal;
}

private void SaveOrder(Order order)
{
    _db.Orders.Add(order);
    _db.SaveChanges();
}

private void SendConfirmationEmail(Order order)
{
    _emailService.SendOrderConfirmation(order.Customer.Email, order);
}
```
<br><br>

The refactored version is longer but infinitely more maintainable. Each function has a single, clear purpose.
<br><br>

### Minimize Function Arguments

The ideal number of function arguments is zero. The next best is one, then two. Three should be avoided when possible. More than three requires special justification.
<br><br>

**Why?**
- Easier to test
- Easier to understand
- Harder to pass arguments in the wrong order
<br><br>

**Instead of this:**
```csharp
public void CreateUser(string firstName, string lastName, string email, 
    string phone, string address, string city, string state, string zip)
{
    // Too many parameters!
}
```
<br><br>

**Do this:**
```csharp
public class CreateUserRequest
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public ContactInfo Contact { get; set; }
    public Address Address { get; set; }
}

public void CreateUser(CreateUserRequest request)
{
    // Much cleaner!
}
```
<br><br>

### Avoid Flag Arguments

Boolean flags in function parameters indicate the function does multiple things:
<br><br>

**Bad:**
```csharp
public void Save(Customer customer, bool validate)
{
    if (validate)
    {
        ValidateCustomer(customer);
    }
    _db.SaveChanges();
}
```
<br><br>

**Good:**
```csharp
public void SaveCustomer(Customer customer)
{
    _db.SaveChanges();
}

public void SaveAndValidateCustomer(Customer customer)
{
    ValidateCustomer(customer);
    _db.SaveChanges();
}
```
<br><br>

Now each function has a single, clear purpose.
<br><br>

## Error Handling
<br><br>

### Use Exceptions, Not Error Codes

Error codes clutter code with error-handling logic. Exceptions keep the happy path clean:
<br><br>

**Bad:**
```csharp
int result = SaveUser(user);
if (result == ERROR_VALIDATION)
{
    // handle validation error
}
else if (result == ERROR_DUPLICATE)
{
    // handle duplicate error
}
else if (result == ERROR_DATABASE)
{
    // handle database error
}
```
<br><br>

**Good:**
```csharp
try
{
    SaveUser(user);
}
catch (ValidationException ex)
{
    // handle validation error
}
catch (DuplicateUserException ex)
{
    // handle duplicate error
}
catch (DatabaseException ex)
{
    // handle database error
}
```
<br><br>

### Create Informative Exception Messages

Your exceptions should tell developers exactly what went wrong and how to fix it:
<br><br>

**Bad:**
```csharp
throw new Exception("Error");
throw new Exception("Invalid");
```
<br><br>

**Good:**
```csharp
throw new ValidationException($"Email address '{email}' is not valid. Please provide a valid email in format: user@domain.com");

throw new DuplicateUserException($"User with email '{user.Email}' already exists. Please use a different email address.");
```
<br><br>

### Don't Return Null

Returning null forces callers to check for null everywhere, cluttering code with defensive programming:
<br><br>

**Bad:**
```csharp
public Customer GetCustomer(int id)
{
    var customer = _db.Customers.FirstOrDefault(c => c.Id == id);
    return customer; // Could be null
}

// Now every caller needs to check:
var customer = GetCustomer(id);
if (customer != null)
{
    // Use customer
}
```
<br><br>

**Good:**
```csharp
public Customer GetCustomer(int id)
{
    var customer = _db.Customers.FirstOrDefault(c => c.Id == id);
    if (customer == null)
        throw new CustomerNotFoundException($"Customer with ID {id} not found");
    
    return customer;
}

// Or return a special case object:
public Customer GetCustomer(int id)
{
    var customer = _db.Customers.FirstOrDefault(c => c.Id == id);
    return customer ?? new GuestCustomer();
}
```
<br><br>

## Comments: When and How
<br><br>

### Good Code Doesn't Need Many Comments

Comments often indicate code that's trying to do too much or isn't clearly written:
<br><br>

**Bad:**
```csharp
// Check if user has premium subscription and get discount
if (u.s == 2 && u.dt > DateTime.Now.AddMonths(-12))
{
    d = 0.15; // Apply 15% discount
}
```
<br><br>

**Good:**
```csharp
const decimal PREMIUM_DISCOUNT = 0.15m;

bool hasActivePremiumSubscription = user.SubscriptionType == SubscriptionType.Premium 
    && user.SubscriptionDate > DateTime.Now.AddMonths(-12);

if (hasActivePremiumSubscription)
{
    discount = PREMIUM_DISCOUNT;
}
```
<br><br>

The good version needs no comments because the code itself is clear.
<br><br>

### When Comments Are Useful

Comments should explain WHY, not WHAT:
<br><br>

**Good Comments:**
```csharp
// Using binary search because this list can contain 10,000+ items
// Performance testing showed 3x improvement over linear search
var index = BinarySearch(sortedList, target);

// HACK: API returns date in UTC but docs say local time
// Opened ticket #1234 with vendor - remove this when fixed
var localDate = apiDate.ToLocalTime();

// TODO: Implement caching here - causes 500ms delay on large datasets
var results = _db.GetAllRecords();
```
<br><br>

**Bad Comments:**
```csharp
// Set i to 0
int i = 0;

// Loop through users
foreach (var user in users)
{
    // Increment counter
    counter++;
}
```
<br><br>

## Code Organization
<br><br>

### The Stepdown Rule

Code should read like a newspaper article: high-level concepts first, details later:
<br><br>

```csharp
public class OrderProcessor
{
    // Public API - what this class does
    public void ProcessOrder(Order order)
    {
        ValidateOrder(order);
        CalculateTotals(order);
        ApplyBusinessRules(order);
        SaveOrder(order);
        NotifyCustomer(order);
    }

    // Supporting details below
    private void ValidateOrder(Order order)
    {
        ValidateItems(order);
        ValidateShippingAddress(order);
        ValidatePaymentMethod(order);
    }

    // Even more specific details
    private void ValidateItems(Order order)
    {
        if (order.Items.Count == 0)
            throw new InvalidOrderException("Order must contain items");
    }
    
    // ... more implementation details
}
```
<br><br>

### Dependency Injection

Make dependencies explicit and testable:
<br><br>

**Bad:**
```csharp
public class UserService
{
    public void CreateUser(User user)
    {
        var db = new DatabaseContext();
        var emailService = new EmailService();
        
        db.Users.Add(user);
        emailService.SendWelcomeEmail(user.Email);
    }
}
```
<br><br>

**Good:**
```csharp
public class UserService
{
    private readonly IDatabase _database;
    private readonly IEmailService _emailService;

    public UserService(IDatabase database, IEmailService emailService)
    {
        _database = database;
        _emailService = emailService;
    }

    public void CreateUser(User user)
    {
        _database.Users.Add(user);
        _emailService.SendWelcomeEmail(user.Email);
    }
}
```
<br><br>

Now the class is testable and its dependencies are explicit.
<br><br>

## SOLID Principles in Practice
<br><br>

### Single Responsibility Principle

Each class should have one reason to change:
<br><br>

**Bad:**
```csharp
public class User
{
    public void Save() { } // Database responsibility
    public void SendEmail() { } // Email responsibility
    public void GenerateReport() { } // Reporting responsibility
}
```
<br><br>

**Good:**
```csharp
public class User { } // Just data
public class UserRepository { public void Save(User user) { } }
public class UserNotificationService { public void SendEmail(User user) { } }
public class UserReportGenerator { public Report Generate(User user) { } }
```
<br><br>

### Open/Closed Principle

Open for extension, closed for modification:
<br><br>

**Bad:**
```csharp
public decimal CalculateDiscount(Customer customer)
{
    if (customer.Type == CustomerType.Regular)
        return 0.05m;
    else if (customer.Type == CustomerType.Premium)
        return 0.15m;
    else if (customer.Type == CustomerType.VIP)
        return 0.25m;
    
    return 0;
}
```
<br><br>

**Good:**
```csharp
public interface IDiscountStrategy
{
    decimal CalculateDiscount(decimal amount);
}

public class RegularCustomerDiscount : IDiscountStrategy
{
    public decimal CalculateDiscount(decimal amount) => amount * 0.05m;
}

public class PremiumCustomerDiscount : IDiscountStrategy
{
    public decimal CalculateDiscount(decimal amount) => amount * 0.15m;
}

public class Customer
{
    public IDiscountStrategy DiscountStrategy { get; set; }
    
    public decimal CalculateDiscount(decimal amount)
    {
        return DiscountStrategy.CalculateDiscount(amount);
    }
}
```
<br><br>

Now you can add new discount types without modifying existing code.
<br><br>

## Practical Tips for Clean Code
<br><br>

1. **Boy Scout Rule:** Leave code cleaner than you found it
2. **Don't Repeat Yourself (DRY):** Extract common functionality
3. **Code Reviews:** Get feedback from teammates
4. **Refactor Regularly:** Improvement is continuous
5. **Write Tests:** Tests document how code should work
6. **Use Linters:** Automate style enforcement
7. **Read Good Code:** Learn from well-written open source projects
<br><br>

## Conclusion

Clean code isn't achieved in one pass. It's the result of constant refinement and a commitment to quality. Every function you split, every variable you rename, every duplicate you eliminate makes your codebase better.
<br><br>

The techniques I've shared come from years of writing, reading, and maintaining code in production environments. They've saved me countless hours of debugging and made collaboration with my teams significantly smoother.
<br><br>

Remember: you're not just writing code for computers—you're writing it for the next developer who has to understand and modify it. That developer might be you in six months, and they'll thank you for writing clean code.
<br><br>

Start small. Pick one principle and practice it this week. Then add another. Over time, writing clean code becomes second nature.
<br><br>

***
<br>
Write code worth reading!<br>
Rolando (Jun) Remolacio
