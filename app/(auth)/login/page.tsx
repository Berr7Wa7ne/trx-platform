// app/(auth)/login/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Input } from '@/app/components/Input';
import { Button } from '@/app/components/Button';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
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

  const isFormValid = formData.email && formData.password;

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome Back</h1>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
          {error}
        </div>
      )}

      <div className="space-y-4">
        {/* Email - Using Input component */}
        <Input
          label="Email"
          type="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />

        {/* Password - Now also using Input component with password toggle */}
        <div>
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            showPasswordToggle={true}
            required
          />

          {/* Password Strength Indicator */}

          {/* Password Requirements */}
          <div className="mt-3 space-y-2">
            <PasswordCheck
              checked={passwordStrength >= 2} 
              text={`Password Strength : ${getStrengthText()}`}
            />
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

        {/* Submit Button - Using Button component */}
        <div className="pt-2">
          <Button
            onClick={handleSubmit}
            disabled={!isFormValid || loading}
            loading={loading}
            className="bg-[#0B5D7C] hover:bg-[#094a63] text-[16px]"
          >
            Login
          </Button>
        </div>

        {/* Signup Link */}
        <p className="text-center text-sm text-[#B3B5BA] pt-2">
          Don't have an account?{' '}
          <Link href="/signup" className="text-[#00506F] font-medium hover:underline">
            Register
          </Link>
        </p>

        {/* Terms */}
        {/* <p className="text-xs text-center text-[#B3B5BA] pt-2">
          By signing up to create an account I accept Company's{' '} <br />
          <Link href="/terms" className="text-[#00506F] hover:underline">
            Terms of use & Privacy Policy
          </Link>
          .
        </p> */}
      </div>
    </div>
  );
}

function PasswordCheck({ checked, text }: { checked: boolean; text: string }) {
  return (
    <div className="flex items-start gap-2">
      <Check 
        size={16} 
        className={`mt-0.5 flex-shrink-0 ${checked ? 'text-green-600' : 'text-gray-400'}`} 
      />
      <span className={`text-xs leading-relaxed ${checked ? 'text-gray-700' : 'text-gray-500'}`}>
        {text}
      </span>
    </div>
  );
}