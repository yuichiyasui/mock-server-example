import { useQuery } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_API_URL;

type MockBehavior =
  | "success"
  | "empty"
  | "not-found"
  | "server-error"
  | "error";

type Props = {
  mockBehavior: MockBehavior;
};

const addPrefer = (behavior: MockBehavior) => {
  switch (behavior) {
    case "success":
      return "example=case1";
    case "empty":
      return "example=case2";
    case "not-found":
      return "code=404";
    default:
      return "code=500";
  }
};

export const PetList = ({ mockBehavior }: Props) => {
  const { data } = useQuery({
    queryKey: ["pets", mockBehavior],
    queryFn: () =>
      fetch(`${API_URL}/pets`, {
        method: "GET",
        headers: {
          Prefer: addPrefer(mockBehavior),
        },
      }).then((res) => res.json()),
  });

  return (
    <section>
      <h2>{mockBehavior}</h2>
      <p>{JSON.stringify(data)}</p>
    </section>
  );
};
