import { useState, useEffect } from "react";
import "./instalpwa.scss";

function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        console.log("✅ تم تثبيت التطبيق");
      } else {
        console.log("❌ تم رفض التثبيت");
      }
      setDeferredPrompt(null);
    } else {
      alert(
        "🚫 لا يمكن تثبيت التطبيق. قد يكون مثبّتًا مسبقًا أو أن المتصفح لا يدعم التثبيت."
      );
    }
  };

  return (
    <div>
      <button onClick={handleInstallClick} className="bb">
        Install App
      </button>
    </div>
  );
}

export default InstallButton;

/*
import { useState, useEffect } from "react";
import "./instalpwa.scss";
function InstallButton() {
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
      <button onClick={handleInstallClick} className="bb">
        تثبيت التطبيق
      </button>
    </div>
  );
}

export default InstallButton;*/
