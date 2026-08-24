export default function ContactInfo() {
  return (
    <div className="bg-primary h-full text-white p-6 border border-border-light space-y-6 rounded-xs font-quicksand">
      <div className="space-y-8">
        <h2 className="text-white font-bold border-b border-b-white pb-4 text-2xl text-center lg:text-start">
          Get In Touch With Us
        </h2>
        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="p-2.5 bg-white/10 rounded-xs shrink-0 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-white"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold">Address</h3>
            <p className="mt-1 text-sm text-white/90 leading-relaxed">
              3F-05, Ozone Center, Sector 12, Faridabad, 121007, Haryana, Delhi
              NCR
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="p-2.5 bg-white/10 rounded-xs shrink-0 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-white"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold">Phone</h3>
            <p className="mt-1 text-sm text-white/90">
              Mobile:{" "}
              <a href="tel:+919990533555" className="hover:underline">
                +91 99905 33555
              </a>
            </p>
          </div>
        </div>

        {/* Working Time */}
        <div className="flex items-start gap-4">
          <div className="p-2.5 bg-white/10 rounded-xs shrink-0 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-white"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold">Working Time</h3>
            <p className="mt-1 text-sm text-white/90 leading-relaxed">
              Monday–Friday: 9:00 – 22:00
              <br />
              Saturday–Sunday: 9:00 – 21:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
