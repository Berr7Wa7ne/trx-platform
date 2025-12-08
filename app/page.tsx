import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
      <main className="max-w-5xl w-full">
        <div className="text-center space-y-8">
          {/* Logo/Brand */}
          <div className="space-y-4">
            <div className="inline-block p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shadow-2xl">
              <svg
                className="w-20 h-20 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white">
              TRX Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Your gateway to seamless transactions and innovative blockchain solutions
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Fast Transactions
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Lightning-fast processing for all your needs
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Secure & Safe
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Bank-level security for your peace of mind
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Premium Features
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Advanced tools for power users
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              href="/signup"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-200"
            >
              Get Started Free
            </Link>
            <Link
              href="/login"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-indigo-300 dark:hover:border-indigo-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-200"
            >
              Sign In
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                10K+
              </div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1">
                Active Users
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400">
                $5M+
              </div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1">
                Transactions
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400">
                99.9%
              </div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1">
                Uptime
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
