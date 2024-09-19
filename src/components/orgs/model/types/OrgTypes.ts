interface IRecordingLimit {
  localEnabled: boolean;
  serverEnabled: boolean;
  serverLimitValue: number;
  _id: string;
}

interface IOrg {
  _id: string;
  domain: string;
  exp: number;
  name: string;
  participants: number;
  recordingLimit: IRecordingLimit;
}

export interface IOrgResponse {
  status: string;
  org?: IOrg;
}

export interface IOrgForm extends Omit<IOrg, "_id" | "recordingLimit" | "exp"> {
  recordingLimit: Omit<IRecordingLimit, "_id">;
  exp: number | null;
}

export type IOrgAdd = Pick<IOrg, "name" | "exp">;

export interface IOrgDelete {
  id: string;
}
