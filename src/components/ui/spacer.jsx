import React from "react";
import { cn } from "@/lib/utils";

const Spacer = ({ size = "4", horizontal = false, className, ...props }) => {
    return (
        <div
            className={cn(
                horizontal ? `w-${size} h-0` : `h-${size} w-0`,
                className
            )}
            {...props}
        />
    );
};

export default Spacer;
