import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — ROAMO Pencils" },
      {
        name: "description",
        content:
          "Read the ROAMO Pencils Terms and Conditions. Understand the rules governing use of our website and trade enquiry services.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Terms & Conditions — ROAMO Pencils" },
      { property: "og:description", content: "Read the ROAMO Pencils Terms and Conditions." },
      { property: "og:url", content: "https://roamopencils.com/terms-conditions" },
      { property: "og:image", content: "https://roamopencils.com/roamo-logo.png" },
      { name: "twitter:title", content: "Terms & Conditions — ROAMO Pencils" },
      { name: "twitter:description", content: "Read the ROAMO Pencils Terms and Conditions." },
      { name: "twitter:image", content: "https://roamopencils.com/roamo-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://roamopencils.com/terms-conditions" }],
  }),
  component: TermsConditions,
});

function TermsConditions() {
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
            <h1>Terms &amp; Conditions</h1>
            <p className="legal-meta">Last updated: October 2026</p>
          </header>

          <div className="legal-body">
            <section className="legal-section">
              <h2>1. Introduction</h2>
              <p>
                Welcome to ROAMO Pencils. These Terms and Conditions ("Terms") govern your use of our website located at roamopencils.com ("Website") and any interaction you have with us through the Website, including trade enquiries, product information requests and partnership discussions.
              </p>
              <p>
                By accessing or using our Website, you confirm that you have read, understood and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Website.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. About ROAMO Pencils</h2>
              <p>
                ROAMO Pencils is a stationery brand based in Lucknow, Uttar Pradesh, India. We design, manufacture and supply pencils, erasers and related stationery products for retail distribution, wholesale supply and institutional procurement across India.
              </p>
              <p>
                Our product ranges include BLAXO, BLUZO, Imperium Wood-Free Pencils and a range of colourful erasers and stationery essentials sold under the ROAMO brand identity.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Use of the Website</h2>
              <p>You agree to use our Website only for lawful purposes. Specifically, you agree not to:</p>
              <ul>
                <li>Use the Website in any way that violates applicable Indian or international laws or regulations</li>
                <li>Transmit any unsolicited or unauthorised advertising or promotional material</li>
                <li>Attempt to gain unauthorised access to any part of the Website or its underlying systems</li>
                <li>Interfere with or disrupt the integrity or performance of the Website</li>
                <li>Copy, reproduce, distribute or create derivative works from our Website content without our express written permission</li>
                <li>Use automated tools, bots or scrapers to extract data from the Website</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>4. Product Information and Availability</h2>
              <p>
                All product descriptions, images and specifications displayed on this Website are provided for informational purposes only. We make every effort to ensure accuracy, but we do not warrant that product descriptions or other content is error-free, complete or current.
              </p>
              <p>
                Product availability, pricing and specifications are subject to change without notice. All enquiries regarding current stock, pricing and minimum order quantities should be directed to our team through the WhatsApp enquiry links on the Website.
              </p>
              <p>
                Images on the Website are representative of our products. Actual product appearance may vary slightly due to manufacturing batches, photography conditions or display settings on your device.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Trade Enquiries and Orders</h2>
              <p>
                This Website is a marketing and enquiry platform. It does not constitute an offer to sell, and no binding contract is formed through the use of this Website alone.
              </p>
              <p>
                All trade enquiries submitted through our WhatsApp links or contact details are subject to review and confirmation by the ROAMO team. An order or supply agreement is only binding when confirmed in writing by an authorised representative of ROAMO Pencils.
              </p>
              <p>
                We reserve the right to accept or decline any enquiry or order at our sole discretion, including but not limited to situations where products are out of stock, minimum order quantities are not met, or the order falls outside our current supply territory.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Intellectual Property</h2>
              <p>
                All content on this Website, including but not limited to the ROAMO logo, product photographs, typography, design layouts, written copy and brand elements, is the intellectual property of ROAMO Pencils or its licensors.
              </p>
              <p>
                You may not reproduce, republish, distribute, display or transmit any content from this Website without prior written consent from ROAMO Pencils, except for personal, non-commercial reference purposes.
              </p>
              <p>
                The ROAMO name, BLAXO, BLUZO and Imperium product names and associated branding are trademarks or trade names of ROAMO Pencils. Nothing on this Website grants any licence to use these marks.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Third-Party Platforms</h2>
              <p>
                Our Website contains links to third-party platforms, primarily WhatsApp for enquiry purposes. These links are provided for your convenience only.
              </p>
              <p>
                ROAMO Pencils has no control over, and assumes no responsibility for, the content, privacy policies or practices of any third-party websites or services. We strongly advise you to review the Terms and Privacy Policy of any third-party platform you use.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Disclaimer of Warranties</h2>
              <p>
                This Website is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. To the fullest extent permitted by applicable law, ROAMO Pencils disclaims all warranties, including but not limited to:
              </p>
              <ul>
                <li>The Website will be uninterrupted, error-free or free from viruses</li>
                <li>The information on the Website is accurate, complete or current</li>
                <li>The Website will meet your specific requirements or expectations</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, ROAMO Pencils shall not be liable for any indirect, incidental, special, consequential or punitive damages arising from your use of, or inability to use, this Website or our products and services, even if we have been advised of the possibility of such damages.
              </p>
              <p>
                Our total liability to you for any claim arising out of your use of this Website shall not exceed the value of any specific transaction you have entered into with us, or INR 1,000, whichever is lower.
              </p>
            </section>

            <section className="legal-section">
              <h2>10. Indemnification</h2>
              <p>
                You agree to indemnify, defend and hold harmless ROAMO Pencils, its directors, employees and agents from and against any claims, liabilities, damages, losses and expenses, including legal fees, arising out of your use of the Website, your violation of these Terms, or your violation of any third-party rights.
              </p>
            </section>

            <section className="legal-section">
              <h2>11. Governing Law and Jurisdiction</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of India. Any dispute arising from these Terms or your use of the Website shall be subject to the exclusive jurisdiction of the courts of Lucknow, Uttar Pradesh, India.
              </p>
            </section>

            <section className="legal-section">
              <h2>12. Changes to These Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Website. Your continued use of the Website after any changes constitutes your acceptance of the revised Terms. We recommend reviewing this page periodically.
              </p>
            </section>

            <section className="legal-section">
              <h2>13. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid under applicable law, that provision shall be modified to the minimum extent necessary to make it enforceable, and the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            <section className="legal-section">
              <h2>14. Contact Us</h2>
              <p>If you have any questions about these Terms and Conditions, please contact us:</p>
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
