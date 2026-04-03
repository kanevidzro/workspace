export interface BuildSystemStatusInput {
  serviceName: string;
  now?: Date;
}

export interface SystemStatus {
  service: string;
  status: "ok";
  checkedAt: string;
}

export function buildSystemStatus(input: BuildSystemStatusInput): SystemStatus {
  const timestamp = (input.now ?? new Date()).toISOString();

  return {
    service: input.serviceName,
    status: "ok",
    checkedAt: timestamp,
  };
}
