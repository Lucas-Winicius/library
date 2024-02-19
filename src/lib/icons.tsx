"use client";
import {
  List,
  MagnifyingGlass,
  ArrowSquareOut,
  User,
} from "@phosphor-icons/react";

export function ListIcon({ size, color }: IconsProps) {
  return <List size={size || 23} weight="bold" color={color || "white"} />;
}

export function MagnifyingGlassIcon({ size, color }: IconsProps) {
  return (
    <MagnifyingGlass size={size || 23} weight="bold" color={color || "white"} />
  );
}

export function ArrowSquareOutIcon({ size, color }: IconsProps) {
  return (
    <ArrowSquareOut size={size || 23} weight="bold" color={color || "white"} />
  );
}

export function UserIcon({ size, color }: IconsProps) {
  return <User size={size || 23} weight="bold" color={color || "white"} />;
}
