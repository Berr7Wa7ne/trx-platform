"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type OnboardingStep = 1 | 2 | 3;

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<OnboardingStep>(1);
  const [formData, setFormData] = useState({
    role: "",
    interests: [] as string[],
    notifications: true,
  });

  const handleRoleSelect = (role: string) => {
    setFormData({ ...formData, role });
  };

  const handleInterestToggle = (interest: string) => {
    const interests = formData.interests.includes(interest)
      ? formData.interests.filter((i) => i !== interest)
      : [...formData.interests, interest];
    setFormData({ ...formData, interests });
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((currentStep + 1) as OnboardingStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as OnboardingStep);
    }
  };

  const handleFinish = () => {
    // Save onboarding data and redirect to dashboard
    router.push("/dashboard");
  };

  const roles = [
    { id: "developer", title: "Developer", description: "Build and ship products", icon: "💻" },
    { id: "designer", title: "Designer", description: "Create beautiful experiences", icon: "🎨" },
    { id: "manager", title: "Manager", description: "Lead and coordinate teams", icon: "👔" },
    { id: "entrepreneur", title: "Entrepreneur", description: "Launch your startup", icon: "🚀" },
  ];

  const interests = [
    { id: "crypto", label: "Cryptocurrency", icon: "₿" },
    { id: "blockchain", label: "Blockchain", icon: "⛓️" },
    { id: "defi", label: "DeFi", icon: "💰" },
    { id: "nft", label: "NFTs", icon: "🖼️" },
    { id: "trading", label: "Trading", icon: "📈" },
    { id: "analytics", label: "Analytics", icon: "📊" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Step {currentStep} of 3
            </span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {Math.round((currentStep / 3) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Step 1: Choose Role */}
          {currentStep === 1 && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  Welcome to TRX Platform! 👋
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Let&apos;s get started by learning about you
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  What best describes your role?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {roles.map((role) => (
                    <button
                      key={role.id}
                      onClick={() => handleRoleSelect(role.id)}
                      className={`p-6 rounded-xl border-2 transition-all duration-200 text-left ${
                        formData.role === role.id
                          ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                          : "border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700"
                      }`}
                    >
                      <div className="text-4xl mb-2">{role.icon}</div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {role.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {role.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Select Interests */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  What are you interested in? 🎯
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Select all that apply
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {interests.map((interest) => (
                  <button
                    key={interest.id}
                    onClick={() => handleInterestToggle(interest.id)}
                    className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                      formData.interests.includes(interest.id)
                        ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700"
                    }`}
                  >
                    <div className="text-3xl mb-2">{interest.icon}</div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {interest.label}
                    </h4>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Notifications */}
          {currentStep === 3 && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  Stay up to date 🔔
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Customize your notification preferences
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Email Notifications
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Receive updates about your transactions and activities
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={formData.notifications}
                      onChange={(e) =>
                        setFormData({ ...formData, notifications: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                  </label>
                </div>

                <div className="p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white">
                  <h4 className="text-xl font-bold mb-2">🎉 You&apos;re all set!</h4>
                  <p className="text-indigo-100">
                    Welcome to the TRX Platform community. Let&apos;s start your journey!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className="px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
            >
              Back
            </button>
            
            {currentStep < 3 ? (
              <button
                onClick={handleNext}
                disabled={currentStep === 1 && !formData.role}
                className="px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={handleFinish}
                className="px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition duration-150"
              >
                Get Started
              </button>
            )}
          </div>
        </div>

        {/* Skip Button */}
        <div className="text-center mt-6">
          <button
            onClick={handleFinish}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition duration-150"
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
}

