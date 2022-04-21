import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const PreviousContent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M6 6L2 10L6 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 9.5C18.2761 9.5 18.5 9.72386 18.5 10C18.5 10.2761 18.2761 10.5 18 10.5L18 9.5ZM2 9.5L18 9.5L18 10.5L2 10.5L2 9.5Z" fill="currentColor" /></svg>;

const ForwardRef = forwardRef(PreviousContent);
const Memo = memo(ForwardRef);
export { Memo as PreviousContent };