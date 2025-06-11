import { useEffect, useState } from "react";

// 假設mockFetch是一個3秒後回傳API結果的function

type List = {
  id: number;
  name: string;
};

export default function Menu() {
  const [menuList, setMenuList] = useState<List[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const data = await mockFetch();
      setIsLoading(false);
      setMenuList(data);
    }
    fetchData();
  }, []);

  return (
    <div className="px-4">
      <ul className="flex flex-col gap-1">
        {isLoading
          ? Array.from({ length: 2 }).map((_, index) => (
              <li key={index} className="list-disc animate-pulse bg-gray-200" />
            ))
          : menuList.map((item) => (
              <li key={item.id} className="list-disc">
                {item.name}
              </li>
            ))}
      </ul>
    </div>
  );
}

function mockFetch(): Promise<List[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "steak",
        },
        {
          id: 2,
          name: "chicken",
        },
      ]);
    }, 3000);
  });
}
