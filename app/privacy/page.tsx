import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Privacy Policy | Laura Norman Real Estate",
  description: "Privacy policy for Laura Norman Real Estate services in Orlando, Florida."
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b border-slate-200/60 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Image 
                src="/images/logo.png" 
                alt="LN Real Estate Logo" 
                width={120} 
                height={120} 
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-serif font-bold text-primary tracking-tight">Laura Norman</span>
                <span className="text-xs text-slate-600 uppercase tracking-wider">Orlando, Florida</span>
              </div>
            </Link>
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Privacy Policy</h1>
            <p className="text-slate-600 mb-12">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

            <div className="prose prose-slate max-w-none space-y-8">
              <section className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Introduction</h2>
                <p className="text-slate-700 leading-relaxed">
                  Laura Norman Real Estate ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Information We Collect</h2>
                <h3 className="text-xl font-semibold text-primary mb-3">Personal Information</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc ml-6 text-slate-700 space-y-2">
                  <li>Request a home valuation</li>
                  <li>Sign up for buyer matching services</li>
                  <li>Contact us through our website</li>
                  <li>Subscribe to our newsletter or updates</li>
                </ul>
                <p className="text-slate-700 leading-relaxed mt-4">
                  This information may include: name, email address, phone number, property address, and any other information 
                  you choose to provide.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Automatically Collected Information</h3>
                <p className="text-slate-700 leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device, including 
                  information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
                </p>
              </section>

              <section className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">How We Use Your Information</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc ml-6 text-slate-700 space-y-2">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you home valuations, property matches, and market updates</li>
                  <li>Communicate with you about properties, services, and market insights</li>
                  <li>Improve our website and services</li>
                  <li>Understand and analyze how you use our website</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Disclosure of Your Information</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We may share your information in the following situations:
                </p>
                <ul className="list-disc ml-6 text-slate-700 space-y-2">
                  <li><strong>With Your Consent:</strong> We may disclose your personal information for any purpose with your consent.</li>
                  <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf (e.g., email delivery, database management).</li>
                  <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information where we are legally required to do so to comply with applicable law, governmental requests, or legal process.</li>
                </ul>
              </section>

              <section className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Data Security</h2>
                <p className="text-slate-700 leading-relaxed">
                  We use administrative, technical, and physical security measures to help protect your personal information. 
                  While we have taken reasonable steps to secure the personal information you provide to us, please be aware that 
                  despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be 
                  guaranteed against any interception or other type of misuse.
                </p>
              </section>

              <section className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Your Privacy Rights</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc ml-6 text-slate-700 space-y-2">
                  <li>The right to access and receive a copy of your personal information</li>
                  <li>The right to correct or update your personal information</li>
                  <li>The right to delete your personal information</li>
                  <li>The right to restrict or object to our processing of your personal information</li>
                  <li>The right to opt-out of marketing communications</li>
                </ul>
                <p className="text-slate-700 leading-relaxed mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </section>

              <section className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Third-Party Websites</h2>
                <p className="text-slate-700 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or 
                  content of these third-party sites. We encourage you to review the privacy policies of any third-party sites 
                  you visit.
                </p>
              </section>

              <section className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Children's Privacy</h2>
                <p className="text-slate-700 leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
                  information from children under 18. If you are a parent or guardian and believe your child has provided us 
                  with personal information, please contact us.
                </p>
              </section>

              <section className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Changes to This Privacy Policy</h2>
                <p className="text-slate-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                  Privacy Policy on this page and updating the "Last updated" date at the top of this policy.
                </p>
              </section>

              <section className="bg-white p-8 rounded-xl shadow-sm border-2 border-secondary">
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Contact Us</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact:
                </p>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <p className="text-slate-700 font-semibold mb-2">Laura Norman</p>
                  <p className="text-slate-700">Wemert Group Realty</p>
                  <p className="text-slate-700">Orlando, Florida</p>
                  <p className="text-slate-700 mt-3">Email: <a href="mailto:laura@lauranorman.me" className="text-secondary hover:underline">laura@lauranorman.me</a></p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <span className="text-2xl font-serif font-bold text-primary">Laura Norman</span>
          </div>
          <p className="text-slate-600 mb-1">Your Trusted Real Estate Partner in Orlando, Florida</p>
          <p className="text-sm text-slate-500 mb-4">Wemert Group Realty</p>
          <div className="flex justify-center gap-6 mb-4">
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
          <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} Laura Norman. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
