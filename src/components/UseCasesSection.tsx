import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Database, 
  FileCheck, 
  TrendingUp, 
  Shield, 
  Zap,
  Upload,
  Download,
  CheckCircle
} from "lucide-react";

const UseCasesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const useCases = [
    {
      id: "bias-detection",
      title: "Bias Detection & Explainability",
      subtitle: "Identify and eliminate algorithmic bias",
      icon: <Brain className="w-8 h-8" />,
      color: "primary",
      description: "Advanced AI models analyze your datasets and algorithms to detect hidden biases across protected attributes like race, gender, and age. Get detailed explanations and actionable insights.",
      features: [
        "Real-time bias monitoring",
        "Fairness metrics dashboard", 
        "Explainable AI insights",
        "Automated bias reports"
      ],
      demo: {
        title: "Upload Your Dataset",
        subtitle: "Drag and drop CSV/Excel files for instant bias analysis",
        uploadText: "Drop files here or click to browse",
        results: [
          { metric: "Gender Bias Score", value: "0.15", status: "warning" },
          { metric: "Racial Fairness Index", value: "0.92", status: "good" },
          { metric: "Age Discrimination Risk", value: "0.08", status: "good" }
        ]
      }
    },
    {
      id: "synthetic-data",
      title: "Synthetic Data Generation",
      subtitle: "Generate privacy-safe training data",
      icon: <Database className="w-8 h-8" />,
      color: "secondary",
      description: "Create statistically accurate synthetic datasets that preserve data utility while protecting privacy. Perfect for testing, development, and sharing sensitive data.",
      features: [
        "Privacy-preserving generation",
        "Statistical accuracy maintained",
        "Custom data schemas",
        "Enterprise-scale processing"
      ],
      demo: {
        title: "Generate Synthetic Data",
        subtitle: "Create privacy-safe datasets in minutes",
        uploadText: "Upload original dataset for synthesis",
        results: [
          { metric: "Privacy Score", value: "99.7%", status: "good" },
          { metric: "Statistical Fidelity", value: "96.2%", status: "good" },
          { metric: "Generated Records", value: "50,000", status: "info" }
        ]
      }
    },
    {
      id: "compliance",
      title: "Compliance Report Generation",
      subtitle: "Automated regulatory compliance",
      icon: <FileCheck className="w-8 h-8" />,
      color: "accent",
      description: "Generate comprehensive compliance reports for GDPR, CCPA, and industry-specific regulations. Automated documentation for audits and regulatory reviews.",
      features: [
        "Multi-regulation support",
        "Automated documentation",
        "Audit trail tracking",
        "Custom report templates"
      ],
      demo: {
        title: "Generate Compliance Report",
        subtitle: "Automated regulatory documentation",
        uploadText: "Upload models and data for compliance check",
        results: [
          { metric: "GDPR Compliance", value: "98%", status: "good" },
          { metric: "Data Protection Score", value: "94%", status: "good" },
          { metric: "Audit Readiness", value: "Complete", status: "good" }
        ]
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good": return "text-secondary";
      case "warning": return "text-yellow-400";
      case "info": return "text-primary";
      default: return "text-foreground";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "good": return "bg-secondary/20 text-secondary border-secondary/30";
      case "warning": return "bg-yellow-400/20 text-yellow-400 border-yellow-400/30";
      case "info": return "bg-primary/20 text-primary border-primary/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="use-cases" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
            Core Capabilities
          </Badge>
          <h2 className="section-title">
            Three Pillars of
            <br />
            <span className="text-gradient-secondary">Ethical AI</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Our comprehensive platform addresses the critical challenges of modern AI deployment
            with enterprise-grade solutions for bias detection, data privacy, and regulatory compliance.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {useCases.map((useCase, index) => (
            <button
              key={useCase.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === index
                  ? "bg-card border border-primary/50 text-primary glow-primary"
                  : "bg-card/50 border border-border hover:border-primary/30 text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className={`${activeTab === index ? 'text-primary' : 'text-muted-foreground'}`}>
                {useCase.icon}
              </span>
              <span>{useCase.title}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg bg-${useCases[activeTab].color}/20 text-${useCases[activeTab].color}`}>
                  {useCases[activeTab].icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground">
                    {useCases[activeTab].title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {useCases[activeTab].subtitle}
                  </p>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                {useCases[activeTab].description}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {useCases[activeTab].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button className="btn-hero">
                Try {useCases[activeTab].title}
              </Button>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right - Interactive Demo */}
          <div className="space-y-6">
            <Card className="feature-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Upload className="w-6 h-6 text-primary" />
                  <span>{useCases[activeTab].demo.title}</span>
                </CardTitle>
                <p className="text-muted-foreground">
                  {useCases[activeTab].demo.subtitle}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Upload Area */}
                <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer bg-primary/5">
                  <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-foreground font-medium mb-2">
                    {useCases[activeTab].demo.uploadText}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Supports CSV, Excel, JSON files up to 100MB
                  </p>
                </div>

                {/* Results */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">Analysis Results</h4>
                    <Download className="w-5 h-5 text-primary cursor-pointer hover:text-primary/80" />
                  </div>
                  
                  <div className="space-y-3">
                    {useCases[activeTab].demo.results.map((result, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <span className="text-foreground font-medium">{result.metric}</span>
                        <Badge className={getStatusBadge(result.status)}>
                          {result.value}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;