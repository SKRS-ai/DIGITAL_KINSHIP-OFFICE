// tailwind.config.ts
const config = {
  theme: {
    extend: {
      colors: {
        obsidian: '#0A0A0B', // Base Surface
        gold: {
          DEFAULT: '#C5B358', // Bureau Primary
          muted: '#857528',   // Secondary Accents
        },
        vellum: '#F4F1EA',    // Document Background
      },
      fontFamily: {
        bureau: ['var(--font-serif)', 'serif'],
        terminal: ['var(--font-mono)', 'monospace'],
      },
    },
  },
}
// src/components/ledger/CertificatePreview.tsx
import React from 'react';

interface CertificateProps {
  partnerA: string;
  partnerB: string;
  bondType: string;
  gkid?: string;
}

export const CertificatePreview = ({ partnerA, partnerB, bondType, gkid }: CertificateProps) => {
  return (
    <div className="relative w-full aspect-[1/1.414] bg-vellum border-[12px] border-gold p-8 shadow-2xl">
      {/* Bureau Seal Watermark */}
      <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none">
        <img src="/seals/lion-key-watermark.svg" className="w-1/2" />
      </div>

      <div className="text-center space-y-6">
        <h2 className="font-bureau text-2xl tracking-widest uppercase">Bond of Record</h2>
        <div className="h-px bg-gold/30 w-1/2 mx-auto" />
        
        <p className="font-bureau italic text-lg">This certifies a formal union between</p>
        <p className="font-bureau text-3xl font-bold uppercase">{partnerA || "__________"}</p>
        <p className="font-bureau italic text-lg">&</p>
        <p className="font-bureau text-3xl font-bold uppercase">{partnerB || "__________"}</p>
        
        <div className="mt-12">
          <p className="font-terminal text-xs tracking-tighter text-gold-muted">
            BUREAU CLASSIFICATION: {bondType}
          </p>
          <p className="font-terminal text-sm font-bold text-obsidian mt-2">
            GKID: {gkid || "PENDING VERIFICATION"}
          </p>
        </div>
      </div>
    </div>
  );
};