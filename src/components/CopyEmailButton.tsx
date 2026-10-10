import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { FaCopy, FaCheck } from 'react-icons/fa';

interface CopyEmailButtonProps {
  email?: string;
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md';
}

const CopyEmailButton: React.FC<CopyEmailButtonProps> = ({
  email = 'omarns21@gmail.com',
  className = '',
  showLabel = true,
  size = 'md',
}) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = async (text: string) => {
    let success = false;
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        success = true;
      } catch {
        success = false;
      }
    }

    if (!success) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        success = document.execCommand('copy');
      } catch {
        success = false;
      } finally {
        textArea.remove();
      }
    }

    if (success) {
      setCopied(true);
      setShowToast(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    copyToClipboard(email);
  };

  const sizeClasses = size === 'sm'
    ? 'px-2.5 py-1 text-xs gap-1.5'
    : 'px-3.5 py-2 text-sm gap-2';

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`${t('common.copyEmail')} (${email})`}
        className={`inline-flex items-center justify-center font-bold rounded-lg transition-all duration-200 cursor-pointer shadow-xs focus:outline-none focus:ring-2 focus:ring-sky-500 active:scale-95 ${
          copied
            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
            : 'bg-sky-50 text-sky-700 hover:bg-sky-100 hover:text-sky-800 border border-sky-200/80'
        } ${sizeClasses} ${className}`}
      >
        {copied ? (
          <>
            <FaCheck className="w-3.5 h-3.5 text-white animate-scale-in" />
            {showLabel && <span>{t('common.copied')}</span>}
          </>
        ) : (
          <>
            <FaCopy className="w-3.5 h-3.5 text-sky-600" />
            {showLabel && <span>{t('common.copyEmail')}</span>}
          </>
        )}
      </button>

      {/* Floating Toast Notification */}
      {showToast &&
        createPortal(
          <div
            role="status"
            aria-live="polite"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900/95 text-white border border-slate-700 shadow-2xl backdrop-blur-md px-5 py-3.5 rounded-xl transition-all duration-300 animate-slide-up"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <FaCheck className="w-3 h-3" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-100">
                {t('common.toastEmailCopied')}
              </p>
              <p className="text-xs text-slate-400 font-mono mt-0.5">{email}</p>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default CopyEmailButton;
