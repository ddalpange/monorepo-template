import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const NextContent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M14 6L18 10L14 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 9.5C1.72386 9.5 1.5 9.72386 1.5 10C1.5 10.2761 1.72386 10.5 2 10.5L2 9.5ZM18 9.5L2 9.5L2 10.5L18 10.5L18 9.5Z" fill="currentColor" /></svg>;

const ForwardRef = forwardRef(NextContent);
const Memo = memo(ForwardRef);
export { Memo as NextContent };