"use client";

import React, { useState } from "react";
import Image from "next/image";
import PageBanner from "@/components/common/page-banner";

interface EnquiredProduct {
  id: string;
  name: string;
  date: string;
  status: "Pending" | "In Review" | "Quote Sent";
  image: string;
}

export default function MyAccountPage() {
  const [activeTab, setActiveTab] = useState<
    "profile" | "enquiries" | "password" | "wishlist" | "notifications"
  >("profile");

  const [userProfile] = useState({
    name: "Abhishek Sharma",
    email: "itsabhisheksharma01@gmail.com",
    phone: "+91-6377611XXX",
    address: "Patrakar Colony, Mansarovar, Jaipur",
    about:
      "My Name Is Abhishek Sharma And I Am A Resident Of Jaipur, Rajasthan",
    avatar:
      "https://framerusercontent.com/images/16l97Qq9LwD45bmJYfNnC7HCtLM.webp",
  });

  const [enquiries] = useState<EnquiredProduct[]>([
    {
      id: "ENQ-1001",
      name: "Lolito Luxury Big Sofa",
      date: "Jul 31, 2026",
      status: "In Review",
      image:
        "https://framerusercontent.com/images/HMqkXwNuVYOTAjKNrQvWJ6ZFIg.webp",
    },
    {
      id: "ENQ-1002",
      name: "Solis Marble Dining Table",
      date: "Jul 28, 2026",
      status: "Quote Sent",
      image: "https://framerusercontent.com/images/0Kfs9A2Cvwm44Nc7dTXsN9Y.jpg",
    },
  ]);

  return (
    <main className="min-h-screen font-quicksand bg-bg-main pb-24">
      <PageBanner title="My Account" breadcrumb="My Account" />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Sidebar Menu */}
            <aside className="lg:col-span-4 bg-bg-main border border-border-light rounded-xs p-8 shadow-xs space-y-8">
              {/* User Header */}
              <div className="flex items-center gap-4 pb-8 border-b border-border-light">
                <div className="relative h-16 w-16 rounded-full overflow-hidden border border-border-light shrink-0">
                  <Image
                    src={userProfile.avatar}
                    alt={userProfile.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-dark">
                    Hi, {userProfile.name.split(" ")[0]}
                  </h2>
                  <p className="text-base text-muted-light line-clamp-1">
                    {userProfile.email}
                  </p>
                </div>
              </div>

              {/* Navigation Options */}
              <nav className="space-y-2">
                {[
                  {
                    id: "profile",
                    label: "Profile",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-5 w-5"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    ),
                  },
                  {
                    id: "enquiries",
                    label: "Enquired Products",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-5 w-5"
                      >
                        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                        <path d="M12 11h4" />
                        <path d="M12 16h4" />
                        <path d="M8 11h.01" />
                        <path d="M8 16h.01" />
                      </svg>
                    ),
                  },
                  {
                    id: "password",
                    label: "Change Password",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-5 w-5"
                      >
                        <rect
                          width="18"
                          height="11"
                          x="3"
                          y="11"
                          rx="2"
                          ry="2"
                        />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    ),
                  },
                  {
                    id: "wishlist",
                    label: "Wishlist Items",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-5 w-5"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    ),
                  },
                  {
                    id: "notifications",
                    label: "Notifications",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-5 w-5"
                      >
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                      </svg>
                    ),
                  },
                ].map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveTab(item.id as any)}
                      className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xs text-base font-bold transition-colors cursor-pointer ${
                        isActive
                          ? "text-primary bg-bg-cream"
                          : "text-dark hover:text-primary hover:bg-bg-card"
                      }`}
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() => alert("Logged out successfully!")}
                  className="w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xs text-base font-bold text-pink hover:bg-bg-card transition-colors cursor-pointer pt-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" x2="9" y1="12" y2="12" />
                  </svg>
                  Log Out
                </button>
              </nav>
            </aside>

            {/* Right Main Content Card */}
            <div className="lg:col-span-8 bg-bg-main border border-border-light rounded-xs p-8 sm:p-12 shadow-xs">
              {/* Profile Tab */}
              {activeTab === "profile" && (
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-border-light mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-dark">
                      Basic Information
                    </h1>
                    <button
                      type="button"
                      className="text-base font-bold text-pink hover:underline uppercase tracking-wider cursor-pointer"
                    >
                      EDIT
                    </button>
                  </div>

                  <p className="text-base text-muted-light mb-10">
                    Make sure this information matches your Official Gov.
                    Authorized ID.
                  </p>

                  <div className="space-y-8">
                    {/* User Avatar */}
                    <div className="relative h-36 w-36 rounded-full overflow-hidden border-2 border-border-light">
                      <Image
                        src={userProfile.avatar}
                        alt={userProfile.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Name */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-dark">
                      {userProfile.name}
                    </h2>

                    {/* Contact Info List */}
                    <div className="space-y-4 text-base text-dark font-normal">
                      <div className="flex items-center gap-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-5 w-5 text-muted"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        <span>{userProfile.email}</span>
                      </div>

                      <div className="flex items-center gap-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-5 w-5 text-muted"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span>{userProfile.phone}</span>
                      </div>

                      <div className="flex items-center gap-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-5 w-5 text-muted"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>{userProfile.address}</span>
                      </div>
                    </div>

                    {/* About Me */}
                    <div className="pt-6 border-t border-border-light">
                      <h3 className="text-lg font-bold text-dark mb-2">
                        About Me
                      </h3>
                      <p className="text-base text-muted-light leading-relaxed">
                        {userProfile.about}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Enquiries Tab */}
              {activeTab === "enquiries" && (
                <div>
                  <h1 className="text-3xl font-bold text-dark pb-6 border-b border-border-light mb-8">
                    Your Enquired Products
                  </h1>
                  <div className="space-y-6">
                    {enquiries.map((enq) => (
                      <div
                        key={enq.id}
                        className="flex items-center gap-6 p-6 border border-border-light rounded-xs bg-bg-card"
                      >
                        <div className="relative h-20 w-20 shrink-0 rounded-xs overflow-hidden">
                          <Image
                            src={enq.image}
                            alt={enq.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-dark">
                            {enq.name}
                          </h3>
                          <p className="text-base text-muted mt-1">
                            ID: {enq.id} • {enq.date}
                          </p>
                        </div>
                        <span className="px-4 py-2 bg-bg-cream text-gold text-base font-bold rounded-xs border border-gold/30">
                          {enq.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Other Tabs Fallback */}
              {activeTab !== "profile" && activeTab !== "enquiries" && (
                <div className="text-center py-16">
                  <h2 className="text-2xl font-bold text-dark capitalize">
                    {activeTab}
                  </h2>
                  <p className="text-base text-muted mt-2">
                    Section details will be managed here.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
