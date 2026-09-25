import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'horizontal' | 'mark';
  theme?: 'light' | 'dark';
  showSubtitle?: boolean;
}

/**
 * Official Brand Logo Component for S & L Financial Associates
 * Exactly preserves the official brand logo from the reference artwork:
 * - Blue 3D "S"
 * - Orange 3D "&"
 * - Blue 3D "L"
 * - Orange curved swoosh surrounding the S & L
 * - "Financial Associate" wording below
 * - Faint mirror floor reflection
 * - Original blue (#1055A8, #0C3C75, #257BF4) and orange (#F37920, #D95304, #FFAA45) colors
 */
export const OfficialLogoSvg: React.FC<{
  className?: string;
  withReflection?: boolean;
  withText?: boolean;
  aspect?: 'landscape' | 'mark';
}> = ({
  className = '',
  withReflection = true,
  withText = true,
  aspect = 'landscape',
}) => {
  // Unique IDs for SVG filters and gradients
  const idPrefix = 'slOfficial_';

  if (aspect === 'mark') {
    // Square or mark aspect ratio focused on the S & L + Swoosh
    return (
      <svg
        viewBox="140 30 710 470"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${className}`}
      >
        <defs>
          {/* Blue 3D Extrusion Gradient */}
          <linearGradient id={`${idPrefix}blueDepth`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B2B52" />
            <stop offset="50%" stopColor="#071E3A" />
            <stop offset="100%" stopColor="#041224" />
          </linearGradient>

          {/* Blue Metallic Face Gradient */}
          <linearGradient id={`${idPrefix}blueFace`} x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#3B8BF2" />
            <stop offset="25%" stopColor="#1E6FD6" />
            <stop offset="60%" stopColor="#1052A3" />
            <stop offset="85%" stopColor="#0C3E7C" />
            <stop offset="100%" stopColor="#155BB0" />
          </linearGradient>

          {/* Blue Bevel Highlight */}
          <linearGradient id={`${idPrefix}blueBevel`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#9BC5F8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0D3B73" stopOpacity="0.2" />
          </linearGradient>

          {/* Orange 3D Extrusion Gradient */}
          <linearGradient id={`${idPrefix}orangeDepth`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A33D02" />
            <stop offset="50%" stopColor="#752B00" />
            <stop offset="100%" stopColor="#4A1C00" />
          </linearGradient>

          {/* Orange Metallic Face Gradient */}
          <linearGradient id={`${idPrefix}orangeFace`} x1="15%" y1="0%" x2="85%" y2="100%">
            <stop offset="0%" stopColor="#FFA64D" />
            <stop offset="30%" stopColor="#F57C18" />
            <stop offset="65%" stopColor="#DE5C04" />
            <stop offset="90%" stopColor="#BD4A00" />
            <stop offset="100%" stopColor="#F57C18" />
          </linearGradient>

          {/* Orange Curved Swoosh Gradient */}
          <linearGradient id={`${idPrefix}swooshGrad`} x1="0%" y1="90%" x2="95%" y2="10%">
            <stop offset="0%" stopColor="#C94D02" />
            <stop offset="25%" stopColor="#F57A18" />
            <stop offset="50%" stopColor="#FFAA47" />
            <stop offset="75%" stopColor="#F57816" />
            <stop offset="100%" stopColor="#D95304" />
          </linearGradient>

          {/* Specular Highlight Rim */}
          <linearGradient id={`${idPrefix}specularRim`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.1" />
            <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#FFE0B2" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
          </linearGradient>

          {/* Soft Ground Shadow Filter */}
          <filter id={`${idPrefix}softShadow`} x="-15%" y="-15%" width="130%" height="135%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#061A33" floodOpacity="0.18" />
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#061A33" floodOpacity="0.12" />
          </filter>
        </defs>

        <g filter={`url(#${idPrefix}softShadow)`}>
          {/* ORANGE CURVED SWOOSH */}
          {/* 3D Depth Layer */}
          <path
            d="M 172 522 C 160 380, 240 160, 480 58 C 660 0, 785 85, 846 160 C 730 80, 560 92, 400 196 C 285 272, 218 420, 192 526 Z"
            fill={`url(#${idPrefix}orangeDepth)`}
            transform="translate(2, 4)"
          />
          {/* Main Swoosh Face */}
          <path
            d="M 170 520 C 158 378, 238 158, 478 56 C 658 -2, 783 83, 844 158 C 728 78, 558 90, 398 194 C 283 270, 216 418, 190 524 Z"
            fill={`url(#${idPrefix}swooshGrad)`}
          />
          {/* Swoosh Specular Bevel Highlight */}
          <path
            d="M 170 520 C 158 378, 238 158, 478 56 C 658 -2, 783 83, 844 158"
            stroke={`url(#${idPrefix}specularRim)`}
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* BLUE 3D "S" */}
          {/* 3D Extrusion Shadow & Depth */}
          <g transform="translate(6, 7)">
            <path
              d="M 235 220 H 380 V 270 H 318 C 318 290, 360 295, 388 322 C 408 342, 408 395, 385 430 C 355 470, 260 472, 225 435 L 258 392 C 280 415, 335 422, 350 398 C 358 382, 350 366, 328 354 C 280 328, 245 320, 230 285 C 220 258, 222 220, 235 220 Z"
              fill={`url(#${idPrefix}blueDepth)`}
            />
          </g>
          {/* Front Face S */}
          <path
            d="M 235 220 H 380 V 270 H 318 C 318 290, 360 295, 388 322 C 408 342, 408 395, 385 430 C 355 470, 260 472, 225 435 L 258 392 C 280 415, 335 422, 350 398 C 358 382, 350 366, 328 354 C 280 328, 245 320, 230 285 C 220 258, 222 220, 235 220 Z"
            fill={`url(#${idPrefix}blueFace)`}
          />
          {/* Top Slab Serif Detail for S */}
          <rect x="235" y="220" width="145" height="15" fill="#5AA3FA" opacity="0.7" />
          <rect x="235" y="220" width="145" height="50" fill="none" stroke="#2068C4" strokeWidth="2" />
          {/* Horizontal Waist Split Groove */}
          <line x1="240" y1="335" x2="385" y2="335" stroke="#08254A" strokeWidth="2.5" />
          <line x1="240" y1="337" x2="385" y2="337" stroke="#7CB9FC" strokeWidth="1.5" opacity="0.8" />
          {/* Specular Highlight Rim */}
          <path
            d="M 235 220 H 380 V 235 M 235 220 V 285"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* ORANGE 3D "&" */}
          {/* 3D Depth Layer */}
          <g transform="translate(4, 5)">
            <path
              d="M 502 268 C 475 268, 458 288, 458 312 C 458 335, 474 350, 495 365 L 452 422 C 445 415, 440 405, 440 392 H 418 C 418 418, 432 438, 452 452 C 472 466, 502 468, 528 450 C 552 432, 558 405, 545 382 C 535 365, 518 352, 502 340 L 522 312 C 532 300, 532 288, 524 278 C 518 271, 510 268, 502 268 Z M 498 290 C 504 290, 508 295, 508 302 C 508 310, 502 318, 494 328 L 482 315 C 482 300, 490 290, 498 290 Z M 482 388 C 496 398, 518 412, 518 426 C 518 438, 504 445, 492 442 C 476 438, 468 422, 475 408 L 482 388 Z"
              fill={`url(#${idPrefix}orangeDepth)`}
            />
          </g>
          {/* Front Face & */}
          <path
            d="M 502 268 C 475 268, 458 288, 458 312 C 458 335, 474 350, 495 365 L 452 422 C 445 415, 440 405, 440 392 H 418 C 418 418, 432 438, 452 452 C 472 466, 502 468, 528 450 C 552 432, 558 405, 545 382 C 535 365, 518 352, 502 340 L 522 312 C 532 300, 532 288, 524 278 C 518 271, 510 268, 502 268 Z M 498 290 C 504 290, 508 295, 508 302 C 508 310, 502 318, 494 328 L 482 315 C 482 300, 490 290, 498 290 Z M 482 388 C 496 398, 518 412, 518 426 C 518 438, 504 445, 492 442 C 476 438, 468 422, 475 408 L 482 388 Z"
            fill={`url(#${idPrefix}orangeFace)`}
          />
          {/* Specular highlights on ampersand */}
          <path
            d="M 502 268 C 475 268, 458 288, 458 312"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* BLUE 3D "L" */}
          {/* 3D Depth Layer */}
          <g transform="translate(6, 7)">
            <path
              d="M 598 220 H 702 V 268 H 662 V 395 H 772 V 425 H 785 V 465 H 598 V 425 H 618 V 268 H 598 V 220 Z"
              fill={`url(#${idPrefix}blueDepth)`}
            />
          </g>
          {/* Front Face L */}
          <path
            d="M 598 220 H 702 V 268 H 662 V 395 H 772 V 425 H 785 V 465 H 598 V 425 H 618 V 268 H 598 V 220 Z"
            fill={`url(#${idPrefix}blueFace)`}
          />
          {/* Top Slab Highlight */}
          <rect x="598" y="220" width="104" height="15" fill="#5AA3FA" opacity="0.7" />
          {/* Foot Slab Highlight */}
          <rect x="598" y="425" width="187" height="15" fill="#5AA3FA" opacity="0.5" />
          {/* Stem horizontal groove line */}
          <line x1="618" y1="335" x2="662" y2="335" stroke="#08254A" strokeWidth="2.5" />
          <line x1="618" y1="337" x2="662" y2="337" stroke="#7CB9FC" strokeWidth="1.5" opacity="0.8" />
          {/* Specular Highlight Rim */}
          <path
            d="M 598 220 H 702 M 598 220 V 268 M 662 395 H 772 V 425 H 785"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      </svg>
    );
  }

  // Full Landscape Presentation (Exact match to reference image)
  return (
    <svg
      viewBox="0 0 1000 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full ${className}`}
    >
      <defs>
        {/* Blue 3D Extrusion Gradient */}
        <linearGradient id={`${idPrefix}blueDepth`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B2B52" />
          <stop offset="50%" stopColor="#071E3A" />
          <stop offset="100%" stopColor="#041224" />
        </linearGradient>

        {/* Blue Metallic Face Gradient */}
        <linearGradient id={`${idPrefix}blueFace`} x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#3B8BF2" />
          <stop offset="25%" stopColor="#1E6FD6" />
          <stop offset="60%" stopColor="#1052A3" />
          <stop offset="85%" stopColor="#0C3E7C" />
          <stop offset="100%" stopColor="#155BB0" />
        </linearGradient>

        {/* Orange 3D Extrusion Gradient */}
        <linearGradient id={`${idPrefix}orangeDepth`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A33D02" />
          <stop offset="50%" stopColor="#752B00" />
          <stop offset="100%" stopColor="#4A1C00" />
        </linearGradient>

        {/* Orange Metallic Face Gradient */}
        <linearGradient id={`${idPrefix}orangeFace`} x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#FFA64D" />
          <stop offset="30%" stopColor="#F57C18" />
          <stop offset="65%" stopColor="#DE5C04" />
          <stop offset="90%" stopColor="#BD4A00" />
          <stop offset="100%" stopColor="#F57C18" />
        </linearGradient>

        {/* Orange Curved Swoosh Gradient */}
        <linearGradient id={`${idPrefix}swooshGrad`} x1="0%" y1="90%" x2="95%" y2="10%">
          <stop offset="0%" stopColor="#C94D02" />
          <stop offset="25%" stopColor="#F57A18" />
          <stop offset="50%" stopColor="#FFAA47" />
          <stop offset="75%" stopColor="#F57816" />
          <stop offset="100%" stopColor="#D95304" />
        </linearGradient>

        {/* Specular Highlight Rim */}
        <linearGradient id={`${idPrefix}specularRim`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.1" />
          <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#FFE0B2" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
        </linearGradient>

        {/* Floor Reflection Fade Gradient Mask */}
        <linearGradient id={`${idPrefix}reflMaskGrad`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.32" />
          <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
        </linearGradient>

        <mask id={`${idPrefix}reflMask`}>
          <rect x="0" y="530" width="1000" height="110" fill={`url(#${idPrefix}reflMaskGrad)`} />
        </mask>

        {/* Soft Drop Shadow Filter for 3D depth */}
        <filter id={`${idPrefix}shadow`} x="-10%" y="-10%" width="125%" height="135%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#091E36" floodOpacity="0.16" />
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#091E36" floodOpacity="0.1" />
        </filter>
      </defs>

      <g filter={`url(#${idPrefix}shadow)`}>
        {/* ORANGE CURVED SWOOSH */}
        {/* 3D Depth Layer */}
        <path
          d="M 172 522 C 160 380, 240 160, 480 58 C 660 0, 785 85, 846 160 C 730 80, 560 92, 400 196 C 285 272, 218 420, 192 526 Z"
          fill={`url(#${idPrefix}orangeDepth)`}
          transform="translate(2, 4)"
        />
        {/* Main Swoosh Face */}
        <path
          d="M 170 520 C 158 378, 238 158, 478 56 C 658 -2, 783 83, 844 158 C 728 78, 558 90, 398 194 C 283 270, 216 418, 190 524 Z"
          fill={`url(#${idPrefix}swooshGrad)`}
        />
        {/* Specular Bevel Line */}
        <path
          d="M 170 520 C 158 378, 238 158, 478 56 C 658 -2, 783 83, 844 158"
          stroke={`url(#${idPrefix}specularRim)`}
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* BLUE 3D "S" */}
        {/* Depth */}
        <g transform="translate(6, 7)">
          <path
            d="M 235 220 H 380 V 270 H 318 C 318 290, 360 295, 388 322 C 408 342, 408 395, 385 430 C 355 470, 260 472, 225 435 L 258 392 C 280 415, 335 422, 350 398 C 358 382, 350 366, 328 354 C 280 328, 245 320, 230 285 C 220 258, 222 220, 235 220 Z"
            fill={`url(#${idPrefix}blueDepth)`}
          />
        </g>
        {/* Face */}
        <path
          d="M 235 220 H 380 V 270 H 318 C 318 290, 360 295, 388 322 C 408 342, 408 395, 385 430 C 355 470, 260 472, 225 435 L 258 392 C 280 415, 335 422, 350 398 C 358 382, 350 366, 328 354 C 280 328, 245 320, 230 285 C 220 258, 222 220, 235 220 Z"
          fill={`url(#${idPrefix}blueFace)`}
        />
        {/* Top Slab Highlight */}
        <rect x="235" y="220" width="145" height="15" fill="#5AA3FA" opacity="0.7" />
        <rect x="235" y="220" width="145" height="50" fill="none" stroke="#2068C4" strokeWidth="2" />
        {/* Middle Groove Divider */}
        <line x1="240" y1="335" x2="385" y2="335" stroke="#08254A" strokeWidth="2.5" />
        <line x1="240" y1="337" x2="385" y2="337" stroke="#7CB9FC" strokeWidth="1.5" opacity="0.8" />
        {/* Bevel Highlight */}
        <path
          d="M 235 220 H 380 V 235 M 235 220 V 285"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* ORANGE 3D "&" */}
        {/* Depth */}
        <g transform="translate(4, 5)">
          <path
            d="M 502 268 C 475 268, 458 288, 458 312 C 458 335, 474 350, 495 365 L 452 422 C 445 415, 440 405, 440 392 H 418 C 418 418, 432 438, 452 452 C 472 466, 502 468, 528 450 C 552 432, 558 405, 545 382 C 535 365, 518 352, 502 340 L 522 312 C 532 300, 532 288, 524 278 C 518 271, 510 268, 502 268 Z M 498 290 C 504 290, 508 295, 508 302 C 508 310, 502 318, 494 328 L 482 315 C 482 300, 490 290, 498 290 Z M 482 388 C 496 398, 518 412, 518 426 C 518 438, 504 445, 492 442 C 476 438, 468 422, 475 408 L 482 388 Z"
            fill={`url(#${idPrefix}orangeDepth)`}
          />
        </g>
        {/* Face */}
        <path
          d="M 502 268 C 475 268, 458 288, 458 312 C 458 335, 474 350, 495 365 L 452 422 C 445 415, 440 405, 440 392 H 418 C 418 418, 432 438, 452 452 C 472 466, 502 468, 528 450 C 552 432, 558 405, 545 382 C 535 365, 518 352, 502 340 L 522 312 C 532 300, 532 288, 524 278 C 518 271, 510 268, 502 268 Z M 498 290 C 504 290, 508 295, 508 302 C 508 310, 502 318, 494 328 L 482 315 C 482 300, 490 290, 498 290 Z M 482 388 C 496 398, 518 412, 518 426 C 518 438, 504 445, 492 442 C 476 438, 468 422, 475 408 L 482 388 Z"
            fill={`url(#${idPrefix}orangeFace)`}
          />
        <path
          d="M 502 268 C 475 268, 458 288, 458 312"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* BLUE 3D "L" */}
        {/* Depth */}
        <g transform="translate(6, 7)">
          <path
            d="M 598 220 H 702 V 268 H 662 V 395 H 772 V 425 H 785 V 465 H 598 V 425 H 618 V 268 H 598 V 220 Z"
            fill={`url(#${idPrefix}blueDepth)`}
          />
        </g>
        {/* Face */}
        <path
          d="M 598 220 H 702 V 268 H 662 V 395 H 772 V 425 H 785 V 465 H 598 V 425 H 618 V 268 H 598 V 220 Z"
          fill={`url(#${idPrefix}blueFace)`}
        />
        {/* Top Slab Highlight */}
        <rect x="598" y="220" width="104" height="15" fill="#5AA3FA" opacity="0.7" />
        <rect x="598" y="425" width="187" height="15" fill="#5AA3FA" opacity="0.5" />
        {/* Middle Groove Divider */}
        <line x1="618" y1="335" x2="662" y2="335" stroke="#08254A" strokeWidth="2.5" />
        <line x1="618" y1="337" x2="662" y2="337" stroke="#7CB9FC" strokeWidth="1.5" opacity="0.8" />
        {/* Bevel Highlight */}
        <path
          d="M 598 220 H 702 M 598 220 V 268 M 662 395 H 772 V 425 H 785"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* TEXT: "Financial Associate" */}
        {withText && (
          <text
            x="500"
            y="528"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontSize="56"
            fontWeight="900"
            letterSpacing="-0.02em"
            fill="#092342"
            style={{
              textShadow: '0 2px 4px rgba(7, 30, 58, 0.35)',
            }}
          >
            Financial Associate
          </text>
        )}

        {/* FLOOR MIRROR REFLECTION OF "Financial Associate" */}
        {withText && withReflection && (
          <g mask={`url(#${idPrefix}reflMask)`}>
            <text
              x="500"
              y="-536"
              transform="scale(1, -1)"
              textAnchor="middle"
              fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
              fontSize="56"
              fontWeight="900"
              letterSpacing="-0.02em"
              fill="#092342"
            >
              Financial Associate
            </text>
          </g>
        )}
      </g>
    </svg>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'horizontal',
  theme = 'light',
  showSubtitle = true,
}) => {
  const isDark = theme === 'dark';

  // Sizing definitions for Navbar, Hero, and Footer
  const dimensions = {
    sm: {
      height: 'h-9 sm:h-10',
      logoWidth: 'w-auto max-w-[130px] sm:max-w-[150px]',
      text: 'text-sm font-bold',
      sub: 'text-[10px]',
    },
    md: {
      height: 'h-12 sm:h-14',
      logoWidth: 'w-auto max-w-[180px] sm:max-w-[210px]',
      text: 'text-base sm:text-lg font-black',
      sub: 'text-xs',
    },
    lg: {
      height: 'h-16 sm:h-20',
      logoWidth: 'w-auto max-w-[240px] sm:max-w-[280px]',
      text: 'text-xl sm:text-2xl font-black',
      sub: 'text-xs sm:text-sm',
    },
    xl: {
      height: 'h-24 sm:h-32',
      logoWidth: 'w-auto max-w-[340px] sm:max-w-[420px]',
      text: 'text-2xl sm:text-3xl font-black',
      sub: 'text-sm sm:text-base',
    },
  };

  const currentSize = dimensions[size] || dimensions.md;

  // Variant "full": The exact complete official logo artwork
  if (variant === 'full') {
    return (
      <div
        className={`inline-flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-white shadow-lg border border-slate-200/90 transition-all duration-300 hover:shadow-xl ${className}`}
      >
        <div className={`relative ${currentSize.logoWidth} ${currentSize.height}`}>
          <OfficialLogoSvg withReflection={true} withText={true} />
        </div>
      </div>
    );
  }

  // Variant "mark": Just the 3D emblem (S & L + Orange Swoosh)
  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <div className={`relative ${currentSize.height} aspect-[4/3]`}>
          <OfficialLogoSvg aspect="mark" withReflection={false} withText={false} />
        </div>
      </div>
    );
  }

  // Variant "horizontal" (Default for Header Navbar & Footer)
  // Renders the exact official logo emblem on the left, with the official legal business name
  // "S & L Financial Associates" outside the logo
  return (
    <div className={`inline-flex items-center gap-3.5 select-none group ${className}`}>
      {/* Official Logo Artwork Lockup */}
      <div
        className={`relative ${currentSize.height} aspect-[16/10] shrink-0 transition-transform duration-300 group-hover:scale-103`}
        title="Official Logo: S & L Financial Associate"
      >
        {isDark ? (
          <div className="w-full h-full p-1.5 rounded-xl bg-white/95 shadow-md border border-slate-700/60 flex items-center justify-center">
            <OfficialLogoSvg withReflection={false} withText={true} />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <OfficialLogoSvg withReflection={true} withText={true} />
          </div>
        )}
      </div>

      {/* Website Official Company Name (Text Outside Logo) */}
      <div className="hidden sm:flex flex-col justify-center">
        <span
          className={`tracking-tight leading-tight transition-colors ${currentSize.text} ${
            isDark ? 'text-white' : 'text-slate-900 group-hover:text-blue-900'
          }`}
          style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          S & L Financial Associates
        </span>

        {showSubtitle && (
          <span
            className={`font-semibold tracking-wide ${currentSize.sub} ${
              isDark ? 'text-amber-400' : 'text-orange-600'
            }`}
          >
            Bangalore · Premier Loan Solutions
          </span>
        )}
      </div>
    </div>
  );
};
