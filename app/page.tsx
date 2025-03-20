"use client"

import { useState, useEffect, useRef, type FormEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Lock,
  AlertTriangle,
  FileSearch,
  Server,
  Users,
  ArrowRight,
  CheckCircle,
  Menu,
  X,
  ChevronRight,
  ExternalLink,
  Star,
  BarChart3,
  Globe,
  Activity,
  Zap,
  Eye,
  ShieldAlert,
  ShieldCheck,
  Laptop,
  Cloud,
  Database,
} from "lucide-react"
import { ThreatMap } from "@/components/threat-map"
import { ComparisonTable } from "@/components/comparison-table"
import { SecurityAssessment } from "@/components/security-assessment"
import { submitContactForm } from "@/lib/actions"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<{ success?: boolean; message?: string } | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const result = await submitContactForm(formData)
    setFormStatus(result)

    if (result.success && formRef.current) {
      formRef.current.reset()
      setTimeout(() => {
        setFormStatus(null)
      }, 5000)
    }
  }

  const industryLeaders = [
    {
      name: "Microsoft Security",
      logo: "/microsoft-security.png",
      description: "Comprehensive security solutions with a focus on endpoint protection and cloud security.",
      founded: 1975,
      headquarters: "Redmond, WA",
      strengths: ["Endpoint Protection", "Threat Detection", "Security Analytics"],
      rating: 4.5,
    },
    {
      name: "CrowdStrike",
      logo: "/crowdstrike.png",
      description: "Next-generation endpoint protection with their Falcon platform and advanced XDR capabilities.",
      founded: 2011,
      headquarters: "Austin, TX",
      strengths: ["Falcon Platform", "XDR", "Charlotte AI"],
      rating: 4.8,
    },
    {
      name: "Palo Alto Networks",
      logo: "/palo-alto.png",
      description: "Leading provider of next-generation firewalls and advanced threat detection solutions.",
      founded: 2005,
      headquarters: "Santa Clara, CA",
      strengths: ["Next-Gen Firewalls", "Cortex XDR", "AI Threat Detection"],
      rating: 4.7,
    },
    {
      name: "Fortinet",
      logo: "/fortinet.png",
      description: "Comprehensive security fabric protecting networks, endpoints, and clouds.",
      founded: 2000,
      headquarters: "Sunnyvale, CA",
      strengths: ["Security Fabric", "FortiGate", "Network Security"],
      rating: 4.6,
    },
    {
      name: "Zscaler",
      logo: "/zscaler.png",
      description: "Cloud-native security platform with zero-trust access features.",
      founded: 2007,
      headquarters: "San Jose, CA",
      strengths: ["Zero Trust", "Cloud Security", "SASE"],
      rating: 4.7,
    },
  ]

  const mdrProviders = [
    {
      name: "Rapid7",
      logo: "/rapid7.png",
      description: "Best overall MDR solution with a focus on simplifying cybersecurity.",
      founded: 2000,
      headquarters: "Boston, MA",
      strengths: ["Managed Detection", "Incident Response", "Vulnerability Management"],
      rating: 4.6,
    },
    {
      name: "ReliaQuest",
      logo: "/reliaquest.png",
      description: "GreyMatter platform with Agentic AI that promises threat response in under 5 minutes.",
      founded: 2007,
      headquarters: "Tampa, FL",
      strengths: ["GreyMatter Platform", "Agentic AI", "Fast Response"],
      rating: 4.5,
    },
    {
      name: "Expel",
      logo: "/expel.png",
      description: "Approach to minimizing business risk through advanced detection.",
      founded: 2016,
      headquarters: "Herndon, VA",
      strengths: ["Business Risk Reduction", "Advanced Detection", "Transparent MDR"],
      rating: 4.7,
    },
    {
      name: "eSentire",
      logo: "/esentire.png",
      description: "Comprehensive exposure management and incident response services across 35 industries.",
      founded: 2001,
      headquarters: "Waterloo, Canada",
      strengths: ["Exposure Management", "Incident Response", "Multi-Industry Expertise"],
      rating: 4.6,
    },
    {
      name: "Bitdefender",
      logo: "/bitdefender.png",
      description: "Exceptional focus on threat prevention and detection.",
      founded: 2001,
      headquarters: "Bucharest, Romania",
      strengths: ["Threat Prevention", "Detection", "Endpoint Security"],
      rating: 4.8,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header
        className={`border-b sticky top-0 z-50 w-full backdrop-blur transition-all duration-200 ${
          isScrolled ? "bg-background/95 supports-[backdrop-filter]:bg-background/60 shadow-sm" : "bg-background"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Sorc3ry</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {["Services", "About", "Solutions", "Comparison", "Assessment", "Contact"].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium relative group">
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="hover:bg-primary/10 transition-colors">
              Log In
            </Button>
            <Button className="shadow-md hover:shadow-lg transition-all">Get Started</Button>
          </div>
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b shadow-lg z-50">
            <nav className="container py-4 flex flex-col space-y-3">
              {["Services", "About", "Solutions", "Comparison", "Assessment", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium p-2 hover:bg-muted rounded-md flex items-center justify-between"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                  <ChevronRight size={16} />
                </Link>
              ))}
              <div className="pt-2 grid gap-2">
                <Button variant="outline" className="w-full justify-start">
                  Log In
                </Button>
                <Button className="w-full justify-start">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background via-background to-muted relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="px-3 py-1 bg-primary/10 text-primary border-primary/20 mb-4">
                  Enterprise-Grade Cybersecurity
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Secure Your Digital Future
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                  Comprehensive cybersecurity solutions to protect your business from evolving threats. Stay one step
                  ahead of cyber criminals with our zero-trust architecture.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    size="lg"
                    className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90"
                  >
                    Get Free Assessment
                  </Button>
                  <Button variant="outline" size="lg" className="hover:bg-primary/5 transition-colors">
                    View Threat Dashboard
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="inline-block h-10 w-10 rounded-full bg-gray-200 ring-2 ring-background border-2 border-background transition-transform hover:scale-110 hover:z-10"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Trusted by <span className="font-medium">2,000+</span> businesses
                  </p>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative">
                  <Image
                    src="/developer-reviewing-javascript.jpg"
                    alt="Cybersecurity Dashboard"
                    width={500}
                    height={500}
                    className="rounded-xl object-cover shadow-2xl transition-all duration-300 hover:shadow-primary/20 hover:shadow-2xl"
                    priority
                  />
                  <div className="absolute -bottom-4 -right-4 bg-background rounded-lg shadow-lg p-3 border">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">Protected by Sorc3ry</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Threat Dashboard Section */}
        <section className="py-16 md:py-24 bg-muted relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge variant="outline" className="px-3 py-1 bg-primary/10 text-primary border-primary/20 mb-2">
                Real-Time Monitoring
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                Interactive Threat Landscape
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Monitor global cyber threats in real-time and see how our protection compares to industry leaders.
              </p>
            </div>

            <div className="bg-card border rounded-xl shadow-xl overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Globe className="h-5 w-5 text-primary" />
                      Global Threat Monitor
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Live visualization of cyber attacks happening around the world
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></div>
                      <span className="text-xs">Active Attacks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <span className="text-xs">Potential Threats</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <span className="text-xs">Protected</span>
                    </div>
                  </div>
                </div>

                <div className="h-[400px] relative bg-card border rounded-lg overflow-hidden">
                  <ThreatMap />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <Card className="bg-card/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium flex items-center gap-2">
                        <Activity className="h-4 w-4 text-primary" />
                        Threat Activity
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1,247</div>
                      <p className="text-xs text-muted-foreground">Attacks blocked today</p>
                      <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "65%" }}></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        Response Time
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3.2s</div>
                      <p className="text-xs text-muted-foreground">Average threat response</p>
                      <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: "85%" }}></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium flex items-center gap-2">
                        <Eye className="h-4 w-4 text-primary" />
                        Threat Intelligence
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">99.8%</div>
                      <p className="text-xs text-muted-foreground">Detection accuracy</p>
                      <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "99%" }}></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge variant="outline" className="px-3 py-1 bg-primary/10 text-primary border-primary/20 mb-2">
                Our Services
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                Comprehensive Security Solutions
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                We offer a full range of cybersecurity services to protect your organization from threats.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Shield className="h-6 w-6 text-primary" />,
                  title: "Threat Protection",
                  description:
                    "Advanced threat detection and prevention to safeguard your systems from malware, ransomware, and other cyber threats.",
                },
                {
                  icon: <FileSearch className="h-6 w-6 text-primary" />,
                  title: "Vulnerability Assessment",
                  description:
                    "Comprehensive scanning and assessment to identify and remediate security vulnerabilities in your infrastructure.",
                },
                {
                  icon: <AlertTriangle className="h-6 w-6 text-primary" />,
                  title: "Incident Response",
                  description:
                    "Rapid response to security incidents with expert containment, eradication, and recovery services.",
                },
                {
                  icon: <Lock className="h-6 w-6 text-primary" />,
                  title: "Data Protection",
                  description:
                    "Secure your sensitive data with encryption, access controls, and data loss prevention strategies.",
                },
                {
                  icon: <Server className="h-6 w-6 text-primary" />,
                  title: "Cloud Security",
                  description:
                    "Specialized security solutions for cloud environments, ensuring your cloud infrastructure remains protected.",
                },
                {
                  icon: <Users className="h-6 w-6 text-primary" />,
                  title: "Security Training",
                  description:
                    "Comprehensive security awareness training to educate your employees on best practices and threat recognition.",
                },
              ].map((service, i) => (
                <Card
                  key={i}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                >
                  <CardHeader className="pb-2">
                    <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      {service.icon}
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="#"
                      className="text-sm font-medium text-primary inline-flex items-center group-hover:underline"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-28 bg-muted relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="px-3 py-1 bg-primary/10 text-primary border-primary/20 mb-2">
                  About Us
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                  Protecting Businesses Since 2010
                </h2>
                <p className="text-muted-foreground md:text-lg leading-relaxed">
                  Sorc3ry is a leading cybersecurity firm with over a decade of experience protecting businesses of all
                  sizes from evolving cyber threats. Our team of certified security experts is dedicated to providing
                  cutting-edge solutions tailored to your specific needs.
                </p>
                <ul className="grid gap-3">
                  {[
                    "24/7 Security Monitoring",
                    "Certified Security Experts",
                    "Customized Security Solutions",
                    "Proactive Threat Hunting",
                    "Compliance Expertise",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 bg-background/50 p-3 rounded-lg shadow-sm">
                      <div className="bg-primary/10 rounded-full p-1">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button className="shadow-md hover:shadow-lg transition-all">Learn More About Us</Button>
                  <Button variant="outline" className="hover:bg-primary/10 transition-colors">
                    Meet Our Team
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl blur-xl opacity-50"></div>
                <div className="relative">
                  <Image
                    src="/finger-pointing-at-javascript-code.jpg"
                    alt="Security Operations Center"
                    width={500}
                    height={500}
                    className="rounded-xl object-cover shadow-2xl"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-4 py-1 shadow-lg border">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium">Top Rated 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge variant="outline" className="px-3 py-1 bg-primary/10 text-primary border-primary/20 mb-2">
                Our Solutions
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                Tailored Security for Every Industry
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                We understand that different industries face unique security challenges. Our solutions are customized to
                meet your specific needs.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {[
                {
                  title: "Healthcare",
                  description: "HIPAA-compliant security solutions to protect patient data and medical systems.",
                  image: "/developer-coding-in-php.jpg",
                  badge: "HIPAA Compliant",
                },
                {
                  title: "Financial Services",
                  description:
                    "Robust security measures for financial institutions to safeguard sensitive transactions and customer data.",
                  image: "/computer-security-lock-and-payment.jpg",
                  badge: "PCI DSS Certified",
                },
                {
                  title: "E-commerce",
                  description: "Protect customer information and ensure secure transactions for your online business.",
                  image: "/close-up-of-motherboard.jpg",
                  badge: "Fraud Protection",
                },
                {
                  title: "Manufacturing",
                  description:
                    "Secure industrial control systems and protect intellectual property from cyber threats.",
                  image: "/developer-reviewing-javascript.jpg",
                  badge: "OT Security",
                },
                {
                  title: "Government",
                  description:
                    "Specialized security solutions for government agencies to protect sensitive information.",
                  image: "/finger-pointing-at-javascript-code.jpg",
                  badge: "FedRAMP Ready",
                },
                {
                  title: "Education",
                  description:
                    "Comprehensive security for educational institutions to protect student data and research.",
                  image: "/developer-coding-in-php.jpg",
                  badge: "FERPA Compliant",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-primary/90 hover:bg-primary text-white">{item.badge}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="#"
                      className="text-sm font-medium text-primary inline-flex items-center group-hover:underline"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Leaders Comparison Section */}
        <section id="comparison" className="py-20 md:py-28 bg-muted relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge variant="outline" className="px-3 py-1 bg-primary/10 text-primary border-primary/20 mb-2">
                Industry Benchmarks
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                How We Compare to Industry Leaders
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                See how our cybersecurity solutions stack up against the top providers in the industry.
              </p>
            </div>

            <Tabs defaultValue="cybersecurity" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto md:grid-cols-2 mb-8">
                <TabsTrigger value="cybersecurity">Cybersecurity Leaders</TabsTrigger>
                <TabsTrigger value="mdr">MDR Providers</TabsTrigger>
              </TabsList>

              <TabsContent value="cybersecurity" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {industryLeaders.map((company, i) => (
                    <Card
                      key={i}
                      className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{company.name}</CardTitle>
                            <p className="text-xs text-muted-foreground">Founded: {company.founded}</p>
                          </div>
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, idx) => (
                              <Star
                                key={idx}
                                className={`h-4 w-4 ${idx < company.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                              />
                            ))}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground">{company.description}</p>
                        <div>
                          <p className="text-xs font-medium mb-1">Key Strengths:</p>
                          <div className="flex flex-wrap gap-2">
                            {company.strengths.map((strength, j) => (
                              <Badge key={j} variant="secondary" className="text-xs">
                                {strength}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <p className="text-xs text-muted-foreground">{company.headquarters}</p>
                        <Button variant="ghost" size="sm" className="text-primary">
                          <ExternalLink className="h-4 w-4 mr-1" /> Compare
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <ComparisonTable
                  companies={[
                    { name: "Sorc3ry", highlight: true },
                    ...industryLeaders.slice(0, 4).map((c) => ({ name: c.name, highlight: false })),
                  ]}
                  features={[
                    { name: "Threat Detection", ratings: [5, 4, 5, 4, 5] },
                    { name: "Incident Response Time", ratings: [5, 4, 5, 3, 4] },
                    { name: "Cloud Security", ratings: [5, 5, 4, 4, 5] },
                    { name: "Zero Trust Implementation", ratings: [5, 4, 3, 4, 5] },
                    { name: "AI-Powered Analytics", ratings: [5, 4, 5, 3, 4] },
                    { name: "Cost Effectiveness", ratings: [5, 3, 3, 4, 3] },
                  ]}
                />
              </TabsContent>

              <TabsContent value="mdr" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {mdrProviders.map((company, i) => (
                    <Card
                      key={i}
                      className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{company.name}</CardTitle>
                            <p className="text-xs text-muted-foreground">Founded: {company.founded}</p>
                          </div>
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, idx) => (
                              <Star
                                key={idx}
                                className={`h-4 w-4 ${idx < company.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                              />
                            ))}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground">{company.description}</p>
                        <div>
                          <p className="text-xs font-medium mb-1">Key Strengths:</p>
                          <div className="flex flex-wrap gap-2">
                            {company.strengths.map((strength, j) => (
                              <Badge key={j} variant="secondary" className="text-xs">
                                {strength}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <p className="text-xs text-muted-foreground">{company.headquarters}</p>
                        <Button variant="ghost" size="sm" className="text-primary">
                          <ExternalLink className="h-4 w-4 mr-1" /> Compare
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <ComparisonTable
                  companies={[
                    { name: "Sorc3ry MDR", highlight: true },
                    ...mdrProviders.slice(0, 4).map((c) => ({ name: c.name, highlight: false })),
                  ]}
                  features={[
                    { name: "24/7 Monitoring", ratings: [5, 5, 5, 5, 5] },
                    { name: "Response Time", ratings: [5, 4, 5, 4, 4] },
                    { name: "Threat Hunting", ratings: [5, 4, 4, 5, 4] },
                    { name: "Customization", ratings: [5, 3, 4, 4, 3] },
                    { name: "Reporting", ratings: [5, 4, 5, 4, 4] },
                    { name: "Value for Money", ratings: [5, 3, 4, 3, 4] },
                  ]}
                />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Security Assessment Section */}
        <section id="assessment" className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge variant="outline" className="px-3 py-1 bg-primary/10 text-primary border-primary/20 mb-2">
                AI-Powered Assessment
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                Evaluate Your Security Posture
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Take our interactive security assessment to identify vulnerabilities and get personalized
                recommendations.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Why Take Our Assessment?</h3>
                  <p className="text-muted-foreground">
                    Our AI-powered security assessment tool analyzes your current security posture and provides
                    actionable recommendations based on industry best practices.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: <ShieldAlert className="h-5 w-5 text-primary" />,
                      title: "Identify Vulnerabilities",
                      description: "Discover security gaps in your current infrastructure before attackers do.",
                    },
                    {
                      icon: <BarChart3 className="h-5 w-5 text-primary" />,
                      title: "Benchmark Against Industry",
                      description: "See how your security measures compare to industry standards and competitors.",
                    },
                    {
                      icon: <FileSearch className="h-5 w-5 text-primary" />,
                      title: "Personalized Recommendations",
                      description: "Get tailored security recommendations based on your specific business needs.",
                    },
                    {
                      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
                      title: "Compliance Readiness",
                      description:
                        "Assess your readiness for security compliance requirements like GDPR, HIPAA, and more.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start p-4 rounded-lg bg-card border shadow-sm">
                      <div className="mt-0.5 bg-primary/10 p-2 rounded-full">{item.icon}</div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border rounded-xl shadow-xl overflow-hidden">
                <div className="p-6">
                  <SecurityAssessment />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Security Features */}
        <section className="py-20 md:py-28 bg-muted relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge variant="outline" className="px-3 py-1 bg-primary/10 text-primary border-primary/20 mb-2">
                Enterprise Grade
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                Comprehensive Security Features
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Our enterprise security features provide complete protection for your organization.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Laptop className="h-6 w-6 text-primary" />,
                  title: "Endpoint Protection",
                  description: "Advanced endpoint security inspired by CrowdStrike and SentinelOne technologies.",
                  features: ["Real-time threat detection", "Behavioral analysis", "Automated response"],
                },
                {
                  icon: <Globe className="h-6 w-6 text-primary" />,
                  title: "Network Security",
                  description: "Comprehensive network protection drawing from Check Point and Fortinet methodologies.",
                  features: ["Next-gen firewall", "Intrusion prevention", "Traffic analysis"],
                },
                {
                  icon: <Cloud className="h-6 w-6 text-primary" />,
                  title: "Cloud Security",
                  description: "Cloud-native security solutions inspired by Zscaler and Palo Alto Networks.",
                  features: ["CASB integration", "Workload protection", "Container security"],
                },
                {
                  icon: <Users className="h-6 w-6 text-primary" />,
                  title: "Identity & Access",
                  description: "Zero-trust identity management referencing Microsoft Security approaches.",
                  features: ["Multi-factor authentication", "Privileged access", "Continuous verification"],
                },
                {
                  icon: <Database className="h-6 w-6 text-primary" />,
                  title: "Data Protection",
                  description: "Comprehensive data security with encryption and access controls.",
                  features: ["Data loss prevention", "Encryption at rest/transit", "Data classification"],
                },
                {
                  icon: <Activity className="h-6 w-6 text-primary" />,
                  title: "AI-Driven Detection",
                  description: "Advanced threat detection using AI and machine learning algorithms.",
                  features: ["Anomaly detection", "Predictive analytics", "Automated threat hunting"],
                },
              ].map((feature, i) => (
                <Card
                  key={i}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                >
                  <CardHeader>
                    <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      {feature.icon}
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="#"
                      className="text-sm font-medium text-primary inline-flex items-center group-hover:underline"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                  Ready to Secure Your Business?
                </h2>
                <p className="max-w-[700px] md:text-xl">
                  Get in touch with our security experts for a free consultation and discover how we can protect your
                  organization.
                </p>
              </div>
              <div className="w-full max-w-md space-y-4 bg-background/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/10">
                <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background/80 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your Name"
                    name="name"
                    type="text"
                    required
                  />
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background/80 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your Email"
                    name="email"
                    type="email"
                    required
                  />
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background/80 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your Company"
                    name="company"
                    type="text"
                    required
                  />
                  <textarea
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background/80 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Message (Optional)"
                    name="message"
                  />
                  <Button className="w-full bg-background text-primary hover:bg-background/90 shadow-md">
                    Request Free Consultation
                  </Button>

                  {formStatus && (
                    <div
                      className={`p-3 rounded-md ${formStatus.success ? "bg-success/20 text-success" : "bg-destructive/20 text-destructive"}`}
                    >
                      {formStatus.message}
                    </div>
                  )}
                </form>
                <p className="text-xs text-primary-foreground/80">
                  We respect your privacy. Your information will never be shared with third parties.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 md:py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">Sorc3ry</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Providing comprehensive cybersecurity solutions to protect your business from evolving threats.
              </p>
              <div className="flex space-x-4">
                {[
                  {
                    name: "Twitter",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-3.3 4 1.5z"></path>
                      </svg>
                    ),
                  },
                  {
                    name: "LinkedIn",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    ),
                  },
                  {
                    name: "GitHub",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <Link key={item.name} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <span className="sr-only">{item.name}</span>
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Services</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {[
                  "Threat Protection",
                  "Vulnerability Assessment",
                  "Incident Response",
                  "Data Protection",
                  "Cloud Security",
                  "Security Training",
                ].map((item) => (
                  <Link key={item} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Company</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {["About Us", "Our Team", "Careers", "Blog", "Press", "Contact"].map((item) => (
                  <Link key={item} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Contact Us</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>123 Security Street</p>
                <p>Cyber City, CS 12345</p>
                <p>United States</p>
                <p className="pt-2 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  info@sorc3ry.com
                </p>
                <p className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  (123) 456-7890
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row py-8 items-center border-t mt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Sorc3ry. All rights reserved.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((item) => (
                <Link key={item} href="#" className="text-xs text-muted-foreground hover:underline underline-offset-4">
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

