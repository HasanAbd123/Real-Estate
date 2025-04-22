import React from "react";
import { useEffect, useState } from "react";
function InstallPWAButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        console.log("تم تثبيت التطبيق");
      } else {
        console.log("تم رفض التثبيت");
      }
      setDeferredPrompt(null);
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div>
      <button onClick={handleInstallClick} className="bbb">
        تثبيت التطبيق
      </button>
    </div>
  );
}

export default InstallPWAButton;
