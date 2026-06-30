import { useState } from "react";
import { toast } from "sonner";
import { GitHubIcon } from "./icons";

// Public Web3Forms key. It only  delivers to the email
// it was registered to, and Vite inlines env vars into the bundle anyway.
const WEB3FORMS_ACCESS_KEY = "367321bc-36ca-4774-a1bd-a6814af56e19";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = new FormData(e.currentTarget);
    payload.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });
      const data = await response.json();

      if (response.ok && data.success) {
        toast.success(
          "Thanks! Your message has been sent — I'll get back to you soon.",
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      // Never swallow the failure silently — log for diagnosis and tell the user.
      console.error("Web3Forms submission failed:", error);
      toast.error(
        "Couldn't send your message. Please email me directly at harel@harelasaraf.com.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Available for select freelance opportunities
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Have an exciting project you need help with?
              <br />
              Send me an email or contact me via whatsapp!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:harel@harelasaraf.com"
                  className="rounded-sm bg-gradient-to-t from-blue-500/60 to-blue-500/60 bg-[length:100%_45%] bg-bottom bg-no-repeat px-1 text-white transition-[background-size] duration-300 ease-out motion-reduce:transition-none hover:bg-[length:100%_100%] focus-visible:bg-[length:100%_100%] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  harel@harelasaraf.com
                </a>
              </div>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://github.com/Legion345"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <GitHubIcon className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/harelasaraf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot: bots fill this hidden field; Web3Forms then drops the message. */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <button
                  type="button"
                  onClick={() =>
                    window.open(
                      "https://calendly.com/harel-harelasaraf/30min",
                      "_blank",
                    )
                  }
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Book a Call
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2026 Harel Asaraf. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
