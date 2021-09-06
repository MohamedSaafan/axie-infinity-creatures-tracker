interface AxieType {
  number: string;
  scholar_id: string;
  classname: string;
  parent1: string;
  parent2: string;
  siblings: string;
  children: string;
  good_fighter: boolean;
  good_for_breeding: boolean;
  comment: string;
  id?: number;
  breed_count: number;
}

interface TeamType {
  leader_id: number;
  name: string;
  id?: number;
}

interface ScholarType {
  id?: number;
  team_id?: number;
  wallet_id: string;
  name: string;
}
