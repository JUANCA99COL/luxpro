# Car Dealership API Contracts

## Current Mock Data Implementation
The frontend currently uses mock data from `/app/frontend/src/data/mock.js` with:
- Car brands data (8 brands: BMW, Mercedes, Audi, Porsche, Nissan, Toyota, Mazda, Subaru)
- Car categories (Sedans, SUVs, Sports Cars, Electric Vehicles)
- Featured cars (5 premium vehicles)
- Services data (Financing, Trade-In, Customization, Warranty)
- Testimonials (3 customer reviews)
- Cart functionality (localStorage-based)

## Required Backend API Endpoints

### 1. Cars Management
```
GET /api/cars - Get all cars with filtering
GET /api/cars/:id - Get specific car details
GET /api/cars/featured - Get featured cars
GET /api/cars/categories - Get car categories
POST /api/cars - Add new car (admin)
PUT /api/cars/:id - Update car (admin)
DELETE /api/cars/:id - Delete car (admin)
```

### 2. Cart Management
```
GET /api/cart/:sessionId - Get cart items
POST /api/cart/:sessionId/items - Add item to cart
PUT /api/cart/:sessionId/items/:itemId - Update cart item
DELETE /api/cart/:sessionId/items/:itemId - Remove from cart
DELETE /api/cart/:sessionId - Clear cart
```

### 3. Test Drive Booking
```
POST /api/test-drives - Schedule test drive
GET /api/test-drives - Get all bookings (admin)
GET /api/test-drives/:id - Get specific booking
PUT /api/test-drives/:id - Update booking status
```

### 4. Services & Inquiries
```
GET /api/services - Get all services
POST /api/inquiries - Submit service inquiry
POST /api/financing-calculator - Calculate financing options
```

### 5. Newsletter & Customers
```
POST /api/newsletter - Subscribe to newsletter
GET /api/customers - Get customer list (admin)
POST /api/customers - Create customer profile
```

## Data Models

### Car Model
```javascript
{
  id: string,
  name: string,
  brand: string,
  price: number,
  image: string,
  images: [string], // Multiple images
  horsepower: number,
  availability: string, // "In Stock", "Limited", "Pre-Order"
  features: [string],
  category: string,
  specifications: {
    engine: string,
    transmission: string,
    drivetrain: string,
    fuelEconomy: string,
    topSpeed: string,
    acceleration: string
  },
  description: string,
  year: number,
  mileage: number,
  condition: string, // "New", "Used", "Certified Pre-Owned"
  createdAt: Date,
  updatedAt: Date
}
```

### Cart Item Model
```javascript
{
  id: string,
  sessionId: string,
  carId: string,
  quantity: number, // Always 1 for cars
  addedAt: Date
}
```

### Test Drive Booking Model
```javascript
{
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  driversLicense: string,
  carId: string,
  preferredDate: Date,
  preferredTime: string,
  message: string,
  status: string, // "Pending", "Confirmed", "Completed", "Cancelled"
  createdAt: Date,
  updatedAt: Date
}
```

### Service Inquiry Model
```javascript
{
  id: string,
  serviceType: string,
  customerName: string,
  email: string,
  phone: string,
  message: string,
  status: string, // "New", "In Progress", "Resolved"
  createdAt: Date
}
```

## Frontend Integration Points

### 1. Replace Mock Data
- Remove localStorage-based cart operations
- Replace static data arrays with API calls
- Add loading states for all API operations
- Implement error handling for failed requests

### 2. Cart Integration
- Generate session ID on first visit
- Replace `addToCart`, `removeFromCart` functions
- Update cart count real-time
- Persist cart across browser sessions

### 3. Form Submissions
- Test drive form → POST /api/test-drives
- Newsletter signup → POST /api/newsletter
- Service inquiries → POST /api/inquiries

### 4. Real-time Updates
- Cart updates trigger re-fetch
- Availability status updates
- Price changes reflection

## Authentication (Future Enhancement)
```
POST /api/auth/login - User login
POST /api/auth/register - User registration
GET /api/auth/profile - Get user profile
PUT /api/auth/profile - Update profile
POST /api/auth/logout - Logout
```

## Admin Panel (Future Enhancement)
```
GET /api/admin/dashboard - Dashboard stats
GET /api/admin/cars - Manage inventory
GET /api/admin/bookings - Manage test drives
GET /api/admin/inquiries - Manage customer inquiries
```

## Implementation Priority
1. **High Priority**: Cars CRUD, Cart Management, Test Drive Booking
2. **Medium Priority**: Service Inquiries, Newsletter, Financing Calculator
3. **Low Priority**: Admin Panel, Advanced Authentication

## Notes
- Use session-based cart management (no authentication required initially)
- All car images should be stored and served properly
- Implement proper error handling and validation
- Add pagination for large datasets
- Consider caching for frequently accessed data