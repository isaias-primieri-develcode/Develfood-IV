import React, { useEffect, useState } from 'react';

import { Splash } from '../splash';
import { Routes } from './index';

export function AppRoutes() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])
  return loading ? <Splash /> : <Routes />
}
