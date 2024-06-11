import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<(typeof client.api.accounts)["bulk-delete"]["$post"]>;
type RequestType = InferRequestType<(typeof client.api.accounts)["bulk-delete"]["$post"]>["json"];

export const useBulkDeleteAccount = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.accounts["bulk-delete"].$post({ json });
      if (!response.ok) {
        throw new Error("Error creating account");
      }

      return await response.json();
    },
    onSuccess: () => {
      toast.success("Account deleted");
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
      //   TODO: Invalidate summary
    },
    onError: (error) => {
      toast.error("Failed deleting account");
      console.error(error);
    },
  });

  return mutation;
};
