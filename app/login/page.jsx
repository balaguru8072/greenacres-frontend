"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { withRandomPath } from "@/lib/randomPath";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectPath = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // ✅ formData illa, { email, password } anuppanum
      const res = await axios.post(
        `${BASE_URL}/api/users/login`,
        { email, password }, // ✅ Idhu correct
        {
          withCredentials: true, // ✅ Cookie save panna must
        }
      );

      // ❌ localStorage la token store panna koodadhu
      // Cookie la dhaan token irukku

      alert("Login successful");
      router.push(redirectPath); // ✅ redirectPath use pannu
    } catch (error) {
      console.log("Login error:", error.response?.data);
      alert(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white p-6 rounded-2xl shadow"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="text-right mb-4">
          <Link
            href={withRandomPath("/forgot-password")}
            className="text-sm text-purple-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 text-white p-3 rounded-lg disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center mt-5 text-sm">
          Don&apos;t have an account?{" "}
          <Link
            href={withRandomPath("/register")}
            className="text-purple-600 font-semibold"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
