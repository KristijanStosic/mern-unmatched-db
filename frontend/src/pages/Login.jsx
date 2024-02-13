import { Button } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.jsx";
import { Input } from "@/components/ui/input.jsx";

import Container from "@/components/Container.jsx";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/redux/slices/authApiSlice.js";
import { setCredentials } from "@/redux/slices/authSlice.js";

import { useToast } from "@/components/ui/use-toast.js";

import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";

const loginUserSchema = z.object({
  email: z.string(),
  password: z.string()
});

export default function Login() {
  const form = useForm({
    resolver: zodResolver(loginUserSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const { user } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { toast } = useToast();

  async function onSubmit(values) {
    try {
      const response = await login(values).unwrap();
      dispatch(setCredentials({ ...response }));
      navigate(redirect);
      toast({ variant: 'success', title: "Logged in successfully!" });
    } catch (error) {
      toast({ variant: 'destructive', title: "Uh oh! Something went wrong.", description: error?.data.message || error?.error });
    }
  };

  useEffect(() => {
    if (user) {
      navigate(redirect);
    }
  }, [navigate, redirect, user]);

  return (
    <Container>
      <div className="flex items-center justify-center">
        <Card className="w-[650px]">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Log in to your account</CardTitle>
            <CardDescription>
              Enter your informations below to sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="m@example.com" disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" disabled={isLoading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button disabled={isLoading} className="w-full" type="submit">Submit</Button>
              </form>
            </Form>

          </CardContent>
        </Card>
      </div>
    </Container>
  );
}