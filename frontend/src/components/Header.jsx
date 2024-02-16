import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button.jsx";
import { useLogoutMutation } from "@/redux/slices/authApiSlice.js";
import { logout } from "@/redux/slices/authSlice.js";
import { useToast } from "./ui/use-toast.js";
import Logo from "./Logo.jsx";
import { Heart } from "lucide-react";
import Tooltips from "./Tooltips.jsx";
import { useGetMyFavoriteCharactersQuery } from "@/redux/slices/myFavoritesApiSlice.js";
import { Badge } from "./ui/badge.jsx";

export default function Header() {
    const { user } = useSelector((state) => state.auth);

    const { toast } = useToast();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data: myFavoriteCharacters, isLoading, error } = useGetMyFavoriteCharactersQuery();

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
                    <Button variant="link" asChild>
                        <Link to="/">
                            Characters
                        </Link>
                    </Button>
                    <Button variant="link" asChild>
                        <Link to="/boards">
                            Boards
                        </Link>
                    </Button>
                    <Button variant="link" asChild>
                        <Link to="/sets">
                            Sets
                        </Link>
                    </Button>
                    <Button variant="link" asChild>
                        <Link to="/about">
                            About
                        </Link>
                    </Button>
                </div>
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    {!user ? (
                        <>
                            <Button size="sm" variant="link" asChild>
                                <Link to="/login">
                                    Login
                                </Link>
                            </Button>
                            <Button size="sm" variant='link' asChild>
                                <Link to="/register">
                                    Register
                                </Link>
                            </Button>
                        </>
                    ) : (
                        <>
                            <div className="flex gap-4 justify-center items-center">
                                <Button size="sm" variant="link" asChild>
                                    <Link to="/my-favorite-characters">
                                        <Tooltips tooltipText='My Favorite Characters'>
                                            <div className="relative">
                                                <Heart />
                                                <div className="absolute -top-3.5 right-3.5">
                                                    {myFavoriteCharacters?.length > 0 && (
                                                        <Badge className="px-2">
                                                            {myFavoriteCharacters.length}
                                                        </Badge>
                                                    )}
                                                </div>
                                            </div>
                                        </Tooltips>
                                    </Link>
                                </Button>
                                <Button size="sm" variant='link' asChild>
                                    <Link to="/my-profile">
                                        {user.firstName} {user.lastName}
                                    </Link>
                                </Button>
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