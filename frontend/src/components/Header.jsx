import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button.jsx";
import { useLogoutMutation } from "@/redux/slices/authApiSlice.js";
import { logout } from "@/redux/slices/authSlice.js";
import { useToast } from "./ui/use-toast.js";
import Logo from "./Logo.jsx";

export default function Header() {
    const { user } = useSelector((state) => state.auth);

    const { toast } = useToast();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();

    async function handleLogout() {
        try {
            const response = await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/');
            toast({ variant: 'success', title: response.message });
        } catch (error) {
            toast({ variant: 'destructive', title: "Uh oh! Something went wrong.", description: error?.data.message || error?.error });
        }
    }

    return (
        <div className="sticky top-0 z-50 w-full h-20 px-4 border-b shadow-sm bg-white flex items-center">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <div>
                    <Logo />
                </div>
                <div>
                    <Button size="sm" variant="ghost" asChild>
                        <Link to="/">
                            Characters
                        </Link>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                        <Link to="/boards">
                            Boards
                        </Link>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                        <Link to="/sets">
                            Sets
                        </Link>
                    </Button>
                </div>
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    {!user ? (
                        <>
                            <Button size="sm" variant="outline" asChild>
                                <Link to="/login">
                                    Login
                                </Link>
                            </Button>
                            <Button size="sm" asChild>
                                <Link to="/register">
                                    Register
                                </Link>
                            </Button>
                        </>
                    ) : (
                        <>
                            <div className="flex gap-4 justify-center items-center">
                                {user.firstName} {user.lastName}
                                <Button variant='ghost' size="sm" onClick={handleLogout}>
                                    Logout
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}