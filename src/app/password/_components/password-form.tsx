"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormMessage,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { generatePassword } from "@/lib/generate-password";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export type PasswordProps = {
  length: number;
  includeUpperCase: boolean;
  includeLowerCase: boolean;
  includeDigits: boolean;
  includeSymbols: boolean;
  avoidRepetation: boolean;
};

const passwordSchema = z.object({
  length: z.coerce.number().min(2).max(50),
  includeUpperCase: z.boolean(),
  includeLowerCase: z.boolean(),
  includeDigits: z.boolean(),
  includeSybmols: z.boolean(),
  avoidRepetation: z.boolean(),
});

const PasswordForm = () => {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const form = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      length: 8,
      includeUpperCase: true,
      includeLowerCase: true,
      includeDigits: false,
      includeSybmols: false,
      avoidRepetation: false,
    },
  });

  const { control } = form;

  const onSubmit = (values: z.infer<typeof passwordSchema>) => {
    setGeneratedPassword(generatePassword(values));
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <h2>{generatedPassword}</h2>
        <FormField
          control={control}
          name="length"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Длина пароля</FormLabel>
              <FormControl>
                <Input {...field} placeholder="8" type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="includeUpperCase"
          render={({ field }) => (
            <FormItem className="flex items-end gap-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>Использовать прописные буквы</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="includeLowerCase"
          render={({ field }) => (
            <FormItem className="flex items-end gap-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>Использовать строчные буквы</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="includeDigits"
          render={({ field }) => (
            <FormItem className="flex items-end gap-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>Использовать цифры</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="includeSybmols"
          render={({ field }) => (
            <FormItem className="flex items-end gap-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>Использовать символы: %, *, ?, @, #, $, ~</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="avoidRepetation"
          render={({ field }) => (
            <FormItem className="flex items-end gap-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>Избегать повторения символов</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>Сгенерировать пароль</Button>
      </form>
    </Form>
  );
};

export default PasswordForm;
