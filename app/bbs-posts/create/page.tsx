"use client";
 
import { useForm } from "react-hook-form";
 
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Textarea } from "@/components/ui/textarea";
// import { useRouter } from "next/navigation";
import { postBbs } from "@/action/post-bbs-action";

export const formScheme = z.object({
  username: z.string().min(2, { message: "over 2" }),
  title: z.string().min(2, { message: "over 2" }),
  content: z
    .string()
    .min(2, { message: "over 2" })
    .max(140, { message: "under 140" }),
});

export default function Page() {
  // const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formScheme),
    defaultValues: {
      username: '',
      title: '',
      content: '',
    }
  });

  const onSubmit = async (formData: z.infer<typeof formScheme>) => {
    postBbs(formData);

    {/* client side
    try {
      await fetch('http://localhost:3000/api/post', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      router.push('/');
    } catch (error) {
      console.log(error)
    } */}
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-1/2 px-7">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>content</FormLabel>
                <FormControl>
                  <Textarea
                    className="resize-none"
                    placeholder="shadcn"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
