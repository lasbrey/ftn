'use client'
import React, { useEffect, useState } from "react";
import "/public/app/dist/app.css";
import "/public/app/dist/swiper-bundle.min.css";
import ProtectedRoute from "../../components/ProtectedRoute";
import Loader from "../../components/Loader";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return <ProtectedRoute>{loading ? <Loader /> : children}</ProtectedRoute>;
}
