import Filter from "@/components/dashboard/filter";
import ListCard from "@/components/dashboard/list-card";

export default function Home() {
  return (
    <div className='m-3'>
      <Filter />
      <ListCard />
    </div>
  );
}
