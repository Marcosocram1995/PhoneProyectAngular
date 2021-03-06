import { Phone } from "./phone";

export interface CustomResponse {
  timestamp: Date;
  statusCode: number;
  status: string;
  reason: string;
  message: string;
  developerMessage: string;
  data: { phones?: Phone[], phone?: Phone }
}
