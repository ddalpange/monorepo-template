import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const Logout = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M7 4H11.5C11.7761 4 12 3.77614 12 3.5C12 3.22386 11.7761 3 11.5 3H7C5.34315 3 4 4.34315 4 6V14C4 15.6569 5.34315 17 7 17H11.5C11.7761 17 12 16.7761 12 16.5C12 16.2239 11.7761 16 11.5 16H7C5.89543 16 5 15.1046 5 14V6C5 4.89543 5.89543 4 7 4Z" fill="currentColor" /><path d="M11.6464 7.35355C11.4512 7.15829 11.4512 6.84171 11.6464 6.64645C11.8417 6.45118 12.1583 6.45118 12.3536 6.64645L15.3536 9.64645C15.5488 9.84171 15.5488 10.1583 15.3536 10.3536L12.3536 13.3536C12.1583 13.5488 11.8417 13.5488 11.6464 13.3536C11.4512 13.1583 11.4512 12.8417 11.6464 12.6464L13.7929 10.5L9 10.5C8.72386 10.5 8.5 10.2761 8.5 10C8.5 9.72386 8.72386 9.5 9 9.5L13.7929 9.5L11.6464 7.35355Z" fill="currentColor" /></svg>;

const ForwardRef = forwardRef(Logout);
const Memo = memo(ForwardRef);
export { Memo as Logout };