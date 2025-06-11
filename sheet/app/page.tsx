import ActionBar from "@/components/Invoice/ActionBar";
import Table from "@/components/Invoice/Table";

export default function Home() {
  return (
    <main className="mt-4">
      <div className="bg-white rounded-md shadow">
        <ActionBar />
        <Table />
      </div>
    </main>
  );
}
