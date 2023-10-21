import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:4010";

type MockBehavior = "success" | "empty" | "error";

type Props = {
  mockBehavior: MockBehavior;
};

const addPrefer = (behavior: MockBehavior) => {
  switch (behavior) {
    case "empty":
      return "example=case2";
    case "error":
      return "code=404";
    default:
      return "example=case1";
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
    <div>
      <p>{mockBehavior}</p>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};
