// SocialComponent.js
'use client'
import React, { useEffect, useState } from 'react';
import getSocialAll from "@/api/getSocial";

interface Social {
  id: bigint;
  name: string | null;
  url: string | null;
  img: string | null;
}

export default function SocialComponent() {
  const [social, setSocial] = useState<Social[]>([]);

  useEffect(() => {
    async function fetchSocial() {
      try {
        const socialData = await getSocialAll();
        setSocial(socialData);
      } catch (error) {
        console.error('Error fetching social data:', error);
      }
    }
    fetchSocial();
  }, []);

  return (
    <div>
      <h2>Réseau Social</h2>
      <div>
        {social.map((socialItem) => (
          <div key={socialItem.id} className="social-item">
            <h3>{socialItem.name}</h3>
            
          </div>
        ))}
      </div>
    </div>
  );
}
