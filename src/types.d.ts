interface AxieType {
  id?: number;
  number: string;
  breed_type: string;
  scholar_id: string;
  breed_count: number;
  good_breeder: boolean;
  good_racer: boolean;
  comments: string;
  father: string;
  mother: string;
  gender: string;
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
