import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Rolando Remolacio',
  description: 'Privacy Policy for Rolando Remolacio\'s portfolio website',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Last updated: November 18, 2025
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Welcome to my portfolio website. I am committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how I collect, use, disclose, and safeguard your information when you visit my website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              2. Information I Collect
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              2.1 Personal Information
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              When you contact me through my contact form, I collect:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number (if provided)</li>
              <li>Message content</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              2.2 Automatically Collected Information
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              When you visit my website, I automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Device identifiers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              3. How I Use Your Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I use the information I collect to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Respond to your inquiries and communicate with you</li>
              <li>Improve my website and user experience</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Comply with legal obligations</li>
              <li>Send relevant updates about my services (with your consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device that help me:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Remember your preferences (such as theme settings)</li>
              <li>Understand how you interact with my website</li>
              <li>Improve website functionality</li>
              <li>Provide analytics and measure website performance</li>
              <li>Display personalized advertisements through Google AdSense</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
              4.1 Google AdSense and Advertising Cookies
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              This website uses Google AdSense to display advertisements. Google AdSense uses cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Show ads based on your interests and previous visits to this and other websites</li>
              <li>Measure ad effectiveness and engagement</li>
              <li>Prevent the same ads from showing too frequently</li>
              <li>Track your browsing behavior across different websites for personalized advertising</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Google may use information about your visits to this website and other websites to provide advertisements about goods and services that may interest you. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to this site and/or other sites on the Internet.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong>You can opt out of personalized advertising by:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Visiting Google's <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Ads Settings</a> page</li>
              <li>Using the <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Digital Advertising Alliance's opt-out tool</a></li>
              <li>Installing browser extensions that block tracking cookies</li>
              <li>Adjusting your browser settings to block third-party cookies</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
              4.2 Managing Your Cookie Preferences
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              You can control and manage cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block all cookies</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Please note that blocking or deleting cookies may affect your experience on this website and limit certain functionality. For more information about cookies and how to manage them, visit <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">www.allaboutcookies.org</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              5. Third-Party Services and Data Sharing
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I use the following third-party services that may collect, process, and store information about your visit:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
              5.1 Google AdSense
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong>Purpose:</strong> Displaying personalized advertisements
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong>Data Collected:</strong> IP address, cookie identifiers, device information, browsing behavior, ad interaction data, approximate geographic location
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong>Data Retention:</strong> Google may retain this data for up to 26 months, depending on your settings and applicable laws
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Google Privacy Policy</a>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
              5.2 Vercel Analytics
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong>Purpose:</strong> Website analytics and performance monitoring
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong>Data Collected:</strong> Page views, referrer URLs, device type, browser information, geographic location (country/city level), session duration
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong>Data Retention:</strong> Analytics data is retained for 12 months
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong>Privacy Policy:</strong> <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Vercel Privacy Policy</a>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
              5.3 Web3Forms
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong>Purpose:</strong> Processing contact form submissions
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong>Data Collected:</strong> Name, email address, phone number (if provided), message content, submission timestamp
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong>Data Retention:</strong> Form submissions are retained indefinitely unless deletion is requested
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong>Privacy Policy:</strong> <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Web3Forms Privacy Policy</a>
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-6">
              <strong>Important:</strong> These third-party services operate independently and have their own privacy policies. I do not have control over the data collected by these services once it leaves my website. I encourage you to review their respective privacy policies to understand how they handle your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              6. Data Security
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and I cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              7. Data Retention
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. Here are the specific retention periods:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Contact Form Submissions:</strong> Retained for 24 months from the date of submission to respond to inquiries and maintain communication records</li>
              <li><strong>Analytics Data:</strong> Website analytics data is retained for 12 months</li>
              <li><strong>Advertising Cookies:</strong> Google AdSense cookies may be retained for up to 26 months as per Google's policy</li>
              <li><strong>Log Files:</strong> Server logs and error logs are retained for 90 days for security and troubleshooting purposes</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              After these retention periods, data is either automatically deleted or anonymized. You may request earlier deletion of your data by contacting me directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              8. Your Rights and Choices
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to processing of your information</li>
              <li><strong>Data Portability:</strong> Request transfer of your information</li>
              <li><strong>Withdraw Consent:</strong> Withdraw previously given consent at any time</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
              8.1 Opting Out of Personalized Advertising
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              You have the right to opt out of personalized advertising. Here's how:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Google Ads Settings:</strong> Visit <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Google Ads Settings</a> to control personalized ads</li>
              <li><strong>Browser Settings:</strong> Configure your browser to block third-party cookies</li>
              <li><strong>Do Not Track:</strong> Enable "Do Not Track" in your browser (though not all services honor this)</li>
              <li><strong>Industry Opt-Out:</strong> Use opt-out tools from <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Digital Advertising Alliance</a> or <a href="http://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Network Advertising Initiative</a></li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Note: Opting out of personalized advertising does not mean you will stop seeing ads. You will still see ads, but they will be less relevant to your interests.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
              8.2 Exercising Your Rights
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              To exercise any of these rights, please contact me using the information provided in Section 12. I will respond to your request within 30 days. Please note that I may need to verify your identity before processing certain requests.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              9. Children's Privacy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              My website is not intended for children under the age of 13. I do not knowingly collect personal information from children. If you believe I have collected information from a child, please contact me immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              10. International Data Transfers
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using my website, you consent to such transfers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I may update this Privacy Policy from time to time to reflect changes in my practices, technology, legal requirements, or other factors. The updated version will be indicated by an updated "Last updated" date at the top of this page.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong>How I'll Notify You:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>For minor changes: The updated date will be changed at the top of this policy</li>
              <li>For significant changes: I may display a notice on the website homepage or send an email notification (if you've provided your email)</li>
              <li>Material changes that affect your rights will be prominently announced</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I encourage you to review this Privacy Policy periodically to stay informed about how I protect your information. Your continued use of the website after any changes indicates your acceptance of the updated Privacy Policy.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
              Recent Updates Log
            </h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>November 18, 2025:</strong> Added detailed information about Google AdSense cookies, data retention periods, and opt-out options for personalized advertising</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              12. Contact Me
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or my data practices, please contact me:
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Email:</strong> rolandojrremolacio@gmail.com</li>
                <li><strong>Phone:</strong> +639625871454</li>
                <li><strong>Location:</strong> San Pedro, Laguna, Philippines</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              13. Your Consent and Cookie Preferences
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              By using my website, you consent to this Privacy Policy and agree to its terms. Specifically:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>You consent to the collection and processing of your data as described in this policy</li>
              <li>You acknowledge that third-party services like Google AdSense may use cookies to display personalized ads</li>
              <li>You understand that you can withdraw your consent at any time by adjusting your browser settings or using the opt-out tools provided</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong>Managing Your Consent:</strong> You can manage your cookie preferences and withdraw consent at any time through:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Your browser's cookie settings</li>
              <li>Google's <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Ad Settings page</a></li>
              <li>Industry opt-out platforms mentioned in Section 8</li>
              <li>Contacting me directly to request data deletion</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              If you do not agree with this Privacy Policy, please discontinue use of this website.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
