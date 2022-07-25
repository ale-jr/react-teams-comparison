export interface TeamValues {
  participation: number;
  eNPS: number;
  overallEngagement: number;
  recognition: number;
  feedback: number;
  relationshipWithPeers: number;
  relationshipWithManager: number;
  satisfaction: number;
  alignment: number;
  happiness: number;
  wellness: number;
  personalGrowth: number;
  ambassadorship: number;
}

export interface Team extends TeamValues {
  name: string;
}
