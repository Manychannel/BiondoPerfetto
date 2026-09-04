"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type AccordionType = "single" | "multiple";

interface AccordionContextValue {
  openValues: Set<string>;
  toggle: (value: string) => void;
}

interface AccordionItemContextValue {
  value: string;
  open: boolean;
  triggerId: string;
  contentId: string;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);
const AccordionItemContext = React.createContext<AccordionItemContextValue | null>(null);

function useAccordionContext() {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("Accordion components must be used inside Accordion");
  return context;
}

function useAccordionItemContext() {
  const context = React.useContext(AccordionItemContext);
  if (!context) throw new Error("AccordionTrigger and AccordionContent must be used inside AccordionItem");
  return context;
}

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: AccordionType;
  defaultValue?: string | string[];
  collapsible?: boolean;
}

export function Accordion({
  type = "single",
  defaultValue,
  collapsible = false,
  className,
  children,
  ...props
}: AccordionProps) {
  const initialValues = React.useMemo(() => {
    if (!defaultValue) return [];
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  }, [defaultValue]);
  const [openValues, setOpenValues] = React.useState<Set<string>>(
    () => new Set(initialValues),
  );

  const toggle = React.useCallback((value: string) => {
    setOpenValues((current) => {
      const next = new Set(type === "multiple" ? current : []);
      if (current.has(value) && (type === "multiple" || collapsible)) next.delete(value);
      else next.add(value);
      return next;
    });
  }, [collapsible, type]);

  return (
    <AccordionContext.Provider value={{ openValues, toggle }}>
      <div className={cn("accordion-root", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function AccordionItem({ value, className, children, ...props }: AccordionItemProps) {
  const { openValues } = useAccordionContext();
  const id = React.useId();
  const open = openValues.has(value);

  return (
    <AccordionItemContext.Provider
      value={{
        value,
        open,
        triggerId: `accordion-trigger-${id}`,
        contentId: `accordion-content-${id}`,
      }}
    >
      <div
        className={cn("accordion-item", className)}
        data-state={open ? "open" : "closed"}
        {...props}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { toggle } = useAccordionContext();
  const { value, open, triggerId, contentId } = useAccordionItemContext();

  return (
    <button
      id={triggerId}
      type="button"
      className={cn("accordion-trigger", className)}
      aria-expanded={open}
      aria-controls={contentId}
      onClick={() => toggle(value)}
      {...props}
    >
      {children}
      <span className="accordion-trigger-icon" data-slot="accordion-trigger-icon" aria-hidden="true">
        <i />
        <i />
      </span>
    </button>
  );
}

export function AccordionContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { open, triggerId, contentId } = useAccordionItemContext();

  return (
    <div
      id={contentId}
      className="accordion-content-shell"
      data-state={open ? "open" : "closed"}
      role="region"
      aria-labelledby={triggerId}
      aria-hidden={!open}
    >
      <div className={cn("accordion-content", className)} {...props}>
        {children}
      </div>
    </div>
  );
}
