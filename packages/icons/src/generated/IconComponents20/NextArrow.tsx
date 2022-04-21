import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const NextArrow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M8 5L13 10L8 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>;

const ForwardRef = forwardRef(NextArrow);
const Memo = memo(ForwardRef);
export { Memo as NextArrow };