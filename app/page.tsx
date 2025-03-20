import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, AlertTriangle, FileSearch, Server, Users, ArrowRight, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Sorc3ry</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#solutions" className="text-sm font-medium hover:text-primary">
              Solutions
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Log In
            </Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Secure Your Digital Future
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Comprehensive cybersecurity solutions to protect your business from evolving threats. Stay one step
                  ahead of cyber criminals.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg">Get Free Assessment</Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="inline-block h-8 w-8 rounded-full bg-gray-200 ring-2 ring-background" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Trusted by <span className="font-medium">2,000+</span> businesses
                  </p>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Cybersecurity Dashboard"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Comprehensive Security Solutions
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  We offer a full range of cybersecurity services to protect your organization from threats.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Threat Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Advanced threat detection and prevention to safeguard your systems from malware, ransomware, and
                    other cyber threats.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-sm font-medium text-primary inline-flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <FileSearch className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Vulnerability Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive scanning and assessment to identify and remediate security vulnerabilities in your
                    infrastructure.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-sm font-medium text-primary inline-flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Incident Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Rapid response to security incidents with expert containment, eradication, and recovery services.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-sm font-medium text-primary inline-flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Data Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Secure your sensitive data with encryption, access controls, and data loss prevention strategies.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-sm font-medium text-primary inline-flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Cloud Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Specialized security solutions for cloud environments, ensuring your cloud infrastructure remains
                    protected.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-sm font-medium text-primary inline-flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Security Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive security awareness training to educate your employees on best practices and threat
                    recognition.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-sm font-medium text-primary inline-flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Protecting Businesses Since 2010
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Sorc3ry is a leading cybersecurity firm with over a decade of experience protecting businesses of
                  all sizes from evolving cyber threats. Our team of certified security experts is dedicated to
                  providing cutting-edge solutions tailored to your specific needs.
                </p>
                <ul className="grid gap-2">
                  {[
                    "24/7 Security Monitoring",
                    "Certified Security Experts",
                    "Customized Security Solutions",
                    "Proactive Threat Hunting",
                    "Compliance Expertise",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button>Learn More About Us</Button>
                  <Button variant="outline">Meet Our Team</Button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Security Operations Center"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Our Solutions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Tailored Security for Every Industry
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  We understand that different industries face unique security challenges. Our solutions are customized
                  to meet your specific needs.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[
                {
                  title: "Healthcare",
                  description: "HIPAA-compliant security solutions to protect patient data and medical systems.",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Financial Services",
                  description:
                    "Robust security measures for financial institutions to safeguard sensitive transactions and customer data.",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "E-commerce",
                  description: "Protect customer information and ensure secure transactions for your online business.",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Manufacturing",
                  description:
                    "Secure industrial control systems and protect intellectual property from cyber threats.",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Government",
                  description:
                    "Specialized security solutions for government agencies to protect sensitive information.",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Education",
                  description:
                    "Comprehensive security for educational institutions to protect student data and research.",
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((item, i) => (
                <Card key={i} className="overflow-hidden border-none shadow-md">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href="#" className="text-sm font-medium text-primary inline-flex items-center">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* XSS Attack Prevention Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Security Insights
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Protecting Against XSS Attacks
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Cross-Site Scripting (XSS) attacks are a common threat where attackers inject malicious scripts into
                  webpages viewed by other users. These scripts can bypass the same-origin policy, allowing attackers to
                  steal sensitive data, hijack user sessions, deface websites, or spread malware. [^1]
                </p>
                <h3 className="text-xl font-bold mt-4">How We Protect You:</h3>
                <ul className="grid gap-2">
                  {[
                    "Input validation and sanitization to prevent malicious scripts",
                    "Content Security Policy (CSP) implementation",
                    "Regular security audits and penetration testing",
                    "Secure cookie configuration with HttpOnly and Secure flags",
                    "Employee security awareness training",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button>Get Protected Now</Button>
                  <Button variant="outline">Learn More About XSS</Button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Types of XSS Attacks We Prevent</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-bold">DOM-based XSS</h4>
                      <p className="text-sm text-muted-foreground">
                        Occurs when malicious payload is executed by modifying the DOM "on the fly" with client-side
                        JavaScript. [^1]
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold">Reflected XSS</h4>
                      <p className="text-sm text-muted-foreground">
                        Happens when a malicious script is reflected off a web server through search results or error
                        messages. [^1]
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold">Stored XSS</h4>
                      <p className="text-sm text-muted-foreground">
                        The most dangerous type where malicious script is injected directly into a website's storage.
                        [^1]
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Clients Say</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Don't just take our word for it. Here's what our clients have to say about our cybersecurity services.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[
                {
                  quote:
                    "Sorc3ry's proactive approach to security has prevented numerous potential breaches. Their team is responsive and knowledgeable.",
                  name: "Sarah Johnson",
                  title: "CTO, HealthTech Solutions",
                },
                {
                  quote:
                    "After experiencing a ransomware attack, we brought in Sorc3ry. Their incident response was exceptional, and their ongoing protection gives us peace of mind.",
                  name: "Michael Chen",
                  title: "IT Director, Global Finance Corp",
                },
                {
                  quote:
                    "The security awareness training provided by Sorc3ry has transformed our company culture. Our employees are now our first line of defense.",
                  name: "Emily Rodriguez",
                  title: "CISO, E-commerce Platform",
                },
                {
                  quote:
                    "Sorc3ry's vulnerability assessment identified critical security gaps that other vendors missed. Their remediation plan was clear and effective.",
                  name: "David Wilson",
                  title: "Security Manager, Manufacturing Inc.",
                },
                {
                  quote:
                    "As a small business, we didn't think we needed advanced security. Sorc3ry showed us affordable options that have protected us from multiple attacks.",
                  name: "Jennifer Lee",
                  title: "Owner, Retail Chain",
                },
                {
                  quote:
                    "The penetration testing conducted by Sorc3ry was thorough and professional. They helped us meet compliance requirements while actually improving security.",
                  name: "Robert Taylor",
                  title: "Compliance Officer, Government Agency",
                },
              ].map((item, i) => (
                <Card key={i} className="text-center border-none shadow-md">
                  <CardHeader>
                    <div className="mx-auto">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                        <span className="text-xl font-bold">{item.name.charAt(0)}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">"{item.quote}"</p>
                  </CardContent>
                  <CardFooter className="flex flex-col">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Penetration Testing Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto lg:mr-auto order-2 lg:order-1">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Penetration Testing"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Advanced Security
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Professional Penetration Testing
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Penetration testing is a crucial security practice that simulates attacks on your website to identify
                  security weaknesses. Our certified ethical hackers conduct thorough tests to find vulnerabilities
                  before real attackers do. [^2]
                </p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Our Penetration Testing Process:</h3>
                    <ol className="space-y-2 list-decimal pl-5">
                      <li>Initial reconnaissance and planning</li>
                      <li>Vulnerability scanning and identification</li>
                      <li>Exploitation attempts to verify vulnerabilities</li>
                      <li>Detailed reporting with remediation recommendations</li>
                      <li>Follow-up testing to verify fixes</li>
                    </ol>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Benefits:</h3>
                    <ul className="grid gap-2">
                      {[
                        "Identify security weaknesses before attackers",
                        "Meet compliance requirements",
                        "Validate existing security controls",
                        "Reduce the risk of data breaches",
                        "Protect your reputation and customer trust",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button>Schedule a Penetration Test</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Secure Your Business?
                </h2>
                <p className="max-w-[700px] md:text-xl">
                  Get in touch with our security experts for a free consultation and discover how we can protect your
                  organization.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="grid gap-4">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your Name"
                    type="text"
                  />
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your Email"
                    type="email"
                  />
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your Company"
                    type="text"
                  />
                  <Button className="w-full bg-background text-primary hover:bg-background/90">
                    Request Free Consultation
                  </Button>
                </form>
                <p className="text-xs">
                  We respect your privacy. Your information will never be shared with third parties.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
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
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">Twitter</span>
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
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">LinkedIn</span>
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
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">GitHub</span>
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
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Services</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Threat Protection
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Vulnerability Assessment
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Incident Response
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Data Protection
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Cloud Security
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Security Training
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Company</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Our Team
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Careers
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Press
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Contact Us</h3>
              <div className="text-sm text-muted-foreground">
                <p>123 Security Street</p>
                <p>Cyber City, CS 12345</p>
                <p>United States</p>
                <p className="pt-2">Email: info@sorc3ry.com</p>
                <p>Phone: (123) 456-7890</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row py-6 items-center border-t mt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Sorc3ry. All rights reserved.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link href="#" className="text-xs text-muted-foreground hover:underline underline-offset-4">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:underline underline-offset-4">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:underline underline-offset-4">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

