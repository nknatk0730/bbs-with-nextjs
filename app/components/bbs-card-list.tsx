import { BbsData } from "../types/types"
import { BbsCard } from "./bbs-card"

type BbsAllDataProps = {
  bbsAllData: BbsData[];
}

export const BbsCardList = ({
  bbsAllData
}: BbsAllDataProps) => {
  return (
    <div className="grid lg:grid-cols-3 gap-4 p-8">
      {bbsAllData.map((bbsData) => (
        <BbsCard key={bbsData.id} bbsData={bbsData} />
      ))}
    </div>
  )
}