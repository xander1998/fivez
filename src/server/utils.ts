export function MathRandom(min : number, max : number) : number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function Wait(ms : number) : Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function GetIdentifier(player : string, type : string) : string {
  const identifiers : string[] = [];
  const identCount = GetNumPlayerIdentifiers(player);
  for (let a = 0; a < identCount; a++) {
    identifiers[a] = GetPlayerIdentifier(player, a);
  }
  for (let b = 0; b < identifiers.length; b++) {
    if (identifiers[b].search(type) != -1) {
      return identifiers[b];
    }
  }
  return null;
}