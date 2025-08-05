import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Zap, Target } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-card border border-primary/20 rounded-full px-4 py-2 text-sm font-medium">
              <Shield className="w-4 h-4 text-primary" />
              <span>Enterprise-Grade AI Auditing Platform</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="hero-title">
                Ethical AI
                <br />
                <span className="text-primary">Auditor</span>
              </h1>
              <p className="hero-subtitle">
                Scalable, Transparent & Fair AI for Modern Enterprises.
                Detect bias, generate synthetic data, and ensure compliance 
                with cutting-edge auditing technology.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-sm">
                <Zap className="w-5 h-5 text-primary" />
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="w-5 h-5 text-primary" />
                <span>Enterprise Secure</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Target className="w-5 h-5 text-primary" />
                <span>99.9% Accurate</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-secondary-hero group">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>GDPR Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>ISO 27001</span>
              </div>
            </div>
          </div>

          {/* Right Column - 3D Spline Animation */}
          <div className="lg:order-last order-first">
            <div className="spline-container">
              <iframe 
                src='https://my.spline.design/robotfollowcursorforlandingpage-Pw05Xa319c0OYvpJJ9nL7w4c/' 
                frameBorder='0' 
                className="spline-iframe"
                title="AI Robot Animation"
              />
              {/* Fallback overlay for loading */}
              <div className="absolute inset-0 bg-card/50 rounded-xl flex items-center justify-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;