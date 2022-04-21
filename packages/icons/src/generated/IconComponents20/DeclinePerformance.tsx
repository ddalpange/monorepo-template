import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const DeclinePerformance = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM11.4568 5C11.4568 4.30964 10.8971 3.75 10.2068 3.75C9.51643 3.75 8.95678 4.30964 8.95678 5L8.95678 12.0222L6.76562 9.75558C6.28579 9.25923 5.50785 9.25923 5.02802 9.75558C4.5482 10.2519 4.5482 11.0567 5.02802 11.553L9.13089 15.7972C9.21336 15.8825 9.30463 15.9531 9.40169 16.0091C9.72815 16.1974 10.12 16.2198 10.462 16.0764C10.6099 16.0143 10.7485 15.9213 10.8685 15.7972L14.9714 11.553C15.4512 11.0567 15.4512 10.2519 14.9714 9.75558C14.4915 9.25923 13.7136 9.25923 13.2338 9.75558L11.4568 11.5938L11.4568 5Z" fill="#11153A" /></svg>;

const ForwardRef = forwardRef(DeclinePerformance);
const Memo = memo(ForwardRef);
export { Memo as DeclinePerformance };