import Image from 'next/image';
import { Send } from 'lucide-react';


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="min-h-[calc(100vh-3rem)] flex bg-white rounded-2xl overflow-hidden">
        
        {/* Left Side - Illustration */}
        <div className="hidden lg:flex lg:w-1/2 
          bg-gradient-to-br from-[#0f2942] via-[#1a3a52] to-[#0f2942] 
          items-center justify-center p-12 relative overflow-hidden rounded-2xl">

          {/* Decorative grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
              }}
            />
          </div>

          <div className="max-w-lg text-center relative z-10">
            {/* Illustration */}
            <div className="mb-12 relative">
              <div className="w-full max-w-sm mx-auto relative h-[400px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/invoice-machine.svg"
                    alt="Invoice Machine"
                    width={262}
                    height={357}
                    className="relative z-20"
                  />
                </div>

                {/* Amount Badges */}
                <div
                  className="text-[20px] absolute -top-1 -left-4 bg-[#F6F8FF]/70 px-4 py-2 rounded-lg text-[#01050D] font-semibold z-10"
                  style={{ filter: 'blur(1px)' }}
                >
                  ₦20,000,000.00
                </div>

                <div
                  className="text-[20px] absolute bottom-24 -left-1 bg-[#F6F8FF]/70 px-4 py-2 rounded-lg text-[#01050D] font-semibold z-10"
                  style={{ filter: 'blur(2px)' }}
                >
                  ₦20,000,000.00
                </div>

                <div className="absolute bottom-44 -right-7 z-30">
  <div className="relative bg-[#F6F8FF]/80 px-4 py-2 rounded-lg text-[#01050D] text-[20px] font-semibold shadow-md">
    ₦20,000,000.00

    {/* Custom SVG icon from Figma */}
    <Image
      src="/Send.svg"
      alt="send pointer"
      width={28}
      height={28}
      className="absolute right-7 -bottom-5"
    />
  </div>
</div>


              </div>
            </div>

            {/* Title */}
            <h2 className="text-[40px] text-white mb-4 font-semibold">
              Invoice Financing
            </h2>

            <p className="text-white text-[20px] leading-relaxed">
              Invoice financing made easy with fast and secured technology
            </p>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-10">
              <div className="w-10 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
              <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
<div className="w-full lg:w-1/2 flex items-center justify-center bg-white relative">
  {/* Logo */}
  <div className="absolute top-1 right-2">
    <Image
      src="/trx-logo.svg"
      alt="Logo"
      width={80}
      height={40}
    />
  </div>

  <div className="w-full max-w-md px-8 py-12 mt-10">
    {children}
  </div>
</div>

        </div>

      </div>
  );
}
