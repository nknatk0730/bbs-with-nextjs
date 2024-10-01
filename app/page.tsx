import { BbsCardList } from "./components/bbs-card-list";
import { BbsData } from "./types/types";


const getBbsAllData = async () => {
  const res = await fetch('http://localhost:3000/api/post', {
    cache: 'no-store',
  });

  const bbsAllData: BbsData[] = await res.json();

  return bbsAllData;
}

export default async function Home() {
  const bbsAllData = await getBbsAllData();

  return (
    <div>
      <BbsCardList bbsAllData={bbsAllData} />      
    </div>
  );
}
