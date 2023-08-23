import { FC } from "react";
import { IconProps } from "./types";

export const ComponentIcon: FC<IconProps> = ({ width, height, ...props }) => {
    return (
        <svg
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 95.1 76.8"
            xmlSpace="preserve"
            enableBackground="new 0 0 95.1 76.8"
            {...props}
        >
            <path d="M87.2 30.5c-3.5 0-6.5 2.4-7.5 5.6H68.9V24.8c0-4.2-3.4-7.6-7.6-7.6h-2.7v-7h11.3c1 3.2 3.9 5.6 7.5 5.6 4.3 0 7.9-3.5 7.9-7.9 0-4.3-3.5-7.9-7.9-7.9-3.5 0-6.5 2.4-7.5 5.6H56.3c-1.3 0-2.3 1-2.3 2.3v9.3H41.3V7.9c0-1.3-1-2.3-2.3-2.3H25.2c-1-3.2-3.9-5.6-7.5-5.6-4.3 0-7.9 3.5-7.9 7.9 0 4.3 3.5 7.9 7.9 7.9 3.5 0 6.5-2.4 7.5-5.6h11.5v7H34c-4.2 0-7.6 3.4-7.6 7.6v11.3h-11c-1-3.2-3.9-5.6-7.5-5.6C3.6 30.5 0 34 0 38.4s3.5 7.9 7.9 7.9c3.5 0 6.5-2.4 7.5-5.6h10.9V52c0 4.2 3.4 7.6 7.6 7.6h2.7v7H25.2c-1-3.2-3.9-5.6-7.5-5.6-4.3 0-7.9 3.5-7.9 7.9 0 4.3 3.5 7.9 7.9 7.9 3.5 0 6.5-2.4 7.5-5.6H39c1.3 0 2.3-1 2.3-2.3v-9.3h12.8v9.3c0 1.3 1 2.3 2.3 2.3H70c1 3.2 3.9 5.6 7.5 5.6 4.3 0 7.9-3.5 7.9-7.9 0-4.3-3.5-7.9-7.9-7.9-3.5 0-6.5 2.4-7.5 5.6H58.6v-7h2.6c4.2 0 7.6-3.4 7.6-7.6V40.7h10.9c1 3.2 3.9 5.6 7.5 5.6 4.3 0 7.9-3.5 7.9-7.9s-3.5-7.9-7.9-7.9zM77.4 4.6c1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.3 3.3-3.3-1.5-3.3-3.3c.1-1.8 1.5-3.3 3.3-3.3zm-59.6 6.5c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3c-.1 1.9-1.5 3.3-3.3 3.3zM8 41.7c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3-1.5 3.3-3.3 3.3zm9.8 30.5c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3c-.1 1.8-1.5 3.3-3.3 3.3zm59.6-6.5c1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.3 3.3-3.3-1.5-3.3-3.3c.1-1.9 1.5-3.3 3.3-3.3zM59.1 47.6c0 1.3-1 2.3-2.3 2.3H38.4c-1.3 0-2.3-1-2.3-2.3V29.2c0-1.3 1-2.3 2.3-2.3h18.3c1.3 0 2.3 1 2.3 2.3v18.4h.1zm28.1-5.9c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3-1.5 3.3-3.3 3.3z" />
            <path d="M40.7 31.5H54.5V45.3H40.7z" />
        </svg>
    );
};


export default ComponentIcon