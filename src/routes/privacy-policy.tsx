import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ROAMO Pencils" },
      {
        name: "description",
        content:
          "Read the ROAMO Pencils Privacy Policy. Learn how we collect, use and protect your information when you visit our website or contact us for trade enquiries.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <nav className="legal-nav">
        <Link to="/" className="legal-nav-logo" aria-label="Back to ROAMO home">
          <img src="/roamo-logo.png" alt="ROAMO Pencils" width={140} height={50} />
        </Link>
        <Link to="/" className="legal-nav-back">
          ← Back to Home
        </Link>
      </nav>

      <main className="legal-main">
        <div className="legal-wrap">
          <header className="legal-header">
            <div className="legal-kicker">Legal</div>
            <h1>Privacy Policy</h1>
            <p className="legal-meta">Last updated: October 2026</p>
          </header>

          <div className="legal-body">
            <section className="legal-section">
              <h2>1. Who We Are</h2>
              <p>
                ROAMO Pencils ("ROAMO", "we", "us", "our") is a stationery brand based in Lucknow, India. We manufacture and supply pencils, erasers and stationery products to retailers, distributors, schools and bulk buyers across India.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, store and protect your personal information when you visit our website at roamopencils.com or contact us through any channel, including WhatsApp.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Information We Collect</h2>
              <p>We may collect the following types of information when you interact with our website or contact us directly:</p>
              <h3>Information you provide voluntarily</h3>
              <ul>
                <li>Your full name</li>
                <li>Phone number or mobile number</li>
                <li>Email address (if provided)</li>
                <li>Business name or trading name</li>
                <li>Nature of your enquiry (product interest, bulk requirement, distribution enquiry)</li>
                <li>Any message or details you include in your enquiry</li>
              </ul>
              <h3>Information collected automatically</h3>
              <ul>
                <li>Browser type and version</li>
                <li>Device type (desktop, mobile, tablet)</li>
                <li>Pages visited and time spent on the site</li>
                <li>Referring website or source</li>
                <li>IP address (used for analytics only, not stored individually)</li>
              </ul>
              <p>
                We do not use cookies for advertising purposes. Any analytics data collected is used solely to improve website performance and user experience.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul>
                <li>To respond to your product or trade enquiries</li>
                <li>To provide you with information about our products, availability and pricing</li>
                <li>To process bulk orders or distributor partnership requests</li>
                <li>To improve our website content and user experience</li>
                <li>To comply with legal obligations where required</li>
              </ul>
              <p>
                We do not use your information for automated decision-making or profiling. We do not sell, rent or share your personal information with third-party marketing companies.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. WhatsApp Communications</h2>
              <p>
                Our website uses WhatsApp as the primary channel for enquiries. When you click any "Enquire on WhatsApp" or "Get in Touch" button on our website, you are redirected to WhatsApp with a pre-filled message. This action is initiated entirely by you.
              </p>
              <p>
                Any conversation that takes place over WhatsApp is subject to WhatsApp's own Privacy Policy and Terms of Service. ROAMO does not store or retain WhatsApp conversation data on our servers. We use WhatsApp solely to respond to your enquiry in a timely, convenient manner.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfil the purpose for which it was collected, or as required by law. If you enquire about a product and no business relationship follows, we will not retain your contact details beyond a reasonable period.
              </p>
              <p>
                If you would like us to delete your information at any time, please contact us directly and we will action your request within a reasonable timeframe.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Data Security</h2>
              <p>
                We take reasonable precautions to protect your personal information from unauthorised access, disclosure, alteration or destruction. Our website is served over HTTPS, which encrypts data in transit between your browser and our servers.
              </p>
              <p>
                However, no method of transmission over the internet or electronic storage is completely secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Sharing Your Information</h2>
              <p>We do not sell or trade your personal information. We may share your information only in the following limited circumstances:</p>
              <ul>
                <li>With our internal team members who need the information to respond to your enquiry</li>
                <li>With trusted service providers who assist us in operating our website (such as hosting providers), provided they agree to keep your information confidential</li>
                <li>When required by law, court order or government authority</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party platforms including WhatsApp and social media platforms. We are not responsible for the privacy practices or content of those third-party sites. We encourage you to read their respective privacy policies before providing any personal information.
              </p>
            </section>

            <section className="legal-section">
              <h2>9. Children's Privacy</h2>
              <p>
                Our website and services are intended for business and trade enquiries and are not directed at children under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected information from a child, we will delete it promptly.
              </p>
            </section>

            <section className="legal-section">
              <h2>10. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of any inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Withdraw consent to our use of your information at any time</li>
                <li>Lodge a complaint with a relevant data protection authority</li>
              </ul>
              <p>To exercise any of these rights, please contact us using the details below.</p>
            </section>

            <section className="legal-section">
              <h2>11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. We will update the "Last updated" date at the top of this page whenever we make changes. We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="legal-section">
              <h2>12. Contact Us</h2>
              <p>If you have any questions, concerns or requests regarding this Privacy Policy, please contact us:</p>
              <div className="legal-contact">
                <p><strong>ROAMO Pencils</strong></p>
                <p>Lucknow, Uttar Pradesh, India</p>
                <p>Phone: <a href="tel:+918355015584">+91 8355015584</a></p>
                <p>Email: <a href="mailto:support@roamopencils.com">support@roamopencils.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="legal-footer">
        <div className="legal-wrap">
          <span>© 2026 ROAMO Pencils · Lucknow, India</span>
          <div className="legal-footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
