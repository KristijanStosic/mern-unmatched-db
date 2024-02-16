import { Button } from "./ui/button.jsx";

export default function Footer() {
    return (
        <div className="sticky z-50 bottom-0 w-full p-4 border-t bg-white text-primary">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-center">
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    &copy; {new Date().getFullYear()} RESTORATION GAMES LLC
                </div>
            </div>
        </div>
    );
}