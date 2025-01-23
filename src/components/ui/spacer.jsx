import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

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

Spacer.propTypes = {
    size: PropTypes.string,
    horizontal: PropTypes.bool,
    className: PropTypes.string,
}

export default Spacer;
