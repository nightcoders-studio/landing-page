import PropTypes from "prop-types";
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

Divider.propTypes = {
    className: PropTypes.string, // Menentukan bahwa className harus berupa string
};

export default Divider;
