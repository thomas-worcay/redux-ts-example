"use client";
import { setName } from "@/store/userSlice";
import { useAppDispatch, useAppSelector } from "@/store/useRedux";

export default function HomeComponent() {
  const dispatch = useAppDispatch();
  // Import only what you need so the component does not rerender when other properties of the state change
  const name = useAppSelector(state => state.userState.name);
  return (
    <div className="flex gap-2">
      <span>Name: </span>
      <input
        className="border rounded px-2 border-zinc-800"
        value={name}
        onChange={e => {
          const val = e.target.value;
          if (val) dispatch(setName(val));
        }}
      ></input>
    </div>
  );
}
