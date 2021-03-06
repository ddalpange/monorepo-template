import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const Settings = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M16.9896 9.1782C17.2576 9.64231 17.2576 10.2141 16.9896 10.6782L14.1443 15.6064C13.8764 16.0705 13.3812 16.3564 12.8453 16.3564H7.1547C6.6188 16.3564 6.12361 16.0705 5.85566 15.6064L3.01036 10.6782C2.74241 10.2141 2.74241 9.6423 3.01036 9.1782L5.85566 4.25C6.12361 3.7859 6.6188 3.5 7.1547 3.5L12.8453 3.5C13.3812 3.5 13.8764 3.7859 14.1443 4.25L16.9896 9.1782Z" stroke="currentColor" /><circle cx={10} cy={9.92969} r={2.5} stroke="currentColor" /></svg>;

const ForwardRef = forwardRef(Settings);
const Memo = memo(ForwardRef);
export { Memo as Settings };