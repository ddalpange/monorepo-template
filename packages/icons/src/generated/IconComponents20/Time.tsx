import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const Time = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><circle cx={10} cy={10} r={5.5} stroke="#11153A" /><path d="M10 7.5V10.5H13" stroke="#11153A" strokeLinecap="round" strokeLinejoin="round" /></svg>;

const ForwardRef = forwardRef(Time);
const Memo = memo(ForwardRef);
export { Memo as Time };