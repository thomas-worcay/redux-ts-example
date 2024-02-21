"use client";
import { useAppSelector } from "@/store/useRedux";

export default function AboutComponent() {
  const name = useAppSelector(state => state.userState.name);
  return (
    <div>
      <span>Name from other page: </span>
      <span>{name}</span>
    </div>
  );
}
