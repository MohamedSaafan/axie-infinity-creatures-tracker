interface CreatureClass {
  name: string;
  id: string;
}
interface AxieType {
  axieNumber: string;
  scholar: string;
  creatureClass: CreatureClass | null;
  parent1: string;
  parent2: string;
  siblings: string;
  children: string;
  isGoodFighter: boolean;
  isGoodForBreeding: boolean;
  comment: string;
}

interface TeamType {
  teamName: string;
  leader: string;
}

interface ScholarType {
  scholarName: string;
  team: string;
  walletId: string;
}
