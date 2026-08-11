// Mock data for car dealership

export const carBrands = [
  {
    id: 1,
    name: "BMW",
    description: "Ultimate Driving Machine",
    image: "https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxCTVd8ZW58MHx8fHwxNzU3MTA1MjY5fDA&ixlib=rb-4.1.0&q=85",
    category: "luxury"
  },
  {
    id: 2,
    name: "Mercedes",
    description: "The Best or Nothing",
    image: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxNZXJjZWRlc3xlbnwwfHx8fDE3NTcxMDUyNzZ8MA&ixlib=rb-4.1.0&q=85",
    category: "luxury"
  },
  {
    id: 3,
    name: "Audi",
    description: "Vorsprung durch Technik",
    image: "https://images.unsplash.com/photo-1646405871744-2005e64f8e32?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxBdWRpfGVufDB8fHx8MTc1NzEwNTI4MXww&ixlib=rb-4.1.0&q=85",
    category: "luxury"
  },
  {
    id: 4,
    name: "Porsche",
    description: "There is No Substitute",
    image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxQb3JzY2hlfGVufDB8fHx8MTc1NzEwNTM1MHww&ixlib=rb-4.1.0&q=85",
    category: "sports"
  },
  {
    id: 5,
    name: "Nissan",
    description: "Innovation That Excites",
    image: "https://images.unsplash.com/photo-1530675706010-bc677ce30ab6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxOaXNzYW58ZW58MHx8fHwxNzU3MTA1MzM1fDA&ixlib=rb-4.1.0&q=85",
    category: "performance"
  },
  {
    id: 6,
    name: "Toyota",
    description: "Let's Go Places",
    image: "https://images.unsplash.com/photo-1621993202323-f438eec934ff?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxUb3lvdGF8ZW58MHx8fHwxNzU3MTA1MzQwfDA&ixlib=rb-4.1.0&q=85",
    category: "reliable"
  },
  {
    id: 7,
    name: "Mazda",
    description: "Driving Matters",
    image: "https://images.unsplash.com/photo-1530484567812-2d5a2d82268c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxNYXpkYXxlbnwwfHx8fDE3NTcxMDUzNDV8MA&ixlib=rb-4.1.0&q=85",
    category: "stylish"
  },
  {
    id: 8,
    name: "Subaru",
    description: "Love. It's What Makes Subaru",
    image: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg",
    category: "adventure"
  }
];

export const carCategories = [
  {
    id: 1,
    name: "Sedans",
    description: "Elegant comfort meets performance",
    image: `${process.env.PUBLIC_URL}/imgs/sedan.png`,
    count: 24
  },
  {
    id: 2,
    name: "SUVs",
    description: "Power and versatility combined",
    image: `${process.env.PUBLIC_URL}/imgs/suvs.png`,
    count: 18
  },
  {
    id: 3,
    name: "Sports Cars",
    description: "Pure adrenaline on wheels",
    image: `${process.env.PUBLIC_URL}/imgs/sportscar.png`,
    count: 12
  },
  {
    id: 4,
    name: "Electric Vehicles",
    description: "The future is electric",
    image: `${process.env.PUBLIC_URL}/imgs/electric.png`,
    count: 8
  }
];

export const featuredCars = [
  {
    id: 1,
    name: "BMW M4 Competition",
    brand: "BMW",
    price: 89900,
    image: `${process.env.PUBLIC_URL}/imgs/bmw-final.jpg`,
    horsepower: 503,
    availability: "In Stock",
    features: ["Twin-Turbo V6", "Carbon Fiber", "Premium Audio"],
    category: "Sports Cars"
  },
  {
    id: 2,
    name: "Mercedes AMG C63S",
    brand: "Mercedes",
    price: 95500,
    image: `${process.env.PUBLIC_URL}/imgs/mercedez-final.jpg`,
    horsepower: 469,
    availability: "In Stock",
    features: ["AMG Performance", "Luxury Interior", "Advanced Safety"],
    category: "Sedans"
  },
  {
    id: 3,
    name: "Audi RS6 Avant",
    brand: "Audi",
    price: 112000,
    image: `${process.env.PUBLIC_URL}/imgs/audi-final.jpg`,
    horsepower: 591,
    availability: "Pre-Order",
    features: ["Quattro AWD", "Dynamic Suspension", "Premium Plus"],
    category: "SUVs"
  },
  {
    id: 4,
    name: "Porsche 911 GT3 RS",
    brand: "Porsche",
    price: 225000,
    image: `${process.env.PUBLIC_URL}/imgs/porshe-final.jpg`,
    horsepower: 518,
    availability: "Limited",
    features: ["Track Package", "Ceramic Brakes", "Aerodynamic Kit"],
    category: "Sports Cars"
  },
  {
    id: 5,
    name: "Nissan GT-R NISMO",
    brand: "Nissan",
    price: 175000,
    image: `${process.env.PUBLIC_URL}/imgs/nissan-nismo.jpg`,
    horsepower: 600,
    availability: "In Stock",
    features: ["Twin-Turbo V6", "NISMO Tuned", "All-Wheel Drive"],
    category: "Sports Cars"
  }
];

export const services = [
  {
    id: 1,
    title: "Auto Financing",
    description: "Competitive rates and flexible terms for your dream car",
    icon: "CreditCard",
    features: ["0.9% APR Available", "Quick Approval", "Trade-In Value"]
  },
  {
    id: 2,
    title: "Trade-In Program",
    description: "Get the best value for your current vehicle",
    icon: "RefreshCw",
    features: ["Instant Appraisal", "Best Market Value", "Easy Process"]
  },
  {
    id: 3,
    title: "Car Customization",
    description: "Personalize your vehicle with premium options",
    icon: "Settings",
    features: ["Performance Upgrades", "Luxury Interiors", "Paint Protection"]
  },
  {
    id: 4,
    title: "Extended Warranty",
    description: "Comprehensive protection for peace of mind",
    icon: "Shield",
    features: ["Up to 10 Years", "Roadside Assistance", "Nationwide Coverage"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, NY",
    rating: 5,
    comment: "Exceptional service and incredible selection. Found my dream BMW M4 and the financing process was seamless.",
    car: "BMW M4 Competition"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Los Angeles, CA",
    rating: 5,
    comment: "The team went above and beyond. My Porsche 911 is everything I hoped for and more. Highly recommend!",
    car: "Porsche 911 GT3"
  },
  {
    id: 3,
    name: "Emma Davis",
    location: "Miami, FL",
    rating: 5,
    comment: "Professional, knowledgeable, and honest. The trade-in process was fair and the new Mercedes is perfect.",
    car: "Mercedes AMG C63S"
  }
];

export const cartItems = JSON.parse(localStorage.getItem('dealership_cart')) || [];

export const saveCartToStorage = (cart) => {
  localStorage.setItem('dealership_cart', JSON.stringify(cart));
};

export const addToCart = (car) => {
  const existingCart = JSON.parse(localStorage.getItem('dealership_cart')) || [];
  const existingItem = existingCart.find(item => item.id === car.id);
  
  if (!existingItem) {
    const updatedCart = [...existingCart, { ...car, quantity: 1 }];
    saveCartToStorage(updatedCart);
    return updatedCart;
  }
  
  return existingCart;
};

export const removeFromCart = (carId) => {
  const existingCart = JSON.parse(localStorage.getItem('dealership_cart')) || [];
  const updatedCart = existingCart.filter(item => item.id !== carId);
  saveCartToStorage(updatedCart);
  return updatedCart;
};

export const getCartTotal = () => {
  const cart = JSON.parse(localStorage.getItem('dealership_cart')) || [];
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const getCartCount = () => {
  const cart = JSON.parse(localStorage.getItem('dealership_cart')) || [];
  return cart.reduce((count, item) => count + item.quantity, 0);
};