import { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Vendors = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const vendors = [
    {
      name: "VMware",
      category: "cloud",
      description: "Virtualization and cloud infrastructure solutions for modern data centers",
      capabilities: ["vSphere", "vSAN", "NSX", "Cloud Foundation"],
      tier: "Strategic Partner"
    },
    {
      name: "Cisco",
      category: "networking", 
      description: "Network infrastructure, security, and collaboration solutions",
      capabilities: ["Switching", "Routing", "Security", "Wireless"],
      tier: "Gold Partner"
    },
    {
      name: "Dell EMC",
      category: "storage",
      description: "Enterprise storage, servers, and converged infrastructure",
      capabilities: ["PowerMax", "Unity", "VxRail", "PowerEdge"],
      tier: "Premier Partner"
    },
    {
      name: "Microsoft",
      category: "cloud",
      description: "Cloud services, operating systems, and productivity solutions",
      capabilities: ["Azure", "Office 365", "Windows Server", "SQL Server"],
      tier: "Gold Partner"
    },
    {
      name: "CrowdStrike",
      category: "security",
      description: "Cloud-native endpoint protection and threat intelligence",
      capabilities: ["Falcon Platform", "EDR", "Threat Hunting", "Cloud Security"],
      tier: "Technology Partner"
    },
    {
      name: "Fortinet",
      category: "security",
      description: "Network security appliances and security fabric solutions",
      capabilities: ["FortiGate", "FortiAnalyzer", "FortiManager", "SIEM"],
      tier: "Strategic Partner"
    },
    {
      name: "Veeam",
      category: "storage",
      description: "Backup, recovery, and data management solutions",
      capabilities: ["Backup & Replication", "Cloud Connect", "ONE", "Archive"],
      tier: "Gold Partner"
    },
    {
      name: "Palo Alto Networks",
      category: "security",
      description: "Next-generation firewalls and security orchestration",
      capabilities: ["Prisma", "Cortex", "GlobalProtect", "Panorama"],
      tier: "Strategic Partner"
    },
    {
      name: "HPE",
      category: "storage",
      description: "Enterprise storage, compute, and hybrid cloud solutions",
      capabilities: ["3PAR", "Nimble", "SimpliVity", "ProLiant"],
      tier: "Premier Partner"
    },
    {
      name: "Pure Storage",
      category: "storage",
      description: "All-flash storage arrays and cloud storage services",
      capabilities: ["FlashArray", "FlashBlade", "Cloud Block Store", "Portworx"],
      tier: "Technology Partner"
    },
    {
      name: "Nutanix",
      category: "cloud",
      description: "Hyperconverged infrastructure and multi-cloud solutions",
      capabilities: ["AHV", "Prism", "Calm", "Karbon"],
      tier: "Strategic Partner"
    },
    {
      name: "Splunk",
      category: "security",
      description: "Security information and event management (SIEM)",
      capabilities: ["Enterprise Security", "SOAR", "UBA", "Phantom"],
      tier: "Technology Partner"
    }
  ];

  const categories = [
    { id: "all", label: "All Partners", count: vendors.length },
    { id: "cloud", label: "Cloud", count: vendors.filter(v => v.category === "cloud").length },
    { id: "storage", label: "Storage", count: vendors.filter(v => v.category === "storage").length },
    { id: "security", label: "Security", count: vendors.filter(v => v.category === "security").length },
    { id: "networking", label: "Networking", count: vendors.filter(v => v.category === "networking").length }
  ];

  const filteredVendors = activeFilter === "all" 
    ? vendors 
    : vendors.filter(vendor => vendor.category === activeFilter);

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Strategic Partner":
        return "bg-primary text-primary-foreground";
      case "Premier Partner":
        return "bg-accent text-accent-foreground";
      case "Gold Partner":
        return "bg-mandalay text-white";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern bg-spring-wood section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Technology Partners
            </h1>
            <p className="text-xl text-boulder leading-relaxed">
              Platforms we implement and operate with care. Our strategic partnerships 
              ensure you get the best enterprise-grade solutions.
            </p>
          </div>
        </div>
      </section>

      <div className="container-width px-6 py-16">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              {category.label} ({category.count})
            </Button>
          ))}
        </div>

        {/* Vendors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVendors.map((vendor, index) => (
            <Card key={index} className="card-elevated h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-heading">{vendor.name}</CardTitle>
                  <Badge className={getTierColor(vendor.tier)}>
                    {vendor.tier}
                  </Badge>
                </div>
                <p className="text-boulder text-sm">{vendor.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-sm">Key Capabilities</h4>
                    <div className="flex flex-wrap gap-2">
                      {vendor.capabilities.map((capability, capIndex) => (
                        <Badge
                          key={capIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {capability}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full btn-secondary text-sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Book a Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Benefits */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Partnership Benefits
            </h2>
            <p className="text-lg text-boulder max-w-2xl mx-auto">
              Why our vendor relationships deliver superior value for your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-elevated text-center">
              <CardHeader>
                <CardTitle className="text-lg font-heading">Certified Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-boulder text-sm">
                  Our team holds advanced certifications across all partner technologies, 
                  ensuring expert implementation and support.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated text-center">
              <CardHeader>
                <CardTitle className="text-lg font-heading">Preferred Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-boulder text-sm">
                  Strategic partnerships provide access to competitive pricing and 
                  exclusive offers for our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated text-center">
              <CardHeader>
                <CardTitle className="text-lg font-heading">Direct Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-boulder text-sm">
                  Priority access to vendor technical support and escalation paths 
                  when you need them most.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary to-accent p-12 rounded-2xl text-white">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Ready to Explore These Solutions?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss which technologies align best with your business objectives 
              and technical requirements.
            </p>
            <Button asChild className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Vendors;