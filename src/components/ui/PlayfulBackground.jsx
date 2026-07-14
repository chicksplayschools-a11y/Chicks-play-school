import React from 'react';
import CanvasButterflies from './CanvasButterflies';

export default function PlayfulBackground() {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      <CanvasButterflies />
    </div>
  );
}
