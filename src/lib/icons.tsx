"use client";
import {
  List,
  MagnifyingGlass,
  ArrowSquareOut,
  User,
  SignOut,
  FloppyDiskBack,
  Trash,
  FilePlus,
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

export function SignOutIcon({ size, color }: IconsProps) {
  return <SignOut size={size || 23} weight="bold" color={color || "white"} />;
}

export function FloppyDiskBackIcon({ size, color }: IconsProps) {
  return <FloppyDiskBack size={size || 23} color={color || "white"} />;
}

export function TrashIcon({ size, color }: IconsProps) {
  return <Trash size={size || 23} color={color || "white"} />;
}

export function FilePlusIcon({ size, color }: IconsProps) {
  return <FilePlus size={size || 23} color={color || "white"} />;
}
