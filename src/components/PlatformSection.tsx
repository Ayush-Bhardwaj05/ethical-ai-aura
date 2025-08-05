import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Cloud, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Lock,
  Monitor,
  Database,
  Cpu,
  Globe
} from "lucide-react";

const PlatformSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [counters, setCounters] = useState({
    models: 0,
    datasets: 0,
    compliance: 0,
    accuracy: 0
  });

  // Animated counters
  useEffect(() => {
    const targets = { models: 10000, datasets: 50000, compliance: 99, accuracy: 99.9 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        models: Math.round(targets.models * progress),
        datasets: Math.round(targets.datasets * progress),
        compliance: Math.round(targets.compliance * progress),
        accuracy: Math.round(targets.accuracy * progress * 10) / 10
      });

      if (step >= steps) clearInterval(timer);
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud-Native Architecture",
      description: "Scalable, secure, and globally distributed infrastructure"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-Time Processing",
      description: "Lightning-fast analysis with sub-second response times"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "SOC 2 Type II, ISO 27001, and GDPR compliant"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Deep insights with customizable dashboards and reports"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Role-based access control and workflow management"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Privacy",
      description: "Zero-knowledge architecture with end-to-end encryption"
    }
  ];

  const stats = [
    {
      icon: <Monitor className="w-8 h-8 text-primary" />,
      value: counters.models.toLocaleString(),
      label: "Models Audited",
      suffix: "+"
    },
    {
      icon: <Database className="w-8 h-8 text-secondary" />,
      value: counters.datasets.toLocaleString(),
      label: "Datasets Processed",
      suffix: "+"
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      value: counters.compliance,
      label: "Compliance Rate",
      suffix: "%"
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      value: counters.accuracy,
      label: "Accuracy Score",
      suffix: "%"
    }
  ];

  return (
    <section id="platform" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
            Platform Overview
          </Badge>
          <h2 className="section-title">
            Built for
            <br />
            <span className="text-gradient-primary">Enterprise Scale</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Our platform combines cutting-edge AI technology with enterprise-grade security 
            and scalability to deliver unmatched performance for your critical AI operations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="feature-card text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`feature-card cursor-pointer transition-all duration-300 ${
                activeFeature === index ? 'border-primary/50 glow-primary' : ''
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Section */}
        <div className="bg-card border border-border rounded-2xl p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Seamless Integration
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Connect with your existing ML pipelines, data warehouses, and business intelligence tools. 
              Our RESTful APIs and SDKs support Python, R, JavaScript, and more.
            </p>
            
            {/* Integration Logos/Names */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-8">
              {[
                "TensorFlow", "PyTorch", "Scikit-learn", 
                "Snowflake", "Databricks", "AWS SageMaker"
              ].map((tool, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <span className="text-sm font-medium text-muted-foreground">{tool}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                View Documentation
              </Button>
              <Button className="btn-secondary-hero">
                Download SDK
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;