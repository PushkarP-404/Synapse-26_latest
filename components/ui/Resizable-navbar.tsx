"use client";

import { cn } from "@/lib/utils";
import { IconMenu3, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { forwardRef, useState } from "react";

/* =====================================================
   NAVBAR
===================================================== */

export const Navbar = ({
  children,
  className,
  visible = true,
}: {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}) => {
  return (
    <motion.div
      className={cn("fixed inset-x-0 top-0 z-40 w-full", className)}
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -80,
        pointerEvents: visible ? "auto" : "none",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

/* =====================================================
   DESKTOP NAV BODY (BIGGER)
===================================================== */

export const NavBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      animate={{
        backdropFilter: "blur(14px)",
        boxShadow:
          "0 6px 40px rgba(235,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.12)",
        width: "90%",
        y: 18,
      }}
      transition={{ type: "spring", stiffness: 180, damping: 35 }}
      className={cn(
        "relative z-[150] mx-auto hidden lg:flex items-center justify-between rounded-full bg-black/70 border border-white/10 px-10 py-5",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

/* =====================================================
   DESKTOP NAV ITEMS
===================================================== */

export const NavItems = ({
  items,
  className,
  onItemClick,
}: {
  items: { name: string; link: string }[];
  className?: string;
  onItemClick?: () => void;
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden lg:flex items-center justify-center gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          key={idx}
          href={item.link}
          scroll={false}
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-5 py-3 text-white/80 hover:text-white"
        >
          {hovered === idx && (
            <motion.div
              layoutId="nav-hover"
              className="absolute inset-0 rounded-full bg-[#EB0000]/20 border border-[#EB0000]/40"
            />
          )}
          <span className="relative z-10 font-joker text-xl tracking-wide">
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

/* =====================================================
   MOBILE NAV (EXPORTED ✅)
===================================================== */

export const MobileNav = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative z-50 w-full px-5 pt-4", className)}>
      {children}
    </div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex items-center justify-between py-4", className)}>
    {children}
  </div>
);

/* =====================================================
   MOBILE MENU (TALLER)
===================================================== */

export const MobileNavMenu = forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
  }
>(function MobileNavMenu({ children, className, isOpen }, ref) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={cn(
            "absolute top-20 left-4 right-4 max-h-[85vh] overflow-y-auto rounded-xl bg-black/95 border border-white/10 px-6 py-10 flex flex-col gap-6 shadow-[0_10px_40px_rgba(235,0,0,0.2)]",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
});

/* =====================================================
   MOBILE MENU ITEM
===================================================== */

export const MobileAnimatedMenuItem = ({
  name,
  link,
  onClick,
}: {
  name: string;
  link: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => (
  <Link
    href={link}
    onClick={onClick}
    className="flex items-center justify-between font-joker text-white"
  >
    <span className="text-[clamp(22px,5vw,42px)] hover:text-[#EB0000] transition">
      {name}
    </span>
    <span className="text-[clamp(22px,5vw,42px)] hover:text-[#EB0000] transition">
      ↗
    </span>
  </Link>
);

/* =====================================================
   TOGGLE
===================================================== */

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) =>
  isOpen ? (
    <IconX
      size={38}
      className="text-white cursor-pointer hover:text-[#EB0000]"
      onClick={onClick}
    />
  ) : (
    <IconMenu3
      size={38}
      className="text-white cursor-pointer hover:text-[#EB0000]"
      onClick={onClick}
    />
  );

/* =====================================================
   LOGO
===================================================== */

export const NavbarLogo = () => (
  <Link href="/" className="flex items-center">
    <Image
      src="/Synapse Logo.png"
      alt="Synapse Logo"
      width={48}
      height={48}
      priority
    />
  </Link>
);

/* =====================================================
   ✅ NAVBAR BUTTON (RESTORED)
===================================================== */

type NavbarVariant =
  | "primary"
  | "secondary"
  | "dark"
  | "gradient"
  | "register";

export const NavbarButton = ({
  href,
  children,
  className,
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: NavbarVariant;
}) => {
  const base =
    "px-6 py-3 rounded-[10px] text-sm font-bold transition-all duration-300";

  const variants: Record<NavbarVariant, string> = {
    primary:
      "border-2 border-white text-white shadow-[6px_6px_0px_#EB0000] hover:bg-[#EB0000] hover:text-black",
    secondary: "text-white/80 hover:text-white",
    dark:
      "bg-black text-white border-2 border-white hover:bg-[#EB0000] hover:text-black",
    gradient:
      "border-2 border-white text-white hover:bg-[#EB0000] hover:text-black",
    register:
      "text-lg border-[4px] border-white bg-black text-white shadow-[10px_10px_0px_#EB0000] hover:bg-[#EB0000] hover:text-black font-jqka",
  };

  const button = (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );

  return href ? <Link href={href}>{button}</Link> : button;
};
