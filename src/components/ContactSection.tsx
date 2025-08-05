import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Calendar, 
  MessageSquare, 
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Get in touch via email",
      value: "hello@ethicalai-auditor.com",
      action: "Send Email"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Speak with our team",
      value: "+1 (555) 123-4567",
      action: "Call Now"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Book a Demo",
      description: "Schedule a personalized demo",
      value: "30-minute session",
      action: "Schedule Demo"
    }
  ];

  const officeInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      label: "Headquarters",
      value: "San Francisco, CA"
    },
    {
      icon: <Clock className="w-5 h-5 text-secondary" />,
      label: "Business Hours",
      value: "Mon-Fri, 9AM-6PM PST"
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-accent" />,
      label: "Response Time",
      value: "< 24 hours"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-accent/20 text-accent border-accent/30">
            Get In Touch
          </Badge>
          <h2 className="section-title">
            Ready to Transform
            <br />
            <span className="text-gradient-secondary">Your AI Operations?</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Join leading enterprises who trust Ethical AI Auditor to ensure fair, 
            transparent, and compliant AI systems. Let's discuss your specific needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Methods
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="feature-card cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/20 rounded-lg text-primary">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">
                            {method.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            {method.description}
                          </p>
                          <p className="text-primary font-medium mb-3">
                            {method.value}
                          </p>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          >
                            {method.action}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Office Info */}
            <Card className="bg-card/50 border border-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Office Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {officeInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {info.icon}
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="feature-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center space-x-3">
                  <MessageSquare className="w-7 h-7 text-primary" />
                  <span>Send us a Message</span>
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Company
                    </label>
                    <Input
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter your company name"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your AI auditing needs..."
                      required
                      rows={6}
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span>We'll respond within 24 hours</span>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-hero w-full group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary p-12 border-0 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                Enterprise Solutions Available
              </h3>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Need custom deployment, dedicated support, or specific compliance requirements? 
                Our enterprise team is ready to create a tailored solution for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold"
                >
                  Contact Enterprise Sales
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary font-semibold"
                >
                  Download Enterprise Brochure
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;