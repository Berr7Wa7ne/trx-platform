'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff, Check } from 'lucide-react';
import { Input } from '@/app/components/Input';
import { Button } from '@/app/components/Button';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessName: '',
    businessCategory: '',
    email: '',
    phone: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Password validation checks
  const passwordChecks = {
    length: formData.password.length >= 8,
    hasNumberOrSymbol: /[0-9!@#$%^&*(),.?":{}|<>]/.test(formData.password),
    noPersonalInfo: !formData.email || 
      !formData.password.toLowerCase().includes(formData.email.split('@')[0]?.toLowerCase() || '')
  };

  const passwordStrength = Object.values(passwordChecks).filter(Boolean).length;
  const getStrengthText = () => {
    if (passwordStrength === 0) return 'Weak';
    if (passwordStrength === 1) return 'Weak';
    if (passwordStrength === 2) return 'Medium';
    return 'Strong';
  };

  const isFormValid = 
    formData.firstName && 
    formData.lastName && 
    formData.businessName && 
    formData.businessCategory && 
    formData.email && 
    formData.phone && 
    Object.values(passwordChecks).every(Boolean);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Logo */}
      <div className="flex justify-end mb-8">
        <div className="text-2xl font-bold">TRX</div>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-8">Create an account</h1>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
          {error}
        </div>
      )}

      <div className="space-y-5">
        {/* First Name & Last Name */}
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="First Name"
            type="text"
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            required
          />
          <Input
            label="Last Name"
            type="text"
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            required
          />
        </div>

        {/* Business Name */}
        <Input
          label="Registered Business Name"
          type="text"
          placeholder="Enter registered business Name"
          value={formData.businessName}
          onChange={(e) => setFormData({...formData, businessName: e.target.value})}
          required
        />

        {/* Business Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Business Category
          </label>
          <select
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-black"
            value={formData.businessCategory}
            onChange={(e) => setFormData({...formData, businessCategory: e.target.value})}
            required
          >
            <option value="">Enter last name</option>
            <option value="technology">Technology</option>
            <option value="retail">Retail</option>
            <option value="services">Services</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Email"
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          <Input
            label="Phone Number"
            type="tel"
            placeholder="Enter number"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent placeholder:text-gray-400 text-black"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Password Strength Indicator */}
          {formData.password && (
            <div className="mt-2 flex items-center gap-2">
              <span className="text-sm text-gray-600">Password Strength:</span>
              <span className={`text-sm font-medium ${
                passwordStrength <= 1 ? 'text-red-600' :
                passwordStrength === 2 ? 'text-yellow-600' :
                'text-green-600'
              }`}>
                {getStrengthText()}
              </span>
            </div>
          )}

          {/* Password Requirements */}
          <div className="mt-3 space-y-2">
            <PasswordCheck 
              checked={passwordChecks.noPersonalInfo} 
              text="Cannot contain your name or email address" 
            />
            <PasswordCheck 
              checked={passwordChecks.length} 
              text="At least 8 characters" 
            />
            <PasswordCheck 
              checked={passwordChecks.hasNumberOrSymbol} 
              text="Contains a number or symbol" 
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          disabled={!isFormValid || loading}
          loading={loading}
        >
          Create account
        </Button>

        {/* Login Link */}
        <p className="text-center text-sm text-[#B3B5BA]">
          Already Have An Account?{' '}
          <Link href="/login" className="text-[#00506F] font-medium hover:underline">
            Log In
          </Link>
        </p>

        {/* Terms */}
        <p className="text-xs text-center text-[#B3B5BA]">
          By signing up to create an account I accept company's{' '}
          <a href="#" className="text-[#00506F] hover:underline">
            Terms of use & Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}

function PasswordCheck({ checked, text }: { checked: boolean; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <Check 
        size={16} 
        className={checked ? 'text-green-600' : 'text-gray-400'} 
      />
      <span className={`text-sm ${checked ? 'text-gray-700' : 'text-gray-500'}`}>
        {text}
      </span>
    </div>
  );
}