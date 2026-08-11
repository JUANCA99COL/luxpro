import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

// Components
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { CategoriesSection } from "./components/CategoriesSection";
import { FeaturedCarsSection } from "./components/FeaturedCarsSection";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CTABanner } from "./components/CTABanner";
import { Footer } from "./components/Footer";
import { Cart } from "./components/Cart";
import { TestDriveModal } from "./components/TestDriveModal";
import { CarDetailsModal } from "./components/CarDetailsModal";
import { Toaster } from "./components/ui/sonner";
import { LoadingScreen } from "./components/LoadingScreen";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isTestDriveModalOpen, setIsTestDriveModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isCarDetailsModalOpen, setIsCarDetailsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  const handleNavigateToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShopCarsClick = () => {
    handleNavigateToSection('categories');
  };

  const handleTestDriveClick = () => {
    setIsTestDriveModalOpen(true);
  };

  const handleCategoryClick = (category) => {
    console.log('Category clicked:', category);
    handleNavigateToSection('featured');
  };

  const handleViewDetails = (car) => {
    setSelectedCar(car);
    setIsCarDetailsModalOpen(true);
  };

  const handleServiceClick = (service) => {
    console.log('Service clicked:', service);
  };

  const handleContactClick = () => {
    handleNavigateToSection('footer');
  };

  return (
    <div className="min-h-screen bg-black">
      <LoadingScreen isVisible={isLoading} />

      {/* Header */}
      <Header 
        onCartClick={() => setIsCartOpen(true)}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Main Content */}
      <main>
        <HeroSection
          onShopCarsClick={handleShopCarsClick}
          onTestDriveClick={handleTestDriveClick}
          onViewDetails={handleViewDetails}
          onContactClick={handleContactClick}
        />
        
        <CategoriesSection 
          onCategoryClick={handleCategoryClick}
        />
        
        {/* <FeaturedCarsSection
          onViewDetails={handleViewDetails}
        /> */}

        <ServicesSection 
          onServiceClick={handleServiceClick}
        />
        
        <TestimonialsSection />
        
        <CTABanner 
          onTestDriveClick={handleTestDriveClick}
          onContactClick={handleContactClick}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      <TestDriveModal 
        isOpen={isTestDriveModalOpen}
        onClose={() => setIsTestDriveModalOpen(false)}
        selectedCar={selectedCar}
      />

      <CarDetailsModal
        car={selectedCar}
        isOpen={isCarDetailsModalOpen}
        onClose={() => setIsCarDetailsModalOpen(false)}
      />

      <Toaster theme="dark" position="bottom-right" richColors />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
