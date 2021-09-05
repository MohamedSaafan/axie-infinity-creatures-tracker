interface AxieType {
  number: string;
  scholar_id: string;
  class: string;
  parent1: string;
  parent2: string;
  siblings: string;
  children: string;
  good_fighter: boolean;
  good_for_breeding: boolean;
  comment: string;
  id?: number;
}

interface TeamType {
  teamName: string;
  leader: string;
}

interface ScholarType {
  id?: number;
  team_id?: number;
  wallet_id: string;
  name: string;
}
