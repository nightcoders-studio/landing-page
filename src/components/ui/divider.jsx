import React from "react";
import { cn } from "@/lib/utils";

const Divider = ({ className, ...props }) => {
    return (
        <hr
            className={cn(
                "border-t border-border-default w-full my-4",
                className
            )}
            {...props}
        />
    );
};

export default Divider;
