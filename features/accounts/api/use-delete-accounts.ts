import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<(typeof client.api.accounts)[":id"]["$delete"]>;

export const useDeleteAccounts = (id?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const response = await client.api.accounts[":id"]["$delete"]({
        param: { id },
      });
      if (!response.ok) {
        throw new Error("Error creating account");
      }

      return await response.json();
    },
    onSuccess: () => {
      toast.success("Account deleted");
      queryClient.invalidateQueries({ queryKey: ["accounts", { id }] });
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
      // TODO: Invalidate summary and transactions
    },
    onError: (error) => {
      toast.error("Failed to delete account");
      console.error(error);
    },
  });

  return mutation;
};
