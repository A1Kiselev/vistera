import { createContext } from "react";
import { FrameType, ListType, MaterialType, PipeType } from "../calculator/util.ts";

export interface StaffContextType{
  frame: FrameType,
  list: ListType,
  pipe: PipeType,
  length: number,
  width: number,
  material: MaterialType,
}

const StaffContext = createContext<StaffContextType | null>(null)
export default StaffContext;
