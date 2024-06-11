import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<(typeof client.api.accounts)[":id"]["$patch"]>;
type RequestType = InferRequestType<(typeof client.api.accounts)[":id"]["$patch"]>["json"];

export const useEditAccounts = (id?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.accounts[":id"]["$patch"]({
        json,
        param: { id },
      });
      if (!response.ok) {
        throw new Error("Error creating account");
      }

      return await response.json();
    },
    onSuccess: () => {
      toast.success("Account updated");
      queryClient.invalidateQueries({ queryKey: ["accounts", { id }] });
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
      // TODO: Invalidate summary and transactions
    },
    onError: (error) => {
      toast.error("Failed to edit account");
      console.error(error);
    },
  });

  return mutation;
};
