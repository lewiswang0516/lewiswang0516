"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { profile } from "@/lib/data";

const links = [
  { label: "AI", href: "#ai" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function FloatingNav() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setVisible(latest > 480 && latest < previous);
  });

  return (
    <AnimatePresence>
      {visible ? (
        <motion.nav
          initial={{ y: -56 }}
          animate={{ y: 0 }}
          exit={{ y: -56 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="border-b-thin fixed inset-x-0 top-0 z-50 border-sand-6 bg-sand-1"
        >
          <div className="mx-auto flex h-12 max-w-[1100px] items-center justify-between px-5 md:px-8">
            <a
              href="#top"
              className="text-body font-bold tracking-tight text-sand-12"
            >
              Zane Wang
            </a>
            <div className="flex items-center gap-5 text-body">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sand-11 underline-offset-4 transition-colors hover:text-sand-12 hover:underline"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-11 underline underline-offset-4 hover:no-underline"
              >
                CV
              </a>
            </div>
          </div>
        </motion.nav>
      ) : null}
    </AnimatePresence>
  );
}
