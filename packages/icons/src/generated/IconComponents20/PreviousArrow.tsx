import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const PreviousArrow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M12 15L7 10L12 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>;

const ForwardRef = forwardRef(PreviousArrow);
const Memo = memo(ForwardRef);
export { Memo as PreviousArrow };