import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to="/">
            <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex cursor-pointer">
                <img
                    src="https://i.imgur.com/P8BkOvX.png"
                    alt="Logo"
                    height={194}
                    width={96}
                />
                <p className="text-lg text-neutral-700 pb-1">
                    Unmatched Roster
                </p>
            </div>
        </Link>
    );
}