"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useUserStore } from "@/providers/user-store-provider";

const nameSchema = z.object({
  name: z.string().min(2).max(50),
});

const NameForm = () => {
  const setName = useUserStore((state) => state.setName);

  const form = useForm<z.infer<typeof nameSchema>>({
    resolver: zodResolver(nameSchema),
    defaultValues: {
      name: "",
    },
  });

  const { control } = form;

  const onSubmit = (values: z.infer<typeof nameSchema>) => {
    const validatedValues = nameSchema.safeParse(values);

    if (validatedValues.success) {
      localStorage.setItem("name", values.name);
      setName(values.name);
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя</FormLabel>
              <FormControl>
                <Input {...field} placeholder="John Doe" />
              </FormControl>
              <FormDescription>Введите пожалуйста ваше имя</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>Отправить</Button>
      </form>
    </Form>
  );
};
export default NameForm;
