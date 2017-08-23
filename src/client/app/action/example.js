export const INC = 'INC';
export const DEC = 'DEC';

export function inc() {
  return { type: INC };
}

export function dec() {
  return { type: DEC };
}

