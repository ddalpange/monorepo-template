import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const StudentAssignment = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M14.45 1H6.02071C6.00745 1 5.99473 1.00527 5.98536 1.01464L2.51464 4.48536C2.50527 4.49473 2.5 4.50745 2.5 4.52071V15.95C2.5 15.9776 2.52239 16 2.55 16H14.45C14.4776 16 14.5 15.9776 14.5 15.95V1.05C14.5 1.02239 14.4776 1 14.45 1Z" stroke="currentColor" strokeWidth={0.75} /><path d="M14.5 3.5H17C17.2761 3.5 17.5 3.72386 17.5 4V18C17.5 18.2761 17.2761 18.5 17 18.5H6C5.72386 18.5 5.5 18.2761 5.5 18V16" stroke="currentColor" strokeWidth={0.75} /><path d="M8.5 5.5L11.5 5.5" stroke="currentColor" strokeWidth={0.75} strokeLinecap="round" /><path d="M5.5 8L11.5 8" stroke="currentColor" strokeWidth={0.75} strokeLinecap="round" /><path d="M5.5 10.5L11.5 10.5" stroke="currentColor" strokeWidth={0.75} strokeLinecap="round" /><path d="M5.5 13L11.5 13" stroke="currentColor" strokeWidth={0.75} strokeLinecap="round" /><path d="M2.5 4.5H5.5C5.77614 4.5 6 4.27614 6 4V1" stroke="currentColor" strokeWidth={0.75} /></svg>;

const ForwardRef = forwardRef(StudentAssignment);
const Memo = memo(ForwardRef);
export { Memo as StudentAssignment };