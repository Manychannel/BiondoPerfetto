"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/base-ui/accordion";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion-variants";

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

export interface FaqCategory {
  title: string;
  description?: React.ReactNode;
  items: FaqItem[];
}

export interface Faq5Props {
  categories: FaqCategory[];
  className?: string;
}

export function Faq5({ categories, className }: Faq5Props) {
  return (
    <section id="faq" className={cn("faq-section", className)} aria-label="Domande frequenti">
      <div className="faq-wrap">
        <p className="faq-eyebrow">FAQ / BIONDO PERFETTO</p>

        {categories.map((category, categoryIndex) => (
          <motion.div
            className="faq-category"
            key={category.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="faq-intro">
              <h2>{category.title}</h2>
              {category.description && <div>{category.description}</div>}
            </div>

            <Accordion type="single" collapsible className="faq-accordion">
              {category.items.map((item, itemIndex) => (
                <AccordionItem
                  key={item.question}
                  value={`faq-${categoryIndex}-${itemIndex}`}
                >
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
