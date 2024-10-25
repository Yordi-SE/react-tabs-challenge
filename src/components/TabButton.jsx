import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { activate } from "../lib/features/activeSlice";

function TabButton({ name }) {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.active.active);
  return (
    <button
      className={
        "px-4 py-2 text-sm font-medium flex-grow" +
        (activeTab === name ? " active" : " inactive")
      }
      onClick={() => dispatch(activate(name))}
    >
      Tab {name}
    </button>
  );
}

export default TabButton;
