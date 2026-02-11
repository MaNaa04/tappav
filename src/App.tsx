import { BlueNavbar } from './components/BlueNavbar';
import { SecondaryNav } from './components/SecondaryNav';
import { HeroSection } from './components/HeroSection';
import { ExperienceCards } from './components/ExperienceCards';
import { ProcessSteps } from './components/ProcessSteps';
import { TestimonialSection } from './components/TestimonialSection';
import { CTASection } from './components/CTASection';
import { MainFooter } from './components/MainFooter';
import { ProductListingPage } from './components/ProductListingPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { useRouter } from './hooks/useRouter';

function LandingPage() {
  return (
    <>
      <SecondaryNav />
      <HeroSection />
      <ExperienceCards />
      <ProcessSteps />
      <TestimonialSection />
      <CTASection />
    </>
  );
}

export default function App() {
  const { route, navigate } = useRouter();

  const renderPage = () => {
    // Product detail page: /product/:slug
    if (route.startsWith('/product/')) {
      const slug = route.replace('/product/', '');
      return <ProductDetailPage productId={slug} onNavigate={navigate} />;
    }

    // Store with category: /store/:category
    if (route.startsWith('/store/')) {
      const category = route.replace('/store/', '');
      return <ProductListingPage category={category} onNavigate={navigate} />;
    }

    // Store listing: /store
    if (route === '/store') {
      return <ProductListingPage onNavigate={navigate} />;
    }

    // Default: Landing page
    return <LandingPage />;
  };

  return (
    <div className="min-h-screen bg-white">
      <BlueNavbar onNavigate={navigate} />
      {renderPage()}
      <MainFooter />
    </div>
  );
}
