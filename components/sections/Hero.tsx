"use client";
import { motion } from "framer-motion";
import Container from "../Container";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24">
      <Container className="py-16 sm:py-24">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              {siteConfig.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-2 text-lg text-zinc-700 dark:text-zinc-300"
            >
              {siteConfig.role}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400"
            >
              {siteConfig.tagline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <a href="#projects" className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90">View Projects</a>
              <a href={siteConfig.resumeUrl} className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900" download>
                Download Resume
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto aspect-square w-40 overflow-hidden rounded-full border border-zinc-200 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-800 sm:w-48"
            aria-hidden
          />
        </div>
      </Container>
    </section>
  );
}
