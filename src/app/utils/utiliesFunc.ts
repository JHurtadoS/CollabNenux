import dayjs from "./dayjs-helper";

export function convertUnixToDayjs(unixTimestamp: number): dayjs.Dayjs {
  return dayjs.unix(unixTimestamp);
}

export function calculateTimeDifference(expiresAt: dayjs.Dayjs): number {
  const now = dayjs();  // Tiempo actual
  return expiresAt.diff(now, 'second');  // Diferencia en segundos
}

export function getMinutesAndSecondsFromDayjs(date: dayjs.Dayjs): { minutes: number; seconds: number } {
  return {
    minutes: date.minute(),
    seconds: date.second()
  };
}
