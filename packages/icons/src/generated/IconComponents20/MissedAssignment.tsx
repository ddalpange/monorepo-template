import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const MissedAssignment = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM5.99112 14.4256C5.50296 13.9374 5.50296 13.1459 5.99112 12.6578L8.44057 10.2083L5.99112 7.75888C5.50296 7.27073 5.50296 6.47927 5.99112 5.99112C6.47927 5.50296 7.27073 5.50296 7.75888 5.99112L10.2083 8.44057L12.6578 5.99112C13.1459 5.50296 13.9374 5.50296 14.4255 5.99112C14.9137 6.47927 14.9137 7.27073 14.4255 7.75888L11.9761 10.2083L14.4255 12.6578C14.9137 13.1459 14.9137 13.9374 14.4255 14.4255C13.9374 14.9137 13.1459 14.9137 12.6578 14.4255L10.2083 11.9761L7.75888 14.4255C7.27073 14.9137 6.47927 14.9137 5.99112 14.4256Z" fill="#11153A" /></svg>;

const ForwardRef = forwardRef(MissedAssignment);
const Memo = memo(ForwardRef);
export { Memo as MissedAssignment };