import { Link } from "@inertiajs/inertia-react";

export default function MenuItem({
    link,
    icon,
    text,
    isActive,
    method = "get",
}) {
    return (
        <li>
            <a
                href={link ? route(link) : null}
                className={isActive ? "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 bg-gray-300" : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"}
                method={method}
                as="button"
            >
                {icon} 
                <span className="ml-3">{text}</span>
            </a>
        </li>
    );
}
