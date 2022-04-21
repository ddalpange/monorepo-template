import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const Search = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><circle cx={9.5} cy={9.5} r={5} stroke="currentColor" /><path d="M13.8536 13.1464L13.5 12.7929L12.7929 13.5L13.1464 13.8536L13.8536 13.1464ZM16.1464 16.8536C16.3417 17.0488 16.6583 17.0488 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L16.1464 16.8536ZM13.1464 13.8536L16.1464 16.8536L16.8536 16.1464L13.8536 13.1464L13.1464 13.8536Z" fill="currentColor" /></svg>;

const ForwardRef = forwardRef(Search);
const Memo = memo(ForwardRef);
export { Memo as Search };