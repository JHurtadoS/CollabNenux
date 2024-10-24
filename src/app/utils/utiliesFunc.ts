import * as dayjs from 'dayjs';

// 1. Función para convertir un timestamp Unix a un objeto dayjs
export function convertUnixToDayjs(unixTimestamp: number): dayjs.Dayjs {
  return dayjs.unix(unixTimestamp);
}

// 2. Función para calcular la diferencia en segundos entre dos tiempos (el actual y otro)
export function calculateTimeDifference(expiresAt: dayjs.Dayjs): number {
  const now = dayjs();  // Tiempo actual
  return expiresAt.diff(now, 'second');  // Diferencia en segundos
}

// 3. Función para obtener los minutos y segundos de un objeto dayjs
export function getMinutesAndSecondsFromDayjs(date: dayjs.Dayjs): { minutes: number; seconds: number } {
  return {
    minutes: date.minute(),
    seconds: date.second()
  };
}
