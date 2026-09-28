"use client";

import React from "react";
import {
  MapPin,
  FileText,
  BadgeCheck,
  Building2,
  Calculator,
  ClipboardList,
  Brain,
  Plus,
  Briefcase,
  ListChecks,
  ChevronDown,
  CheckCircle2,
  GitBranch,
  Lightbulb,
  Calendar,
  Video,
  CheckCircle,
  HeartHandshake,
  ArrowRight,
  ArrowUpRight,
  ArrowUp,
  Mail,
  ShieldCheck,
  Copy,
  Share2,
  Check,
  Menu,
  X,
  Search,
  Sliders,
  ExternalLink,
  BookOpen,
  Folder,
  Image as ImageIcon,
  Settings,
  LogOut,
  Sparkles,
  GraduationCap,
  Award,
  LucideProps,
} from "lucide-react";

const iconMap = new Map<string, React.ComponentType<LucideProps>>([
  // Navigation & Actions
  ["menu", Menu],
  ["close", X],
  ["add", Plus],
  ["plus", Plus],
  ["expand_more", ChevronDown],
  ["arrow_forward", ArrowRight],
  ["arrow_outward", ArrowUpRight],
  ["arrow_upward", ArrowUp],
  ["arrow_up", ArrowUp],
  ["open_in_new", ExternalLink],
  ["logout", LogOut],
  ["settings", Settings],

  // Location & Identity
  ["location_on", MapPin],
  ["map_pin", MapPin],
  ["badge", BadgeCheck],
  ["verified", BadgeCheck],
  ["verified_user", ShieldCheck],

  // Sections & Content
  ["article", FileText],
  ["notes", FileText],
  ["edit_note", FileText],
  ["menu_book", BookOpen],
  ["work", Briefcase],
  ["psychology", Brain],
  ["list_alt", ListChecks],
  ["account_balance", Building2],
  ["calculate", Calculator],
  ["checklist", ClipboardList],
  ["account_tree", GitBranch],
  ["lightbulb", Lightbulb],
  ["calendar_month", Calendar],
  ["videocam", Video],
  ["task_alt", CheckCircle],
  ["volunteer_activism", HeartHandshake],
  ["check_circle", CheckCircle2],
  ["check", Check],
  ["search", Search],
  ["search_insights", Search],
  ["precision_manufacturing", Sliders],
  ["mail", Mail],
  ["content_copy", Copy],
  ["share", Share2],
  ["dashboard", Sliders],
  ["folder", Folder],
  ["folder_open", Folder],
  ["photo_library", ImageIcon],
  ["school", GraduationCap],
  ["graduation", GraduationCap],
  ["education", GraduationCap],
  ["award", Award],
  ["degree", GraduationCap],
]);

export interface IconProps extends Omit<LucideProps, "ref"> {
  name: string;
}

export function Icon({ name, className = "", size = 18, ...props }: IconProps) {
  const normalizedKey = name.trim().toLowerCase();
  const component = iconMap.get(normalizedKey) ?? Sparkles;

  return React.createElement(component, {
    size,
    className: `inline-block shrink-0 ${className}`,
    "aria-hidden": true,
    ...props,
  });
}
