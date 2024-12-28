/* eslint-disable @typescript-eslint/no-unused-vars */
// "use client"
// import { useRouter, useSearchParams } from 'next/navigation';
// import React, { useEffect } from 'react';

// const Bording = () => {



//   const query = useSearchParams();
//   const router = useRouter();
//   const token = query.get('authtoken');

//   useEffect(() => {
//     if (token) {
//       localStorage.setItem('bazzar_token', token);
//       router.push('/home'); // Navigate programmatically
//     }
//   }, []);

//   return (
//     <div>Loading...</div>
//   );
// };

// export default Bording;


"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';

const BordingComponent: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [queryParams, setQueryParams] = useState<Record<string, string>>({});

  useEffect(() => {
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    setQueryParams(params);

    const token = params.authtoken;
    if (token) {
      localStorage.setItem('bazzar_token', token);
      router.push('/home');
    }
  }, [searchParams, router]);

  return <div>Loading...</div>;
};

const BordingPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BordingComponent />
    </Suspense>
  );
};

export default BordingPage;
