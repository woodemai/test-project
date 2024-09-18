"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
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
import Link from "next/link";

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
        className="flex flex-col gap-4 border rounded-lg shadow-lg p-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h4 className="text-xl">Начать</h4>
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Напишите ваше имя</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Ваше имя" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
        <Button variant='ghost'>Сохранить</Button>
        <Button asChild>
          <Link href="/calculator">Открыть калькулятор</Link>
        </Button>
        <Button asChild>
          <Link href="/password">Открыть генератор</Link>
        </Button>
        </div>
      </form>
    </Form>
  );
};
export default NameForm;
