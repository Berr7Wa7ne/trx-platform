"use client";

import Link from "next/link";

export default function DashboardPage() {
  const stats = [
    { label: "Total Transactions", value: "1,234", change: "+12.5%", trend: "up" },
    { label: "Balance", value: "$45,678", change: "+8.2%", trend: "up" },
    { label: "Active Trades", value: "23", change: "-2.1%", trend: "down" },
    { label: "Portfolio Value", value: "$123,456", change: "+15.7%", trend: "up" },
  ];

  const recentTransactions = [
    { id: 1, type: "Deposit", amount: "+$1,000", date: "2024-12-08", status: "completed" },
    { id: 2, type: "Withdrawal", amount: "-$500", date: "2024-12-07", status: "completed" },
    { id: 3, type: "Transfer", amount: "-$250", date: "2024-12-06", status: "pending" },
    { id: 4, type: "Deposit", amount: "+$2,000", date: "2024-12-05", status: "completed" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                TRX Platform
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer">
                JD
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back! 👋
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Here&apos;s what&apos;s happening with your account today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    stat.trend === "up"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Recent Transactions */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Recent Transactions
            </h3>
            <Link
              href="#"
              className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
            >
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {transaction.type[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {transaction.type}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {transaction.date}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`font-semibold ${
                      transaction.amount.startsWith("+")
                        ? "text-green-600 dark:text-green-400"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {transaction.amount}
                  </p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      transaction.status === "completed"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <button className="p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg text-white hover:shadow-xl transform hover:-translate-y-1 transition-all">
            <div className="text-3xl mb-2">💸</div>
            <h4 className="text-lg font-semibold mb-1">Send Money</h4>
            <p className="text-sm text-indigo-100">Transfer funds instantly</p>
          </button>
          <button className="p-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg text-white hover:shadow-xl transform hover:-translate-y-1 transition-all">
            <div className="text-3xl mb-2">💳</div>
            <h4 className="text-lg font-semibold mb-1">Add Funds</h4>
            <p className="text-sm text-purple-100">Deposit to your wallet</p>
          </button>
          <button className="p-6 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl shadow-lg text-white hover:shadow-xl transform hover:-translate-y-1 transition-all">
            <div className="text-3xl mb-2">📊</div>
            <h4 className="text-lg font-semibold mb-1">Analytics</h4>
            <p className="text-sm text-pink-100">View detailed reports</p>
          </button>
        </div>
      </main>
    </div>
  );
}

